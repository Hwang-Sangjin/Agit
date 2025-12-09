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

  const trailCanvasRef = useRef(null); // New canvas for trail effect
  const glowImageRef = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
  const interactivePlane = useRef(null);
  const [trailContext, setTrailContext] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [screenCursor, setScreenCursor] = useState(
    new THREE.Vector2(9999, 9999)
  );
  const previousCursor = useRef(new THREE.Vector2(9999, 9999));
  const drawThreshold = 60; // 픽셀 단위 - 이 거리만큼 움직이면 그리기

  const [section, setSection] = useState(window.location.hash || "");

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };

  // Initialize trail canvas and image
  useEffect(() => {
    const canvas = trailCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = sizes.width;
    canvas.height = sizes.height;

    setTrailContext(ctx);

    // Load image
    const img = new Image();
    img.onload = () => {
      glowImageRef.current = img;
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error("Failed to load glow2.png");
    };
    img.src = "./Footprints.png";

    // Hash change listener
    const handleHashChange = () => {
      setSection(window.location.hash || "#main");
    };
    window.addEventListener("hashchange", handleHashChange);

    // Pointer move listener
    const handlePointerMove = (event) => {
      setScreenCursor(
        new THREE.Vector2(
          (event.clientX / sizes.width) * 2 - 1,
          -(event.clientY / sizes.height) * 2 + 1
        )
      );
    };
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  // Draw cursor trail with fade effect
  useEffect(() => {
    if (!trailContext || !imageLoaded || !glowImageRef.current) return;

    const canvas = trailCanvasRef.current;

    // Fade out effect (매 프레임마다 실행)
    trailContext.globalCompositeOperation = "source-over";
    trailContext.globalAlpha = 0.02;
    trailContext.fillStyle = "#000000";
    trailContext.fillRect(0, 0, canvas.width, canvas.height);

    // Convert normalized device coordinates to screen coordinates
    const x = ((screenCursor.x + 1) * sizes.width) / 2;
    const y = ((-screenCursor.y + 1) * sizes.height) / 2;

    const currentPos = new THREE.Vector2(x, y);
    const distance = previousCursor.current.distanceTo(currentPos);

    // 일정 거리 이상 움직였을 때만 그리기
    if (distance >= drawThreshold) {
      // 이미지 색상 반전 (검정 → 흰색)
      trailContext.filter = "invert(1)";

      // Draw glow with lighten composite operation
      const glowSize = canvas.width * 0.05;
      trailContext.globalCompositeOperation = "lighten";
      trailContext.globalAlpha = 0.8;
      trailContext.drawImage(
        glowImageRef.current,
        x - glowSize / 2,
        y - glowSize / 2,
        glowSize,
        glowSize
      );

      // 필터 초기화
      trailContext.filter = "none";

      // 이전 위치 업데이트
      previousCursor.current.copy(currentPos);
    }
  }, [trailContext, imageLoaded, screenCursor]);

  return (
    <div className="flex flex-col min-h-screen bg-bright relative cursor-none">
      {/* Three.js Canvas for transitions */}
      <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">
        <Canvas
          events={null}
          className="pointer-events-none"
          style={{ pointerEvents: "none" }}
          gl={{ alpha: true }}
        >
          <TransitionOverlay trigger={trigger} />
        </Canvas>
      </div>

      {/* Trail canvas for cursor glow effect */}
      <canvas
        ref={trailCanvasRef}
        className="absolute top-0 left-0 w-full h-full z-40 pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      ></canvas>

      <Header />

      <div>
        {(section === "#main" || section === "") && <Main />}
        {section === "#about" && <About />}
        {section === "#contact" && <Contact />}
      </div>
    </div>
  );
}

export default MainPage;
