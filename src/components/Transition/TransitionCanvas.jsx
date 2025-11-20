import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TransitionMaterial } from "../../shaders/TransitionMaterial";

export default function TransitionCanvas({ tex1, tex2, progress }) {
  const matRef = useRef();

  useFrame(() => {
    if (matRef.current) {
      matRef.current.uProgress = progress;
      matRef.current.uTex1 = tex1;
      matRef.current.uTex2 = tex2;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <TransitionMaterial ref={matRef} />
    </mesh>
  );
}
