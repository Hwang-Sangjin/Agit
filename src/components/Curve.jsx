import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { text, curve, translate } from "../utils/anim";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

export default function Curve({ children, backgroundColor = "black" }) {
  const location = useLocation();

  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 배경 */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          opacity: dimensions.width == null ? 1 : 0,
          backgroundColor,
        }}
      />

      {/* 현재 경로 이름 표시 */}
      <motion.p
        className="absolute left-1/2 top-[40%] text-white text-[46px] z-[3] -translate-x-1/2 text-center"
        {...anim(text)}
      >
        {routes[location.pathname] || ""}
      </motion.p>

      {/* SVG 커브 애니메이션 */}
      {dimensions.width != null && <SVG {...dimensions} />}

      {/* 실제 페이지 콘텐츠 */}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      className="fixed left-0 top-0 w-[100vw] h-[calc(100vh+600px)] pointer-events-none"
      {...anim(translate)}
    >
      <motion.path {...anim(curve(initialPath, targetPath))} fill="black" />
    </motion.svg>
  );
};
