import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./Layout";
import MainPage from "./components/Main/MainPage";
import LoadingPage from "./components/Main/LoadingPage";
import { useLoadingStore } from "./store/loadingState";
import LandingText from "./components/Main/LandingText";
import Main from "./pages/Main";

export default function App() {
  const location = useLocation();

  const isLoading = useLoadingStore((state) => state.isLoading);

  return <MainPage />;
}
