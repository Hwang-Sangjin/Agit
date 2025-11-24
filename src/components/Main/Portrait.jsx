import { Canvas } from "@react-three/fiber";
import React from "react";
import { PortraitModel } from "./PortraitModel";
import { OrbitControls } from "@react-three/drei";

const Portrait = () => {
  return (
    <Canvas>
      <PortraitModel position={[0, -1.5, 0]} />
      <ambientLight intensity={3.0} />
      <OrbitControls />
    </Canvas>
  );
};

export default Portrait;
