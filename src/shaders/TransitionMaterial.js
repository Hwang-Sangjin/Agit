import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

export const TransitionMaterial = shaderMaterial(
  {
    uProgress: 0,
    uTex1: new THREE.Texture(),
    uTex2: new THREE.Texture(),
    resolution: new THREE.Vector2(),
  },
  // vertex
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
  `,
  // fragment
  `
  uniform float uProgress;
  uniform sampler2D uTex1;
  uniform sampler2D uTex2;
  uniform vec2 resolution;
  varying vec2 vUv;

  float random(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
    float block = 40.0;
    vec2 blockUV = floor(vUv * block) / block;

    float noise = random(blockUV);
    float thresh = smoothstep(0.0, 1.0, uProgress + noise * 0.3);

    vec4 from = texture2D(uTex1, vUv);
    vec4 to   = texture2D(uTex2, vUv);

    gl_FragColor = mix(from, to, thresh);
  }
  `
);
