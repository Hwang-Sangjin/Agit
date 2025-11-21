import React, { useEffect, useRef, useState } from "react";
import { useLoadingStore } from "../store/loadingState";
import gsap from "gsap";
import { useTransitionStore } from "../store/transitionState";

const Header = () => {
  const textRef = useRef(null);

  const isLoading = useLoadingStore((state) => state.isLoading);

  const setTrigger = useTransitionStore((state) => state.setTrigger);

  const [section, setSection] = useState(window.location.hash || "#section1");

  const onClickHeader = (section) => {
    // 1) 트랜지션 먼저 실행
    setTrigger(Date.now());

    // 2) 트랜지션 끝날 때 해시 변경
    setTimeout(() => {
      window.location.hash = section;
    }, 600); // 화면 덮는 시간과 동일
  };

  useEffect(() => {
    const handleHashChange = () => {
      setSection(window.location.hash || "#section1");
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
        className="flex flex-row text-xl font-header  text-dark overflow-hidden "
      >
        <div className="m-5" onClick={() => onClickHeader("main")}>
          main
        </div>
        <div className="m-5" onClick={() => onClickHeader("about")}>
          about
        </div>
        <div className="m-5" onClick={() => onClickHeader("contact")}>
          contact
        </div>
      </h1>
    </>
  );
};

export default Header;
