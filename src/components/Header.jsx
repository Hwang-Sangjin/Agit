import React, { useEffect, useRef, useState } from "react";
import { useLoadingStore } from "../store/loadingState";
import gsap from "gsap";
import { useTransitionStore } from "../store/transitionState";
import { Canvas } from "@react-three/fiber";
import StaticPaperBackground from "./Main/StaticPaperBackground";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
