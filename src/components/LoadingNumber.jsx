import React, { useEffect } from "react";

const LoadingNumber = ({ number }) => {
  useEffect(() => {
    if (number === 100) {
      console.log("!!!");
    }
  }, [number]);

  return (
    <h1 className="text-8xl font-main text-white flex items-center">
      <span className="inline-block w-[3ch] text-right">{number}</span>%
    </h1>
  );
};

export default LoadingNumber;
