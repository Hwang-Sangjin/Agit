import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PixelTransition({ routeKey }) {
  const canvasRef = useRef();
  const gridSize = 20;

  // 랜덤 셔플 함수
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.ceil(canvas.width / gridSize);
    const rows = Math.ceil(canvas.height / gridSize);

    const blocks = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        blocks.push({ x, y, alpha: 0 }); // 처음엔 투명 (0 → 1 fill)
      }
    }

    shuffle(blocks); // 랜덤 순서 적용

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blocks.forEach((b) => {
        ctx.fillStyle = `rgba(63,79,60,${b.alpha})`;
        ctx.fillRect(b.x * gridSize, b.y * gridSize, gridSize, gridSize);
      });
    }

    // (1) 픽셀이 랜덤한 순서로 화면을 채움 (alpha: 0 → 1)
    gsap.to(blocks, {
      alpha: 1,
      duration: 0.6,
      ease: "power1.out",
      stagger: {
        amount: 0.4,
        each: 0.003, // 개별 속도
      },
      onUpdate: draw,
      onComplete: () => {
        // 채워진 후 다시 랜덤 셔플
        shuffle(blocks);

        // (2) 픽셀이 랜덤한 순서로 사라짐 (alpha: 1 → 0)
        gsap.to(blocks, {
          alpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.5,
            each: 0.003,
          },
          onUpdate: draw,
        });
      },
    });

    draw();
  }, [routeKey]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
