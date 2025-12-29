import React from "react";

const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1, 1]} />
      <meshBasicMaterial color="#f5ebd7" />
    </mesh>
  );
};

export default Box;
