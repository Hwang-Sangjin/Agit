import React from "react";
import Letter from "../components/Main/Letter";
import Hero from "../components/Sections/Hero";
import ServiceSummary from "../components/Sections/ServiceSummary";
import Services from "../components/Sections/Services";
import About from "../components/Sections/About";
import Works from "../components/Sections/Works";
import ContactSummary from "../components/Sections/ContactSummary";
import Contact from "../components/Sections/Contact";

const Main = () => {
  return (
    <div>
      {"MAIN".split("").map((c, i) => (
        <Letter text={c} />
      ))}
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </div>
  );
};

export default Main;
