import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`app-content${splashDone ? " app-content--visible" : ""}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;