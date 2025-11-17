import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLoadingStore } from "../../store/loadingState";

const LoadingNumber = ({ number }) => {
  const numberRef = useRef();
  const percentRef = useRef();

  const digits = String(number).split("");

  // 🔥 Zustand state를 구독하는 방식으로 가져오기
  const isLoading = useLoadingStore((state) => state.isLoading);

  useEffect(() => {
    if (number === 100) {
      setTimeout(() => {
        const chars = numberRef.current.querySelectorAll(".char");

        gsap.to(chars, {
          y: -40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () => {
            // 모든 자릿수 애니메이션 끝난 후
            useLoadingStore.getState().setIsLoading(false);
          },
        });

        gsap.to(percentRef.current, {
          y: -40,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }, 1000);
    }
  }, [number]);

  return (
    <h1 className="text-8xl font-main text-white flex items-center">
      <span
        ref={numberRef}
        className="inline-flex w-[3ch] justify-end overflow-hidden"
      >
        {digits.map((digit, i) => (
          <span key={i} className="char inline-block">
            {digit}
          </span>
        ))}
      </span>
      <span ref={percentRef} className="inline-block">
        %
      </span>
    </h1>
  );
};

export default LoadingNumber;
