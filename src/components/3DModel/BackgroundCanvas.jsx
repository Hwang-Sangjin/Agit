import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { useEffect, useMemo, useRef } from "react";
import { PixelGridEffect } from "./PixelGridEffect";

function Box() {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.004;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#f5ebd7" />
    </mesh>
  );
}

function PostFX() {
  const { size } = useThree();

  // Effect 인스턴스 생성 (한 번만)
  const effect = useMemo(() => {
    return new PixelGridEffect({
      pixelSize: 10, // 여기서 기본 픽셀 블록 크기
      resolution: [size.width, size.height],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 리사이즈 시 resolution 유니폼 업데이트 (중요!)
  useEffect(() => {
    effect.setResolution(size.width, size.height);
  }, [size.width, size.height, effect]);

  return (
    <EffectComposer>
      {/* @react-three/postprocessing은 Effect 인스턴스를 이렇게 넣을 수 있음 */}
      <primitive object={effect} />
    </EffectComposer>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Box />
        <PostFX />
      </Canvas>
    </div>
  );
}
