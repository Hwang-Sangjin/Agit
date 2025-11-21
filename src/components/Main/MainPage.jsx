import Header from "../Header";
import FiberContainer from "./FiberContainer";
import LandingText from "./LandingText";
import TransitionOverlay from "../TransitionOverlay";
import { useTransitionStore } from "../../store/transitionState";

function MainPage() {
  const trigger = useTransitionStore((state) => state.trigger);

  return (
    <div className="flex flex-col h-screen w-screen bg-bright relative overflow-hidden">
      <TransitionOverlay trigger={trigger} />
      <Header />
      <LandingText />
    </div>
  );
}

export default MainPage;
