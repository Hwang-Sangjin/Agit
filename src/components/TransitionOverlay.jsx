import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TransitionOverlay = ({ trigger }) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null); // path용 ref
  const [dims, setDims] = useState({ width: 0, height: 0 });

  // 화면 크기 계산
  useEffect(() => {
    const update = () =>
      setDims({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!trigger) return;

    const el = svgRef.current;
    if (!el) return;

    const tl = gsap.timeline();

    // 초기값을 아래로
    gsap.set(el, { y: "100%" });

    tl.to(el, {
      y: "0%",
      duration: 0.6,
      ease: "power4.inOut",
    })
      .to(el, {
        y: "-100%",
        duration: 0.6,
        delay: 0.2,
        ease: "power4.inOut",
      })
      .set(el, { y: "100%" });
  }, [trigger]);

  const { width, height } = dims;

  const curveHeight = 100; // 곡선 높이
  const pathData = `
  M0,${curveHeight} 
  C ${width / 4},0 ${(3 * width) / 4},0 ${width},${curveHeight}
  L ${width},${height}
  L 0,${height}
  Z
`;

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className="fixed left-0 top-0 z-[999] translate-y-full pointer-events-none"
    >
      <path ref={pathRef} d={pathData} fill="var(--primary-color, #000)" />
    </svg>
  );
};

export default TransitionOverlay;
