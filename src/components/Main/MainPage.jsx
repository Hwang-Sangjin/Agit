import Header from "../Header";
import TransitionOverlay from "../TransitionOverlay";
import { useTransitionStore } from "../../store/transitionState";
import { useEffect, useRef, useState } from "react";
import Main from "../../pages/Main";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import { Canvas } from "@react-three/fiber";

// 발자국 SVG 컴포넌트
const Footprint = ({ isLeft, angle = 0, className = "" }) => {
  const footRotation = isLeft ? -5 : 5; // 왼발/오른발 기본 각도
  const offsetDistance = 10; // offset 거리

  // 이동 방향 각도 + 발자국 기본 각도
  const totalRotation = angle + footRotation;

  // 진행 방향에 수직으로 offset 계산
  // angle은 이미 90도가 더해진 상태이므로, 원래 진행 방향은 angle - 90
  const movementAngle = angle - 90; // 실제 이동 방향
  // 이동 방향에 수직: 왼발은 왼쪽으로(-90도), 오른발은 오른쪽으로(+90도)
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

function MainPage() {
  const trigger = useTransitionStore((state) => state.trigger);

  // Fade out 효과를 위한 state
  const [footprints, setFootprints] = useState([]);
  const nextFootprintIdRef = useRef(0);
  const isLeftFootRef = useRef(true); // 왼발/오른발 토글
  const lastFootprintPosRef = useRef({ x: 0, y: 0 });
  const [currentAngle, setCurrentAngle] = useState(0); // 현재 이동 방향 각도

  const [section, setSection] = useState(window.location.hash || "");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const FOOTPRINT_DISTANCE = 60; // 발자국 찍을 거리 (픽셀)

  useEffect(() => {
    // Hash change listener
    const handleHashChange = () => {
      setSection(window.location.hash || "#main");
    };
    window.addEventListener("hashchange", handleHashChange);

    // Pointer move listener with footprint trail
    const handlePointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      // 현재 커서 위치 업데이트
      setCursorPos({ x, y });

      // 이전 발자국과의 거리 계산
      const dx = x - lastFootprintPosRef.current.x;
      const dy = y - lastFootprintPosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // 일정 거리 이상 움직였을 때만 발자국 생성
      if (distance >= FOOTPRINT_DISTANCE) {
        // 이전 발자국 위치 → 현재 위치 방향 계산 (라디안 -> 도)
        // Math.atan2는 y축이 아래로 증가하는 화면 좌표계 기준
        const angle =
          Math.atan2(
            y - lastFootprintPosRef.current.y,
            x - lastFootprintPosRef.current.x
          ) *
            (180 / Math.PI) +
          90; // 90도 추가

        setCurrentAngle(angle);

        const footprintId = nextFootprintIdRef.current++;
        const newFootprint = {
          id: footprintId,
          x: x,
          y: y,
          isLeft: isLeftFootRef.current,
          angle: angle, // 이전 발자국 → 현재 발자국 방향
          fadeOut: false,
        };

        setFootprints((prev) => [...prev, newFootprint]);

        // 왼발/오른발 토글
        isLeftFootRef.current = !isLeftFootRef.current;

        // 마지막 발자국 위치 업데이트
        lastFootprintPosRef.current = { x, y };

        // Start fade out after 100ms
        setTimeout(() => {
          setFootprints((prev) =>
            prev.map((footprint) =>
              footprint.id === footprintId
                ? { ...footprint, fadeOut: true }
                : footprint
            )
          );
        }, 100);

        // Remove after 1500ms (더 오래 보이도록)
        setTimeout(() => {
          setFootprints((prev) =>
            prev.filter((footprint) => footprint.id !== footprintId)
          );
        }, 1500);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

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

      {/* Footprint trails */}
      {footprints.map((footprint) => (
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

      {/* Current cursor position - 발자국 모양 */}
      <div
        className="fixed pointer-events-none z-50"
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
