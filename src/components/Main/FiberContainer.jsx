import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import { Room } from "./Room";

const FiberContainer = () => {
  return (
    <Suspense fallback={null}>
      <Room />
    </Suspense>
  );
};

export default FiberContainer;
