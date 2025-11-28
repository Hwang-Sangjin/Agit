import { Canvas } from "@react-three/fiber";
import Slide from "./Slide";
import { OrthographicCamera } from "@react-three/drei";

const BackgroundScene = () => {
  const wCnt = 20;
  const hCnt = 15;

  const SlidePos = [];
  for (let i = 0; i < hCnt; i++) {
    for (let j = 0; j < wCnt; j++) {
      const x = -16 + i * 2;
      const y = -20 + j * 1.7;
      SlidePos.push([x, y, 0]);
    }
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 20], fov: 500 }}>
        <ambientLight intensity={0.5} />
        <OrthographicCamera />
        <Slide />
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
