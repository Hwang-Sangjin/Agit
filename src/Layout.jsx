import { Outlet, Link } from "react-router-dom";
import Curve from "./components/Curve";

export default function Layout() {
  return (
    <Curve backgroundColor="black">
      <header className="p-5">
        <h1>My Website</h1>
        <nav>
          <Link to="/">Main</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="p-5 relative">
        <Outlet />
      </main>

      <footer className="p-5">© 2025</footer>
    </Curve>
  );
}
