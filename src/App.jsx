import React, { useState, useCallback, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import SplashScreen from "./components/SplashScreen";

export const DrawerContext = createContext({
  aboutOpen: false,
  openAbout: () => {},
  closeAbout: () => {},
});

function AppRoutes() {
  const { aboutOpen, closeAbout } = useContext(DrawerContext);
  const location = useLocation();

  return (
    <>
      <div
        className={`about-drawer-backdrop${aboutOpen ? " about-drawer-backdrop--open" : ""}`}
        onClick={closeAbout}
        aria-hidden="true"
      />

      <div
        className={`about-drawer${aboutOpen ? " about-drawer--open" : ""}`}
        role="dialog"
        aria-label="About"
        aria-modal="true"
      >
        <button
          className="about-drawer-close"
          onClick={closeAbout}
          aria-label="Close about panel"
        >
          <span />
          <span />
        </button>
        <div className="about-drawer-content">
          <About standalone={false} />
        </div>
      </div>

      <Routes location={location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About standalone={true} />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  // Persist splash state in sessionStorage so navigations within the
  // same tab never replay the animation
  const [splashDone, setSplashDone] = useState(
    () => sessionStorage.getItem("kv_splash_done") === "1"
  );

  const [aboutOpen, setAboutOpen] = useState(false);

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem("kv_splash_done", "1");
    setSplashDone(true);
  }, []);

  const openAbout = useCallback(() => {
    setAboutOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeAbout = useCallback(() => {
    setAboutOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <DrawerContext.Provider value={{ aboutOpen, openAbout, closeAbout }}>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`app-content${splashDone ? " app-content--visible" : ""}`}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </DrawerContext.Provider>
  );
}

export default App;