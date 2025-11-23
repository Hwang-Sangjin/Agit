import Header from "../Header";
import FiberContainer from "./FiberContainer";
import LandingText from "./LandingText";
import TransitionOverlay from "../TransitionOverlay";
import { useTransitionStore } from "../../store/transitionState";
import { useEffect, useState } from "react";
import Letter from "./Letter";
import Main from "../../pages/Main";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

function MainPage() {
  const trigger = useTransitionStore((state) => state.trigger);

  const [section, setSection] = useState(window.location.hash || "");

  useEffect(() => {
    const handleHashChange = () => {
      setSection(window.location.hash || "#section1");
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bright relative">
      <TransitionOverlay trigger={trigger} />
      <Header className="flex flex-row" />
      <div>
        {(section === "#main" || section === "") && (
          <>
            <Main />
          </>
        )}
        {section === "#about" && (
          <>
            <About />
          </>
        )}
        {section === "#contact" && (
          <>
            <Contact />
          </>
        )}
      </div>
    </div>
  );
}

export default MainPage;
