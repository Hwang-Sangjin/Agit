import { useEffect, useRef, useState } from "react";
import Letter from "./Letter";
import gsap from "gsap";
import { useLoadingStore } from "../../store/loadingState";

export default function LandingText() {
  const textRef = useRef(null);

  const isLoading = useLoadingStore((state) => state.isLoading);

  const [section, setSection] = useState(window.location.hash || "");

  useEffect(() => {
    const handleHashChange = () => {
      setSection(window.location.hash || "#section1");
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
      <h1
        ref={textRef}
        className="text-6xl font-main  text-dark overflow-hidden "
      >
        {(section === "#main" || section === "") && (
          <>
            {"MAIN".split("").map((c, i) => (
              <Letter text={c} />
            ))}
          </>
        )}
        {section === "#about" && (
          <>
            {"ABOUT".split("").map((c, i) => (
              <Letter text={c} />
            ))}
          </>
        )}
        {section === "#contact" && (
          <>
            {"CONTACT".split("").map((c, i) => (
              <Letter text={c} />
            ))}
          </>
        )}
      </h1>
    </>
  );
}
