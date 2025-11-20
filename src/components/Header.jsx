import React, { useEffect, useRef } from "react";
import { useLoadingStore } from "../store/loadingState";
import gsap from "gsap";

const Header = () => {
  const textRef = useRef(null);

  const isLoading = useLoadingStore((state) => state.isLoading);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  useEffect(() => {
    const el = textRef.current;

    if (isLoading === false) {
      gsap.fromTo(
        el,
        { y: -60, opacity: 0 },
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
      <h1
        ref={textRef}
        className="text-xl font-header  text-dark overflow-hidden "
      >
        Header
      </h1>
    </>
  );
};

export default Header;
