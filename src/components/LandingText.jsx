import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LandingText() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const chars = el.querySelectorAll(".char");

    gsap.fromTo(
      chars,
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
        className="text-6xl font-bold text-white overflow-hidden"
      >
        {"STUDIO OLIMPO".split("").map((c, i) => (
          <span key={i} className="char inline-block">
            {c}
          </span>
        ))}
      </h1>
    </div>
  );
}
