import { Link, Outlet, useLocation } from "react-router-dom";
import PixelTransition from "./components/Transition/PixelTransition";
import Curve from "./components/Curve";
import LoadingPage from "./components/Main/LoadingPage";
import { useLoadingStore } from "./store/loadingState";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    <div className="relative min-h-screen bg-bright">
      {/* Header
      <header className="p-4">
        <h1>My Website</h1>
        <nav>
          <Link to="/">Main</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

     

      <footer className="p-4">© 2025</footer> */}
      <Curve />

      <main className="p-4  z-10">
        <Outlet />
      </main>
    </div>
  );
}
