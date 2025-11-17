import { useEffect, useRef } from "react";
import Letter from "./Letter";
import gsap from "gsap";
import { useLoadingStore } from "../../store/loadingState";

export default function LandingText() {
  const textRef = useRef(null);

  const isLoading = useLoadingStore((state) => state.isLoading);

  useEffect(() => {
    const el = textRef.current;

    if (isLoading === false) {
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
    }
    // 초기 등장 애니메이션
  }, [isLoading]);

  return (
    <>
      {isLoading ? null : (
        <h1
          ref={textRef}
          className="text-6xl font-main  text-white overflow-hidden "
        >
          {"MAIN".split("").map((c, i) => (
            <Letter text={c} />
          ))}
        </h1>
      )}
    </>
  );
}
