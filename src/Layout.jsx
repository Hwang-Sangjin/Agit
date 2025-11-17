// src/Layout.jsx
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ padding: 20 }}>
      <header>
        <h1>My Website</h1>
        <nav>
          <Link to="/">Main</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <hr />

      <main style={{ padding: 20 }}>
        {/* 여기만 페이지마다 바뀌는 영역 */}
        <Outlet />
      </main>

      <footer>© 2025</footer>
    </div>
  );
}
