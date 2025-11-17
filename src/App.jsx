import { Routes, Route } from "react-router-dom";

import MainPage from "./components/Main/MainPage";
import Layout from "./Layout";
import { useLoadingStore } from "./store/loadingState";
import LoadingPage from "./components/Main/LoadingPage";

export default function App() {
  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<div>About Page</div>} />
            <Route path="contact" element={<div>Contact Page</div>} />
          </Route>
        </Routes>
      )}
    </>
  );
}

{
  /* <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<div>About Page</div>} />
        <Route path="contact" element={<div>Contact Page</div>} />
      </Route>
    </Routes> */
}
