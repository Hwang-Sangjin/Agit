import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";

import TransitionOverlay from "../TransitionOverlay";
import FiberContainer from "./FiberContainer";
import StaticPaperBackground from "./StaticPaperBackground";

// 발자국 SVG 컴포넌트
const Footprint = ({ isLeft, angle = 0, className = "" }) => {
  const footRotation = isLeft ? -5 : 5;
  const offsetDistance = 10;
  const totalRotation = angle + footRotation;
  const movementAngle = angle - 90;
  const offsetAngle = isLeft ? movementAngle - 90 : movementAngle + 90;
  const offsetX = Math.cos((offsetAngle * Math.PI) / 180) * offsetDistance;
  const offsetY = Math.sin((offsetAngle * Math.PI) / 180) * offsetDistance;

  return (
    <div
      className={className}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px) rotate(${totalRotation}deg)`,
        width: "40px",
        height: "40px",
      }}
    >
      <svg
        fill="#372116"
        width="100%"
        height="100%"
        viewBox="0 0 297 297"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m148.5,0c-36.451,0.001-65.999,66-65.999,99.5 0,24.28 8.668,73.774 13.438,99.18 1.812,9.647 3.562,15.82 14.728,15.82h37.833 37.833c11.166,0 12.916-6.173 14.728-15.82 4.77-25.405 13.438-74.899 13.438-99.18 0-33.5-29.548-99.499-65.999-99.5z"></path>
          <path d="m187.999,231.5h-79c-5.5,0-10.833,4-10.833,9.5v6.5c0,27.338 22.162,49.5 49.5,49.5 27.338,0 49.5-22.162 49.5-49.5v-6.5c0-5.5-3.667-9.5-9.167-9.5z"></path>
        </g>
      </svg>
    </div>
  );
};

// 로딩 페이지 컴포넌트
const LoadingNumber = ({ number }) => (
  <div className="flex items-center justify-center w-full h-full">
    <div className="text-center">
      <div className="text-9xl font-bold mb-4">{number}%</div>
      <div className="text-2xl">Loading...</div>
    </div>
  </div>
);

const LoadingPage = ({ onLoadComplete }) => {
  const { progress } = useProgress();
  const [number, setNumber] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        const target = Math.floor(progress);
        if (target >= prev) {
          return target;
        }
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (number >= 100 && !hasCompleted) {
      setHasCompleted(true);
      setTimeout(() => {
        onLoadComplete();
      }, 1000);
    }
  }, [number, hasCompleted, onLoadComplete]);

  return (
    <div className="flex h-screen relative z-20">
      <LoadingNumber number={number} />
    </div>
  );
};

// 데모용 페이지 컴포넌트들
const MainContent = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">Main</h1>
      <p className="text-xl">메인 페이지입니다</p>
    </div>
  </div>
);

const AboutContent = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">About</h1>
      <p className="text-xl">소개 페이지입니다</p>
    </div>
  </div>
);

const ContactContent = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">Contact</h1>
      <p className="text-xl">연락처 페이지입니다</p>
    </div>
  </div>
);

function MainPage() {
  // 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(true);
  const [showMainPage, setShowMainPage] = useState(false);

  // 트리거 state
  const [trigger, setTrigger] = useState(false);

  const [footprints, setFootprints] = useState([]);
  const nextFootprintIdRef = useRef(0);
  const isLeftFootRef = useRef(true);
  const lastFootprintPosRef = useRef({ x: 0, y: 0 });
  const [currentAngle, setCurrentAngle] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // 현재 표시할 섹션
  const [currentSection, setCurrentSection] = useState("#main");
  const [nextSection, setNextSection] = useState("#main");
  const isTransitioningRef = useRef(false);

  const FOOTPRINT_DISTANCE = 60;

  // 로딩 완료 핸들러
  const handleLoadComplete = () => {
    setTrigger(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowMainPage(true);
    }, 1500);

    setTimeout(() => {
      setTrigger(false);
    }, 3200);
  };

  // 섹션에 따른 컴포넌트 렌더링
  const renderSection = (section) => {
    switch (section) {
      case "#about":
        return <AboutContent />;
      case "#contact":
        return <ContactContent />;
      case "#main":
      default:
        return <MainContent />;
    }
  };

  useEffect(() => {
    if (isLoading || !showMainPage) return;

    const initialHash = window.location.hash || "#main";
    setCurrentSection(initialHash);
    setNextSection(initialHash);

    const handleHashChange = () => {
      if (isTransitioningRef.current) return;

      const newHash = window.location.hash || "#main";
      if (newHash === currentSection) return;

      isTransitioningRef.current = true;
      setNextSection(newHash);
      setTrigger(true);

      setTimeout(() => {
        setCurrentSection(newHash);
      }, 1500);

      setTimeout(() => {
        setTrigger(false);
        isTransitioningRef.current = false;
      }, 3200);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentSection, isLoading, showMainPage]);

  useEffect(() => {
    if (isLoading) return;

    const handlePointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setCursorPos({ x, y });

      const dx = x - lastFootprintPosRef.current.x;
      const dy = y - lastFootprintPosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance >= FOOTPRINT_DISTANCE) {
        const angle =
          Math.atan2(
            y - lastFootprintPosRef.current.y,
            x - lastFootprintPosRef.current.x
          ) *
            (180 / Math.PI) +
          90;

        setCurrentAngle(angle);

        const footprintId = nextFootprintIdRef.current++;
        const newFootprint = {
          id: footprintId,
          x: x,
          y: y,
          isLeft: isLeftFootRef.current,
          angle: angle,
          fadeOut: false,
        };

        setFootprints((prev) => [...prev, newFootprint]);
        isLeftFootRef.current = !isLeftFootRef.current;
        lastFootprintPosRef.current = { x, y };

        setTimeout(() => {
          setFootprints((prev) =>
            prev.map((footprint) =>
              footprint.id === footprintId
                ? { ...footprint, fadeOut: true }
                : footprint
            )
          );
        }, 100);

        setTimeout(() => {
          setFootprints((prev) =>
            prev.filter((footprint) => footprint.id !== footprintId)
          );
        }, 1500);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isLoading]);

  return (
    <div className="flex flex-col min-h-screen relative cursor-none bg-[#f5ebd7]">
      {/* Navigation - 로딩 중에는 숨김, old paper 배경 */}
      {!isLoading && (
        <nav className="fixed top-0 left-0 right-0 z-30 p-6 flex gap-6">
          {/* Navigation 배경용 Canvas */}
          <div className="absolute inset-0 -z-10">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 75 }}
              gl={{ alpha: false }}
              style={{ width: "100%", height: "100%" }}
            >
              <StaticPaperBackground color="#f5ebd7" />
            </Canvas>
          </div>

          <a
            href="#main"
            className="text-lg font-semibold hover:text-blue-600 relative z-10"
          >
            Main
          </a>
          <a
            href="#about"
            className="text-lg font-semibold hover:text-blue-600 relative z-10"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold hover:text-blue-600 relative z-10"
          >
            Contact
          </a>
        </nav>
      )}

      {/* 배경 전용 Canvas - 항상 표시 */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: false }}>
          <StaticPaperBackground color="#f5ebd7" />
        </Canvas>
      </div>

      {/* Transition 전용 Canvas - 항상 마운트, 투명 */}
      <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">
        <Canvas
          events={null}
          className="pointer-events-none"
          style={{ pointerEvents: "none" }}
          gl={{ alpha: true }}
          camera={{ position: [0, 0, 5], fov: 75 }}
        >
          {/* 3D 컨텐츠 - 로딩 후에만 표시 */}
          {!isLoading && <FiberContainer />}

          {/* Transition - 항상 마운트 */}
          <TransitionOverlay trigger={trigger} />
        </Canvas>
      </div>

      {/* Footprint trails */}
      {!trigger &&
        !isLoading &&
        footprints.map((footprint) => (
          <div
            key={footprint.id}
            className={`fixed pointer-events-none z-40 transition-opacity duration-1000 ${
              footprint.fadeOut ? "opacity-0" : "opacity-100"
            }`}
            style={{
              left: footprint.x,
              top: footprint.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Footprint isLeft={footprint.isLeft} angle={footprint.angle} />
          </div>
        ))}

      {/* Current cursor */}
      {!trigger && !isLoading && (
        <div
          className="fixed pointer-events-none z-60"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Footprint
            isLeft={isLeftFootRef.current}
            angle={currentAngle}
            className="opacity-50"
          />
        </div>
      )}

      {/* Page Content */}
      {isLoading ? (
        <LoadingPage onLoadComplete={handleLoadComplete} />
      ) : (
        <main className="flex-1 relative z-10 pt-20">
          {renderSection(currentSection)}
        </main>
      )}
    </div>
  );
}

export default MainPage;
