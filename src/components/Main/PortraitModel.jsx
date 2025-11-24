import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PortraitModel(props) {
  const { nodes, materials } = useGLTF("/model/Portrait.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.337, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.82, 0.82, 1.17]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.skin}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.004"]}
        position={[0.364, 0.499, 0.044]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.021}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.004"]}
        position={[0, 0, 0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.004"]}
        position={[0, -0.011, 0.056]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Material.004"]}
        position={[0, -0.01, 0.044]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["Material.004"]}
        position={[0.188, -0.01, 0.044]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.004"]}
        position={[-0.501, 0.618, 0.052]}
        rotation={[0, 0, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials["Material.004"]}
        position={[0.397, 0.639, 0.052]}
        rotation={[-Math.PI, 0, -3.087]}
      />
      <group
        position={[0.364, 0.499, 0.044]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.021}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_2.geometry}
          material={materials.eye}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials["Material.004"]}
        position={[0.364, 0.499, 0.044]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.021}
      />
      <group
        position={[0.364, 0.499, 0.044]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.021}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_2.geometry}
          material={materials.eye}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.glass}
        position={[0.419, 0.324, 0.183]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.332}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.005"]}
        position={[0, 0, 0.076]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials["Material.005"]}
        position={[-0.005, -0.017, 0.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials["Material.005"]}
        position={[-0.178, 0.543, 0.057]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials["Material.005"]}
        position={[-0.208, 0.526, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials["Material.005"]}
        position={[-0.369, 0.477, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={materials["Material.005"]}
        position={[-0.409, 0.503, 0.102]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials.skin}
        position={[0, 0, -0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials["Material.003"]}
        position={[-0.036, -1.449, -0.07]}
        scale={1.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials.jacket}
        position={[0.004, -1.636, -0.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials["Material.004"]}
        position={[0.004, -1.636, -0.134]}
        scale={1.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={materials.jacket}
        position={[-0.279, -1.907, -0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials["Material.004"]}
        position={[-0.279, -1.907, -0.168]}
        scale={1.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["Material.006"]}
        position={[-0.031, -2.122, -0.028]}
        scale={[0.957, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials["Material.004"]}
        position={[-0.027, -2.097, -0.042]}
        scale={[1.016, 1.062, 1.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006_1.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006_2.geometry}
        material={materials.skin}
      />
    </group>
  );
}

useGLTF.preload("/model/Portrait.glb");
