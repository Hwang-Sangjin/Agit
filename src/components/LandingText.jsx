import { useEffect, useRef } from "react";
import Letter from "./Letter";
import gsap from "gsap";

export default function LandingText() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    // 초기 등장 애니메이션
    gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#bfb1a8]">
      <h1
        ref={textRef}
        className="text-6xl font-main text-white overflow-hidden tracking-widest"
      >
        {"STUDIOOLIMPO".split("").map((c, i) => (
          <Letter text={c} />
        ))}
      </h1>
    </div>
  );
}
