import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./Layout";
import MainPage from "./components/Main/MainPage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import LoadingPage from "./components/Main/LoadingPage";
import { useLoadingStore } from "./store/loadingState";

export default function App() {
  const location = useLocation();
  const isLoading = useLoadingStore((state) => state.isLoading);

  // 로딩 중이면 라우터 전체를 막아버리고 LoadingPage만 보여줌
  if (isLoading) return <LoadingPage />;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
