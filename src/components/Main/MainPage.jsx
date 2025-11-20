import Header from "../Header";
import FiberContainer from "./FiberContainer";
import LandingText from "./LandingText";

function MainPage() {
  return (
    <div className="flex flex-col h-screen w-screen bg-bright">
      <Header />
      <LandingText />
    </div>
  );
}

export default MainPage;
