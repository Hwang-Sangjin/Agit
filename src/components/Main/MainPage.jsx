import Header from "../Header";
import FiberContainer from "./FiberContainer";
import LandingText from "./LandingText";
import TransitionOverlay from "../TransitionOverlay";
import { useTransitionStore } from "../../store/transitionState";
import { useEffect, useState } from "react";
import Letter from "./Letter";
import Main from "../../pages/Main";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import { Canvas } from "@react-three/fiber";

function MainPage() {
  const trigger = useTransitionStore((state) => state.trigger);

  const [section, setSection] = useState(window.location.hash || "");

  useEffect(() => {
    const handleHashChange = () => {
      setSection(window.location.hash || "#section1");
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bright relative">
      {/* z-index는 높게 유지하되, 
         Canvas가 클릭을 가로채지 않도록 events={null}과 pointer-events-none을 설정합니다.
      */}
      <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">
        <Canvas
          events={null} // 1. R3F 이벤트 시스템 비활성화 (필수)
          className="pointer-events-none" // 2. DOM 요소 클릭 통과 (필수)
          style={{ pointerEvents: "none" }} // 3. 인라인 스타일로 확실하게 적용
          gl={{ alpha: true }} // 배경 투명하게
        >
          <TransitionOverlay trigger={trigger} />
        </Canvas>
      </div>

      <Header />

      {/* 콘텐츠 영역 */}
      <div>
        {(section === "#main" || section === "") && <Main />}
        {section === "#about" && <About />}
        {section === "#contact" && <Contact />}
      </div>
    </div>
  );
}

export default MainPage;
