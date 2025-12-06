import React from "react";
import Letter from "../components/Main/Letter";

const Main = () => {
  return (
    <>
      <div>
        {"MAIN".split("").map((c, i) => (
          <Letter text={c} />
        ))}
      </div>
      {/* <div className="w-full h-screen bg-amber-50">Main Page Content</div> */}
    </>
  );
};

export default Main;
