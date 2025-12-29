import { Effect } from "postprocessing";
import { Uniform, Vector2 } from "three";

/**
 * 핵심: 네가 말한 로직 그대로
 * normalizedPixelSize = pixelSize / resolution
 * uvPixel = normalizedPixelSize * floor(uv / normalizedPixelSize)
 * color = texture2D(inputBuffer, uvPixel)
 *
 * + 확장: cellUV(fract)로 "셀 내부 픽셀"에 패턴을 직접 그림(가로줄/도트 등)
 */
const fragmentShader = /* glsl */ `
uniform float pixelSize;
uniform vec2 resolution;

// 0~1 범위로 들어온 uv, inputBuffer는 postprocessing에서 제공
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // 1) 픽셀 크기를 UV 기준으로 정규화
  vec2 normalizedPixelSize = vec2(pixelSize) / resolution;

  // 2) UV를 픽셀 그리드에 스냅
  vec2 uvPixel = normalizedPixelSize * floor(uv / normalizedPixelSize);

  // 3) 스냅된 좌표에서 텍스처 샘플링 (픽셀화)
  vec4 color = texture2D(inputBuffer, uvPixel);

  // ---- 여기부터 "직접 픽셀 조작" 파트 ----
  // 셀(픽셀 블록) 내부 상대좌표: 0~1
  vec2 cellUV = fract(uv / normalizedPixelSize);

  // 밝기(luma) 계산
  float luma = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));

  // 예시 패턴 1) "영수증/스캔라인" 느낌: 밝기에 따라 가로줄 두께 변화
  // cellUV.y가 낮은 구간을 줄로 만들기
  float lineThickness = mix(0.08, 0.75, luma); // 어두울수록 얇게, 밝을수록 두껍게
  float isLine = step(cellUV.y, lineThickness); // 1이면 라인 영역

  // 예시 패턴 2) 셀 테두리(픽셀 격자 느낌) 약하게 추가
  float border = 0.0;
  border += step(cellUV.x, 0.03);
  border += step(cellUV.y, 0.03);
  border += step(0.97, cellUV.x);
  border += step(0.97, cellUV.y);
  border = clamp(border, 0.0, 1.0);

  // 패턴을 색에 섞기 (원하면 이 부분 마음껏 바꿔도 됨)
  // - 라인 영역: 살짝 어둡게
  // - 보더: 조금 더 어둡게
  vec3 outRGB = color.rgb;
  outRGB = mix(outRGB, outRGB * 0.35, isLine * 0.35);
  outRGB = mix(outRGB, outRGB * 0.20, border * 0.65);

  outputColor = vec4(outRGB, color.a);
}
`;

export class PixelGridEffect extends Effect {
  constructor({ pixelSize = 8, resolution = [1, 1] } = {}) {
    super("PixelGridEffect", fragmentShader, {
      uniforms: new Map([
        ["pixelSize", new Uniform(pixelSize)],
        ["resolution", new Uniform(new Vector2(resolution[0], resolution[1]))],
      ]),
    });
  }

  setPixelSize(v) {
    this.uniforms.get("pixelSize").value = v;
  }

  setResolution(w, h) {
    this.uniforms.get("resolution").value.set(w, h);
  }
}
