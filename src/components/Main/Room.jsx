import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/model/Agit.glb");
  return <></>;
}

useGLTF.preload("/model/Agit.glb");
