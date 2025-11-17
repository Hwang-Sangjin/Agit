import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/model/Agit.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.010"]}
        position={[0, 0.05, 0]}
        scale={[2.5, 0.05, 3.881]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.011"]}
        scale={22.047}
      />
      <group
        position={[0.05, 1.85, -3.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.45, 0.05, 1.75]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.010"]}
        position={[-2.438, 1.85, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3.881, 0.05, 1.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Dark wood"]}
        position={[0, 0.15, 0]}
        scale={[2.5, 0.05, 3.881]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rim.geometry}
        material={materials["Material.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LANDBANA_50560579.geometry}
        material={materials.SimplygonCastMaterial}
        position={[0, 0.2, -2.364]}
        rotation={[0, 1.571, 0]}
        scale={1.231}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.STOCKHOLM_2025_60586116.geometry}
        material={materials["SimplygonCastMaterial.001"]}
        position={[1.455, 0.2, 0.89]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={materials.Glass}
        position={[0.594, 0.247, 0.673]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.397}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={materials.Glass}
        position={[0.958, 0.247, -0.251]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.397}
      />
      <group
        position={[-0.028, 0.674, 0.464]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.054}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder151_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder151_2.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <group
        position={[0.105, 0.974, 1.243]}
        rotation={[-Math.PI / 2, 1.571, 0]}
        scale={0.003}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["Material.047"]}
        />
      </group>
      <group position={[-0.265, 0.815, 1.053]} scale={0.312}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_1.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_2.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_3.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_4.geometry}
          material={materials["Material.058"]}
        />
      </group>
      <group
        position={[-0.066, 0.66, 0.33]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.264, 0.426, 0.294]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube162.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube162_1.geometry}
          material={materials.wood5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube162_2.geometry}
          material={materials["Material.033"]}
        />
      </group>
      <group
        position={[0.199, 0.705, 0.583]}
        rotation={[Math.PI / 2, 0, 1.682]}
        scale={0.027}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials["VRayMtl42.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials["VRayMtl22.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_2.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_3.geometry}
          material={materials["Material.060"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_4.geometry}
          material={materials["VRayMtl49.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_5.geometry}
          material={materials["VRayMtl45.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_6.geometry}
          material={materials["VRayMtl53.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_7.geometry}
          material={materials["VRayMtl26.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_8.geometry}
          material={materials["VRayMtl50.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_9.geometry}
          material={materials["VRayMtl48.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_10.geometry}
          material={materials["VRayMtl54.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_11.geometry}
          material={materials["VRayMtl32.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_12.geometry}
          material={materials["VRayMtl27.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_13.geometry}
          material={materials["VRayMtl29.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_14.geometry}
          material={materials["VRayMtl55.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[0.05, 1.95, -3.73]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.45, 0.05, 1.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.034"]}
        position={[-2.338, 1.95, -1.33]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.45, 0.05, 1.75]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Wood.001"]}
        position={[0.968, 1.337, -3.768]}
        scale={[0.012, 1, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Wood.001"]}
        position={[-1.643, 1.528, -3.768]}
        scale={[0.012, 1.178, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Realistic Old Wood"]}
        position={[1.307, 2.363, -4.103]}
        scale={[0.645, 0.013, 0.645]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Realistic Old Wood"]}
        position={[-1.376, 2.731, -4.103]}
        scale={[0.645, 0.013, 0.645]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Wood.001"]}
        position={[-2.375, 1.957, -0.479]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.012, 1.605, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["Material.010"]}
        position={[-2.438, 1.903, -2.466]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[4.057, 0.08, 1.829]}
      />
      <group
        position={[-1.925, 0.857, 1.144]}
        rotation={[Math.PI / 2, 0, 1.412]}
        scale={0.027}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials["VRayMtl42.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials["VRayMtl22.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_3.geometry}
          material={materials["Material.060"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_4.geometry}
          material={materials["VRayMtl49.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_5.geometry}
          material={materials["VRayMtl45.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_6.geometry}
          material={materials["VRayMtl53.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_7.geometry}
          material={materials["VRayMtl26.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_8.geometry}
          material={materials["VRayMtl50.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_9.geometry}
          material={materials["VRayMtl48.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_10.geometry}
          material={materials["VRayMtl54.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_11.geometry}
          material={materials["VRayMtl32.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_12.geometry}
          material={materials["VRayMtl27.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_13.geometry}
          material={materials["VRayMtl29.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_14.geometry}
          material={materials["VRayMtl55.001"]}
        />
      </group>
      <group
        position={[0, 0.2, -3.253]}
        rotation={[0, -1.571, 0]}
        scale={1.055}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Realistic Old Wood"]}
        position={[1.873, 2.391, -3.663]}
        scale={[0.011, 0.16, 0.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Realistic Old Wood"]}
        position={[1.841, 2.391, -3.663]}
        scale={[0.011, 0.16, 0.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Realistic Old Wood"]}
        position={[-0.809, 2.759, -3.663]}
        scale={[0.011, 0.16, 0.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Realistic Old Wood"]}
        position={[-0.842, 2.759, -3.663]}
        scale={[0.011, 0.16, 0.117]}
      />
      <group
        position={[-0.036, 1.636, -3.62]}
        rotation={[-0.096, -Math.PI / 2, 0]}
        scale={0.424}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047_1.geometry}
          material={materials.IMac1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047_2.geometry}
          material={materials.IMac2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047_3.geometry}
          material={materials.IMac3}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane087.geometry}
        material={materials["Material.037"]}
        position={[-0.107, 1.044, -3.111]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.309, 0.242, 0.242]}
      />
      <group
        position={[-0.957, 1.353, -3.4]}
        rotation={[-Math.PI, 0.694, 1.591]}
        scale={[0.147, 0.228, 0.228]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["Material.092"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["Material.093"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials["Material.094"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyZ.geometry}
        material={materials["Material.090"]}
        position={[-0.472, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyY.geometry}
        material={materials["Material.090"]}
        position={[-0.336, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyX.geometry}
        material={materials["Material.090"]}
        position={[-0.44, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyW.geometry}
        material={materials["Material.090"]}
        position={[-0.464, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyV.geometry}
        material={materials["Material.090"]}
        position={[-0.376, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyUp.geometry}
        material={materials["Material.091"]}
        position={[-0.017, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyU.geometry}
        material={materials["Material.090"]}
        position={[-0.303, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyT.geometry}
        material={materials["Material.090"]}
        position={[-0.368, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeySpacebar.geometry}
        material={materials["Material.090"]}
        position={[-0.343, 1.08, -2.921]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.097, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyShiftR.geometry}
        material={materials["Material.091"]}
        position={[-0.126, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.04, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyShiftL.geometry}
        material={materials["Material.091"]}
        position={[-0.525, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.034, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeySemicolon.geometry}
        material={materials["Material.090"]}
        position={[-0.202, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyS.geometry}
        material={materials["Material.090"]}
        position={[-0.456, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyRight.geometry}
        material={materials["Material.091"]}
        position={[0.015, 1.08, -2.921]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyR.geometry}
        material={materials["Material.090"]}
        position={[-0.4, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyQ.geometry}
        material={materials["Material.090"]}
        position={[-0.496, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyP.geometry}
        material={materials["Material.090"]}
        position={[-0.207, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyO.geometry}
        material={materials["Material.090"]}
        position={[-0.239, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyN.geometry}
        material={materials["Material.090"]}
        position={[-0.312, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyM.geometry}
        material={materials["Material.090"]}
        position={[-0.28, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyLeft.geometry}
        material={materials["Material.091"]}
        position={[-0.05, 1.08, -2.921]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyL.geometry}
        material={materials["Material.090"]}
        position={[-0.234, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyK.geometry}
        material={materials["Material.090"]}
        position={[-0.265, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyJ.geometry}
        material={materials["Material.090"]}
        position={[-0.297, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyI.geometry}
        material={materials["Material.090"]}
        position={[-0.271, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyH.geometry}
        material={materials["Material.090"]}
        position={[-0.329, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyG.geometry}
        material={materials["Material.090"]}
        position={[-0.361, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyF.geometry}
        material={materials["Material.090"]}
        position={[-0.392, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyEnter.geometry}
        material={materials["Material.091"]}
        position={[-0.119, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.033, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyE.geometry}
        material={materials["Material.090"]}
        position={[-0.432, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyDown.geometry}
        material={materials["Material.091"]}
        position={[-0.017, 1.08, -2.921]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyD.geometry}
        material={materials["Material.090"]}
        position={[-0.424, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyCtrlR.geometry}
        material={materials["Material.091"]}
        position={[-0.103, 1.08, -2.921]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.016, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyCtrlL.geometry}
        material={materials["Material.091"]}
        position={[-0.541, 1.08, -2.921]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.02, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyCom.geometry}
        material={materials["Material.090"]}
        position={[-0.17, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyC.geometry}
        material={materials["Material.090"]}
        position={[-0.408, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyBracket2.geometry}
        material={materials["Material.090"]}
        position={[-0.143, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyBracket.geometry}
        material={materials["Material.090"]}
        position={[-0.175, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyBackspace.geometry}
        material={materials["Material.091"]}
        position={[-0.115, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.029, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyB.geometry}
        material={materials["Material.090"]}
        position={[-0.344, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyAltR.geometry}
        material={materials["Material.091"]}
        position={[-0.222, 1.08, -2.921]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.016, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyAltL.geometry}
        material={materials["Material.091"]}
        position={[-0.462, 1.08, -2.921]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.016, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyA.geometry}
        material={materials["Material.090"]}
        position={[-0.488, 1.08, -2.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key9.geometry}
        material={materials["Material.090"]}
        position={[-0.256, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key8.geometry}
        material={materials["Material.090"]}
        position={[-0.289, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key7.geometry}
        material={materials["Material.090"]}
        position={[-0.321, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key6.geometry}
        material={materials["Material.090"]}
        position={[-0.353, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key5.geometry}
        material={materials["Material.090"]}
        position={[-0.385, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key4.geometry}
        material={materials["Material.090"]}
        position={[-0.417, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key3.geometry}
        material={materials["Material.090"]}
        position={[-0.449, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key2.geometry}
        material={materials["Material.090"]}
        position={[-0.481, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key1.geometry}
        material={materials["Material.090"]}
        position={[-0.514, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key0.geometry}
        material={materials["Material.090"]}
        position={[-0.224, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DINERA_30362820.geometry}
        material={materials["SimplygonCastMaterial.012"]}
        position={[0.587, 1.044, -2.871]}
        rotation={[0, -0.779, 0]}
        scale={1.603}
      />
      <group
        position={[0.914, 1.093, -3.437]}
        rotation={[0, -0.721, 0]}
        scale={0.071}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder133.geometry}
          material={materials["Material.082"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder133_1.geometry}
          material={materials["Material.083"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder133_2.geometry}
          material={materials["Material.084"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder133_3.geometry}
          material={materials["Material.081"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube261.geometry}
        material={materials["Material.087"]}
        position={[0.249, 1.058, -3.051]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.06, 0.078, 0.078]}
      />
      <group
        position={[-0.546, 1.08, -3.098]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials["Material.091"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_1.geometry}
          material={materials["Material.090"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_2.geometry}
          material={materials["Material.088"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube190.geometry}
        material={materials["Material.095"]}
        position={[-0.84, 1.047, -3.269]}
        rotation={[Math.PI, -0.877, Math.PI]}
        scale={[0.09, 0.134, 0.134]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube147.geometry}
        material={materials["Material.090"]}
        position={[-0.106, 1.08, -3.017]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.019, 0.014, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube146.geometry}
        material={materials["Material.090"]}
        position={[-0.16, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube145.geometry}
        material={materials["Material.090"]}
        position={[-0.183, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube144.geometry}
        material={materials["Material.090"]}
        position={[-0.192, 1.08, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube141.geometry}
        material={materials["Material.090"]}
        position={[-0.248, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107.geometry}
        material={materials["Material.090"]}
        position={[-0.216, 1.08, -2.954]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EKET_79386075.geometry}
        material={materials["Wood Smooth Cherry"]}
        position={[1.844, 0.2, -3.392]}
        scale={[2.158, 1.254, 1.254]}
      />
      <group
        position={[-2.137, 0.2, -2.559]}
        rotation={[0, 1.571, 0]}
        scale={[0.721, 1.106, 0.506]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ProcessedGeometry002.geometry}
          material={materials["SimplygonCastMaterial.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ProcessedGeometry002_1.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <group
        position={[-2, 0.461, 1.306]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.374}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials["Procedural Wood.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_1.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_2.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_3.geometry}
          material={materials["Material.020"]}
        />
      </group>
      <group
        position={[-1.918, 0.397, -3.458]}
        rotation={[-0.27, 0.318, 0.145]}
        scale={0.268}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_1.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_2.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_3.geometry}
          material={materials["Material.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_4.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_5.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_6.geometry}
          material={materials["Material.031"]}
        />
      </group>
      <group
        position={[-2.112, 0.819, 1.342]}
        rotation={[0, 0.031, 0]}
        scale={1.097}
      >
        <group position={[0, 0.016, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030.geometry}
            material={materials.Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_1.geometry}
            material={materials["PS5Core.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_2.geometry}
            material={materials["BlueLED.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_3.geometry}
            material={materials["GlassLED.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_4.geometry}
            material={materials["Chrome.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_5.geometry}
            material={materials["BluePlastic.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_6.geometry}
            material={materials["Gold.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_7.geometry}
            material={materials["Material.032"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_8.geometry}
            material={materials["SidePanels.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_9.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_10.geometry}
            material={materials["SidePanels.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_11.geometry}
            material={materials.SidePanels}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_12.geometry}
            material={materials.PS5Core}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_13.geometry}
            material={nodes.Cylinder030_13.material}
          />
        </group>
      </group>
      <group
        position={[-2.131, 1.09, -0.751]}
        rotation={[0, 1.169, 0]}
        scale={[0.006, 0.003, 0.006]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={materials["Material.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_1.geometry}
          material={materials.net}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_2.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_3.geometry}
          material={materials["Material.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_4.geometry}
          material={materials["Material.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_5.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <group
        position={[-2.19, 1.105, -2.262]}
        rotation={[0, 1.134, 0]}
        scale={[0.086, 0.086, 0.139]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials["Material.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_1.geometry}
          material={materials["Material.048"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GRÖNFJÄLL_40532921.geometry}
        material={materials["material_94697111-9172-484f-b7d8-baf6bbedb948"]}
        position={[0, 0.21, -2.68]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.084}
      />
      <group position={[1.86, 0.782, -3.298]} scale={1.193}>
        <group position={[0, 0.104, -0.079]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025.geometry}
            material={materials["Back Panel"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025_1.geometry}
            material={materials["Back Panel Extras"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025_2.geometry}
            material={materials["Metal-2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025_3.geometry}
            material={materials.Screws}
          />
        </group>
        <group position={[0, 0.099, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.Leather}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials["Metal-2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials["Mesh Panel"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={materials.Legs}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo.geometry}
          material={materials.Logo}
          position={[0, 0.112, 0.096]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Mesh_Grid_(enable_if_you_want)"].geometry}
          material={materials.Mesh}
          position={[0, 0.105, 0.096]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Panel.geometry}
          material={materials["Metal-1"]}
          position={[0.001, 0.176, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Indication_lights.geometry}
            material={materials["Indication Lights"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Play_Switch.geometry}
            material={materials["Metal-1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Power_Switch.geometry}
            material={materials["Metal-1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Texts.geometry}
            material={materials.Texts}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024.geometry}
            material={materials["Metal-1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024_1.geometry}
            material={materials.Buttons_Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015.geometry}
            material={materials["Metal-1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_1.geometry}
            material={materials.Buttons_Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023.geometry}
            material={materials["Metal-1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023_1.geometry}
            material={materials.Buttons_Black}
          />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.Material}
        position={[1.874, 1.259, -3.379]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.136}
      >
        <group
          position={[-0.162, 0, -0.086]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.072}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022.geometry}
            material={materials["white matte"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022_1.geometry}
            material={materials["grungy metal"]}
          />
        </group>
        <group
          position={[-0.162, 0, -0.099]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.072}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021.geometry}
            material={materials["красный матовый"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021_1.geometry}
            material={materials["grungy metal"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.engine.geometry}
          material={materials["black glossy"]}
          position={[0.002, 0.008, 0.031]}
          scale={[1, 0.995, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fastening.geometry}
          material={materials["black glossy"]}
          position={[-0.166, -0.002, -0.133]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.piece_2.geometry}
          material={materials["black glossy"]}
          position={[-0.165, 0, -0.065]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.166, -0.994, -0.999]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.power_connector.geometry}
          material={materials["grungy metal"]}
          position={[-0.162, 0, -0.036]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.126, 0.706, 1.126]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.push.geometry}
          material={materials["black matte"]}
          position={[-0.165, 0, -0.052]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.06, 0.349, 1.06]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["white matte"]}
          position={[0.119, 0.013, -0.158]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials["white matte"]}
          position={[0.085, 0.013, -0.158]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text006.geometry}
          material={materials["white matte"]}
          position={[-0.165, 0.004, -0.098]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text007.geometry}
          material={materials["white matte"]}
          position={[-0.165, 0.004, -0.048]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text008.geometry}
          material={materials["white matte"]}
          position={[-0.165, -0.007, -0.099]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text009.geometry}
          material={materials["white matte"]}
          position={[-0.165, -0.007, -0.087]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text010.geometry}
          material={materials["white matte"]}
          position={[-0.165, 0.001, -0.063]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text011.geometry}
          material={materials["white matte"]}
          position={[-0.165, -0.004, -0.063]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.thorn.geometry}
          material={materials["grungy metal"]}
          position={[0.002, 0.021, 0.031]}
        />
        <group position={[0.069, 0.021, -0.171]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials["black matte"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_1.geometry}
            material={materials["grungy metal"]}
          />
        </group>
        <group position={[0.104, 0.021, -0.171]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials["black matte"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_1.geometry}
            material={materials["grungy metal"]}
          />
        </group>
      </mesh>
      <group
        position={[1.874, 1.265, -3.57]}
        rotation={[-0.891, -1.571, 0]}
        scale={-0.069}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dust_cover.geometry}
          material={materials["dust cover"]}
          scale={-16.427}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fastening_2.geometry}
          material={materials["grungy metal"]}
          rotation={[0, Math.PI / 2, 0]}
          scale={-16.427}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.legs.geometry}
        material={materials["black glossy"]}
        position={[1.874, 1.199, -3.379]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.136}
      />
      <group
        position={[2.022, 1.313, -3.544]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={1.136}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials["grungy metal"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials["black matte"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_2.geometry}
          material={materials["pink plastik"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.piece.geometry}
        material={materials["black glossy"]}
        position={[2.041, 1.275, -3.471]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.136}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials["white matte"]}
          position={[0.041, 0.001, -0.002]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text004.geometry}
          material={materials["white matte"]}
          position={[0.047, 0.001, -0.002]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005.geometry}
          material={materials["white matte"]}
          position={[0.053, 0.001, -0.002]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.005}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tuning_handle_3.geometry}
          material={materials["black matte"]}
          position={[0.052, 0.001, 0]}
        />
      </mesh>
      <group
        position={[1.838, 1.284, -3.377]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.136}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.fabric}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials["grungy metal"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials["Tissus curtain"]}
        position={[-2.184, 0.484, -3.531]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.344, 1.2, 0.576]}
      >
        <group position={[-0.836, 2.38, 0.002]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.749, 2.378, 0.006]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.666, 2.379, 0.006]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.612, 2.373, -0.001]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.516, 2.377, 0.003]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.456, 2.376, 0.002]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.372, 2.375, 0.001]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.297, 2.381, -0.006]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.21, 2.377, 0]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.127, 2.379, -0.001]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[-0.037, 2.384, -0.002]} scale={[0.04, 0.012, 0.024]}>
          <group position={[0.081, 3.071, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rideau.geometry}
        material={materials["Tissus curtain"]}
        position={[-2.184, 0.484, -1.221]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.538, 1.2, 0.594]}
      >
        <group position={[0.095, 2.38, -0.008]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.183, 2.383, -0.004]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.282, 2.378, -0.001]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.356, 2.377, -0.005]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.427, 2.379, 0.001]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.497, 2.38, -0.006]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.564, 2.388, -0.012]} scale={[0.026, 0.012, 0.023]}>
          <group
            position={[-0.124, 2.915, 0.518]}
            rotation={[0.177, -0.003, 0.01]}
            scale={71.856}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.659, 2.38, 0.004]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.731, 2.374, 0]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.822, 2.387, 0.008]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
        <group position={[0.033, 2.385, 0.001]} scale={[0.026, 0.012, 0.023]}>
          <group position={[0.081, 3.25, -0.048]} scale={71.856}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007.geometry}
              material={materials.Ral7016}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh007_1.geometry}
              material={materials["métal gris brillant"]}
            />
          </group>
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tringle.geometry}
        material={materials.Ral7016}
        position={[-2.184, 3.389, -2.376]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.911, 1.2, 1.873]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LISTERBY_105622002.geometry}
        material={materials["material_0.002"]}
        position={[-2.053, 0.2, -0.743]}
        rotation={[0, 0.553, 0]}
      />
    </group>
  );
}

useGLTF.preload("/model/Agit.glb");
