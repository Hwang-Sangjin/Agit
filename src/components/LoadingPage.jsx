import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import LoadingNumber from "./LoadingNumber";

const LoadingPage = () => {
  const { progress } = useProgress(); // 목표값
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        // 목표(progress)까지 도달하면 멈춤
        if (prev >= Math.floor(progress)) {
          return prev;
        }
        return prev + 1;
      });
    }, 30); // 30ms = 더 부드러운 카운트 (원하면 100ms로 바꿔도 됨)

    return () => clearInterval(interval);
  }, [progress]);

  // progress가 변할 때마다 새 인터벌 시작

  return (
    <div className="flex justify-center items-center h-screen bg-[#bfb1a8]">
      <LoadingNumber number={number} />
    </div>
  );
};

export default LoadingPage;
