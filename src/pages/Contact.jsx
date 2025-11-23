import React from "react";
import Letter from "../components/Main/Letter";

const Contact = () => {
  return (
    <div>
      {"CONTACT".split("").map((c, i) => (
        <Letter text={c} />
      ))}
    </div>
  );
};

export default Contact;
