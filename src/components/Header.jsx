import React, { useEffect, useRef, useState } from "react";
import { useLoadingStore } from "../store/loadingState";
import gsap from "gsap";

const Header = () => {
  const textRef = useRef(null);

  const isLoading = useLoadingStore((state) => state.isLoading);

  const [section, setSection] = useState(window.location.hash || "#section1");

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
        <div className="m-5" onClick={() => (window.location.hash = "main")}>
          main
        </div>
        <div className="m-5" onClick={() => (window.location.hash = "about")}>
          about
        </div>
        <div className="m-5" onClick={() => (window.location.hash = "contact")}>
          contact
        </div>
      </h1>
    </>
  );
};

export default Header;
