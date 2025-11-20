import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./Layout";
import MainPage from "./components/Main/MainPage";
import LoadingPage from "./components/Main/LoadingPage";

export default function App() {
  const location = useLocation();

  return <LoadingPage />;
}
