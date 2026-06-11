import React, { useState, useEffect, useRef, useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import Header from "./Header";
import Footer from "./Footer";
import { DrawerContext } from "../App";


function useTypewriter(lines, typingSpeed = 60, pauseBetween = 600) {
  const [displayed, setDisplayed] = useState(lines.map(() => ""));
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);


  useEffect(() => {
    if (done) return;
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    const line = lines[currentLine];
    if (currentChar < line.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[currentLine] = line.slice(0, currentChar + 1);
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    } else {
  
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, pauseBetween);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, done, lines, typingSpeed, pauseBetween]);

  return { displayed, done };
}



export default function MainPage() {
  const nameLines = ["HEY,", "I'M KHUSHI", "VERMA"];
  const designation = "FRONT-END DEVELOPER | UI/UX DESIGNER";
  const { openAbout } = useContext(DrawerContext);
  const navigate = useNavigate();
  const [quickRef, quickVisible] = useReveal();
  const [timelineRef, timelineVisible] = useReveal();

  const { displayed: nameDisplayed, done: nameDone } = useTypewriter(nameLines, 55, 120);

  const [startDesig, setStartDesig] = useState(false);
  const [desigText, setDesigText] = useState("");
  const [desigIdx, setDesigIdx] = useState(0);

  useEffect(() => {
    if (nameDone) {
      const t = setTimeout(() => setStartDesig(true), 200);
      return () => clearTimeout(t);
    }
  }, [nameDone]);

  useEffect(() => {
    if (!startDesig) return;
    if (desigIdx >= designation.length) return;
    const t = setTimeout(() => {
      setDesigText(designation.slice(0, desigIdx + 1));
      setDesigIdx((i) => i + 1);
    }, 40);
    return () => clearTimeout(t);
  }, [startDesig, desigIdx, designation]);

  const nameCursorVisible = !nameDone;
  const desigCursorVisible = startDesig && desigIdx < designation.length;

  const renderNameLine = (text, lineIdx) => {
    const accentMap = {
      0: [3],
      1: [1], 
      2: [], 
    };
    const accents = accentMap[lineIdx] || [];
    return text.split("").map((ch, i) => (
      accents.includes(i)
        ? <span key={i} className="accent">{ch}</span>
        : ch
    ));
  };

  const renderDesig = (text) => {
    return text.split("").map((ch, i) =>
      ch === "|" ? <span key={i} className="accent">{ch}</span> : ch
    );
  };

  return (
    <div className="page-enter">
      <Header />

      <div className="intro">
        <div className="intro-info">
          <h1 className="hero-title">
            <span className="line hey">
              {renderNameLine(nameDisplayed[0], 0)}
              {nameCursorVisible && currentLineIs(nameDisplayed, 0) && <span className="type-cursor">|</span>}
            </span>
            <span className="line name">
              {renderNameLine(nameDisplayed[1], 1)}
              {nameCursorVisible && currentLineIs(nameDisplayed, 1) && <span className="type-cursor">|</span>}
            </span>
            <span className="line surname">
              {renderNameLine(nameDisplayed[2], 2)}
              {nameCursorVisible && currentLineIs(nameDisplayed, 2) && <span className="type-cursor">|</span>}
            </span>
          </h1>
          <p>
            {renderDesig(desigText)}
            {desigCursorVisible && <span className="type-cursor type-cursor--desig">|</span>}
          </p>
        </div>

        <div className="image-logo">
          <picture>
            <source srcSet="/image-2.png" media="(max-width: 768px)" />
            <img className="profile-img" src="/port-image.png" alt="Image of Khushi Verma" />
          </picture>
          <div className="icons">
            <a href="https://www.linkedin.com/in/khushiverma23/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <img src="/linkedin-logo.png" alt="LinkedIn" />
            </a>
            <a href="https://www.figma.com/@khushiv" className="figma" target="_blank" rel="noreferrer" aria-label="Figma profile">
              <img src="/figma.png" alt="Figma" />
            </a>
            <a href="https://github.com/Khushi23V" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <img src="/github.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      

      <div className={`quick-links reveal${quickVisible ? " reveal--visible" : ""}`} ref={quickRef}>
        <h2>Quick Links<span className="accent">.</span></h2>
        <p>Check out my two different personalities:</p>
        <div className="link-btns">
          <a
            href="https://github.com/Khushi23V"
            target="_blank"
            rel="noreferrer"
            className="btn-1 link-btn-item"
            aria-label="Developer profile on GitHub"
          >
            Developer
          </a>
          <a
            href="https://www.figma.com/@khushiv"
            target="_blank"
            rel="noreferrer"
            className="btn-2 link-btn-item"
            aria-label="Designer portfolio on Figma"
          >
            Designer
          </a>
        </div>
      </div>

      <div className="work-section">
      <h2 className="work-section-title">Stuff I've Built<span className="accent">.</span></h2>

      <div className="work-scroll-stage">
        <div className="work-project-card">
          <div className="project-row work-proj-row">
            <span className="project-row-bg-num" aria-hidden="true">01</span>
            <span className="project-row-num">01</span>
            <div className="project-row-body">
              <div className="p-heading">
                <h2>summarAIze</h2>
                <div className="p-links-mobile">
                  <a href="https://github.com/Khushi23V/summarAIze" target="_blank" rel="noreferrer" aria-label="GitHub" className="proj-icon-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  </a>
                  <a href="https://summaraize-ai.in/" target="_blank" rel="noreferrer" aria-label="Live site" className="proj-icon-link proj-arrow-link">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </a>
                </div>
              </div>
              <p className="p-desc">
                Designed and built a full-stack AI summary tool with 4 summary tones, 200+ users, 81.29% avg scroll depth, 0 rage clicks, and 30% traffic growth in week one. Turns walls of text into something humans actually understand.
              </p>
              <div className="p-tech">
                {["REACT", "VITE", "NODE.JS", "EXPRESS.JS", "HUGGING FACE API", "MS CLARITY"].map(t => <button key={t}>{t}</button>)}
              </div>
            </div>
            <div className="project-row-right">
              <div className="project-row-img">
                <img src="/Frame 5.png" alt="summarAIze" />
              </div>
              <div className="p-links-desktop">
                <a href="https://github.com/Khushi23V/summarAIze" target="_blank" rel="noreferrer" aria-label="GitHub" className="proj-icon-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 06.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
                <a href="https://summaraize-ai.in/" target="_blank" rel="noreferrer" aria-label="Live site" className="proj-icon-link proj-arrow-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="work-overlay">
          <Link to="/projects" className="work-view-all-btn">
            <img src="/arrow-pixel.png" alt="" aria-hidden="true" className="olc-arrow-icon" />
            View all
          </Link>
          <p className="work-scroll-hint">or keep scrolling to learn more about me</p>
        </div>
      </div>
    </div>

      <div className={`timeline reveal${timelineVisible ? " reveal--visible" : ""}`} ref={timelineRef}>
        <div className="left">
          <div className="t-1" style={{transitionDelay: "0.1s"}}>
            <h2>Mid 2026<span className="accent">.</span></h2>
            <p>Teaching machines to feel. Multimodal ML research. Gained 3+ months of professional experience.</p>
          </div>
          <div className="t-2" style={{transitionDelay: "0.25s"}}>
            <h2>2025<span className="accent">.</span></h2>
            <p>Found my design voice. SwaNik. Figma before code, always.</p>
          </div>
        </div>
        <img className="timeline-img" src="/Frame 2.png" alt="Timeline" />
        <div className="right">
          <div className="t-3" style={{transitionDelay: "0.15s"}}>
            <h2>Early 2026<span className="accent">.</span></h2>
            <p>Went full-stack. Built summarAIze, shipped escrow flows, real users, real data.</p>
          </div>
          <div className="t-4" style={{transitionDelay: "0.3s"}}>
            <h2>2024<span className="accent">.</span></h2>
            <p>First div. First bug. Fell in love with the thrill of tech.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function currentLineIs(displayed, lineIdx) {
  for (let i = lineIdx + 1; i < displayed.length; i++) {
    if (displayed[i].length > 0) return false;
  }
  return true;
}