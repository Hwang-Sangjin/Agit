import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const TransitionPlane = ({ trigger, color = "#f4eee2" }) => {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  // 1. viewport 정보를 가져와서 평면이 항상 화면을 가득 채우도록 함
  const { viewport } = useThree();

  useEffect(() => {
    if (!trigger) return;

    const material = materialRef.current;
    if (!material) return;

    // 타임라인 생성
    const tl = gsap.timeline();

    // 애니메이션 로직: 투명(0) -> 불투명(1) -> 유지 -> 투명(0)
    tl.to(material, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    }).to(material, {
      opacity: 0,
      duration: 1.5,
      delay: 0.2, // 화면이 가려진 상태 유지 시간
      ease: "power2.inOut",
      onComplete: () => {
        // 애니메이션이 끝나면 안전하게 0으로 확실히 설정
        material.opacity = 0;
      },
    });
  }, [trigger]);

  return (
    <mesh
      ref={meshRef}
      // 2. 평면이 카메라를 항상 정면으로 바라보지 않을 수 있으므로
      //    일반적으로 HUD 처리를 하거나, 단순히 카메라 앞쪽으로 위치를 잡습니다.
      //    여기서는 0,0,0에 위치한다고 가정합니다. (하단 설명 참조)
      position={[0, 0, 0]}
      renderOrder={999} // 3. 가장 나중에 그려지도록 설정 (CSS z-index 유사)
    >
      {/* 화면 꽉 채우기: viewport.width, viewport.height */}
      <planeGeometry args={[viewport.width, viewport.height]} />

      <meshBasicMaterial
        ref={materialRef}
        color={color}
        transparent={true} // 투명도 조절을 위해 필수
        opacity={0} // 초기값 0 (보이지 않음)
        depthTest={false} // 4. 깊이 테스트를 꺼서 다른 3D 물체보다 무조건 앞에 보이게 함
        depthWrite={false}
      />
    </mesh>
  );
};

export default TransitionPlane;
