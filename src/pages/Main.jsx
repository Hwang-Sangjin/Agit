import React from "react";
import Letter from "../components/Main/Letter";
import MainPart1 from "../components/Main/MainPart1";

const Main = () => {
  return (
    <div>
      <div className="w-full h-screen ">
        <MainPart1 />
      </div>
      <div className="w-full h-screen bg-amber-100">part2</div>
      <div className="w-full h-screen bg-amber-200">part3</div>
      <div className="w-full h-screen bg-amber-300">part4</div>
    </div>
  );
};

export default Main;
