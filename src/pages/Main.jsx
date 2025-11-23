import React from "react";
import Letter from "../components/Main/Letter";

const Main = () => {
  return (
    <div>
      {"MAIN".split("").map((c, i) => (
        <Letter text={c} />
      ))}
    </div>
  );
};

export default Main;
