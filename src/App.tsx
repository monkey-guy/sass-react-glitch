import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Pages
import LoadingPage from "./pages/LoadingPage";
import FadeTransition from "./components/Fade";

// Lazy Loaded Pages
const HomePage = React.lazy(() => import("./pages/Home"));

export function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FadeTransition fallback={<LoadingPage />}>
                <React.Suspense fallback={null}>
                  <HomePage />
                </React.Suspense>
              </FadeTransition>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
