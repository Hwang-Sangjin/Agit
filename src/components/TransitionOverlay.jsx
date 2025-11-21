import { useEffect, useRef } from "react";
import gsap from "gsap";

const TransitionOverlay = ({ trigger }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    const el = overlayRef.current;

    // 타임라인 생성
    const tl = gsap.timeline();

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

  return (
    <div
      ref={overlayRef}
      className="fixed left-0 top-0 w-full h-full bg-black z-[999] translate-y-full"
    ></div>
  );
};

export default TransitionOverlay;
