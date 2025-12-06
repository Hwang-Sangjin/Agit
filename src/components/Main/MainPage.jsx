import Header from "../Header";
import FiberContainer from "./FiberContainer";
import LandingText from "./LandingText";
import TransitionOverlay from "../TransitionOverlay";
import { useTransitionStore } from "../../store/transitionState";
import { useEffect, useRef, useState } from "react";
import Letter from "./Letter";
import Main from "../../pages/Main";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function MainPage() {
  const trigger = useTransitionStore((state) => state.trigger);

  const canvasRef = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
  const interactivePlane = useRef(null);
  const [context, setContext] = useState(null);
  const [screenCursor, setScreenCursor] = useState(
    new THREE.Vector2(9999, 9999)
  );

  const [section, setSection] = useState(window.location.hash || "");

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };

  useEffect(() => {
    const handleHashChange = () => {
      setSection(window.location.hash || "#section1");
    };
    window.addEventListener("hashchange", handleHashChange);

    setContext(canvasRef.current.getContext("2d"));

    window.addEventListener("pointermove", (event) => {
      setScreenCursor(
        new THREE.Vector2(
          (event.clientX / sizes.width) * 2 - 1,
          -(event.clientY / sizes.height) * 2 + 1
        )
      );
    });

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (!context) return;
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }, [context]);

  return (
    <div className="flex flex-col min-h-screen bg-bright relative">
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

      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none"
      ></canvas>

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
