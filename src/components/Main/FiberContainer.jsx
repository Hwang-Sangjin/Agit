import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import { Room } from "./Room";

const FiberContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Room />
      </Suspense>
    </Canvas>
  );
};

export default FiberContainer;
