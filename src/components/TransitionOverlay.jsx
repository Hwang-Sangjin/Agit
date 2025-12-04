import { useEffect, useRef, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

// 1. Vertex Shader: 기본 위치 및 UV 전달
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// 2. Fragment Shader: 잉크 번짐 효과 (Simplex Noise + FBM)
const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uProgress; // 0.0 (투명) -> 1.0 (완전 덮임)
  uniform vec2 uResolution;
  
  varying vec2 vUv;

  // --- Simplex Noise 함수 (외부 라이브러리 없이 쉐이더 내장) ---
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // --- FBM (Fractal Brownian Motion): 노이즈를 겹쳐서 디테일 생성 ---
  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // 회전 행렬로 노이즈 패턴을 섞음
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 4; ++i) {
      v += a * snoise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    // 1. 화면 비율 보정 (노이즈가 찌그러지지 않게)
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 aspectUV = vec2(uv.x * aspect, uv.y);

    // 2. 노이즈 생성 (종이 질감/잉크 패턴)
    // 수치를 조절하여 노이즈의 크기(scale)를 변경 가능 (현재 3.0)
    float noiseValue = fbm(aspectUV * 4.0 + uTime * 0.1);
    
    // 노이즈 값을 0~1 사이로 정규화 (snoise는 -1~1 반환하므로)
    noiseValue = (noiseValue + 1.0) * 0.5;

    // 3. 잉크 번짐 로직 (Fluid / Ink Bleed)
    // uProgress값과 노이즈를 비교하여 투명도 결정
    // smoothstep을 사용하여 경계면을 부드럽게(잉크 번지듯이) 처리
    
    // 경계면의 부드러움 정도
    float edgeWidth = 0.1; 
    
    // uProgress가 커질수록 화면을 덮음 (0 -> 1)
    // noiseValue가 uProgress보다 작으면 불투명해짐
    // 반대로(나타났다 사라지게) 하려면 로직 반전
    
    // Dissolve 효과 계산
    // uProgress는 0에서 1로 가지만, 노이즈와 비교를 위해 범위를 약간 확장(-edge ~ 1+edge)
    float mappedProgress = uProgress * (1.0 + edgeWidth * 2.0) - edgeWidth;
    float alpha = smoothstep(mappedProgress - edgeWidth, mappedProgress, noiseValue);
    
    // alpha는 현재 '보이는 부분'이 1이므로, 
    // 우리는 "덮이는 효과"를 원하므로 반전시킵니다.
    // 0(투명) -> 1(잉크가 덮음)
    float finalAlpha = 1.0 - alpha;

    gl_FragColor = vec4(uColor, finalAlpha);
  }
`;

const TransitionPlane = ({ trigger, color = "#f4eee2" }) => {
  const materialRef = useRef(null);
  const { viewport, size } = useThree(); // size에서 픽셀 해상도 가져옴

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uProgress: { value: 0.0 }, // 0: 투명, 1: 꽉 참
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [color, size.width, size.height]
  );

  useEffect(() => {
    // 화면 크기 변경 시 해상도 업데이트
    if (materialRef.current) {
      materialRef.current.uniforms.uResolution.value.set(
        size.width,
        size.height
      );
    }
  }, [size]);

  useEffect(() => {
    if (!trigger) return;

    const material = materialRef.current;
    if (!material) return;

    const tl = gsap.timeline();

    // 애니메이션 시퀀스
    // 1. 잉크가 번지며 화면 덮기 (uProgress 0 -> 1)
    tl.to(material.uniforms.uProgress, {
      value: 1,
      duration: 1.5,
      ease: "power2.inOut",
    })
      // 2. 잠시 대기
      .to(material.uniforms.uProgress, {
        value: 1, // 값 유지 (dummy tween for delay)
        duration: 0.2,
      })
      // 3. 잉크가 마르거나 사라지며 화면 열기 (uProgress 1 -> 0)
      //    이때 ease를 반전시켜서 자연스럽게
      .to(material.uniforms.uProgress, {
        value: 0,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          material.uniforms.uProgress.value = 0;
        },
      });
  }, [trigger]);

  // 약간의 노이즈 움직임을 위해 useFrame 사용 가능 (선택 사항)
  // useFrame((state) => {
  //   if (materialRef.current) {
  //     materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  //   }
  // });

  return (
    <mesh position={[0, 0, 0]} renderOrder={999}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};

export default TransitionPlane;
