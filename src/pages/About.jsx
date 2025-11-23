import React from "react";
import Letter from "../components/Main/Letter";

const About = () => {
  return (
    <div>
      {"ABOUT".split("").map((c, i) => (
        <Letter text={c} />
      ))}
    </div>
  );
};

export default About;
