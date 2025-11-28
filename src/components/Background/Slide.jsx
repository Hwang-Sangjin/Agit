import React from "react";

const Slide = () => {
  return (
    <mesh
    // material={pageState === 7 ? textureMaterial : null}
    >
      <boxGeometry args={[0.5, 0.05, 1]} />
      <meshBasicMaterial transparent={true} />
    </mesh>
  );
};

export default Slide;
