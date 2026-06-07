import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Typewriter hook
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
    <>
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

      <div className="one-liner">
        <h2 className="opening">&lt;</h2>
        <h2 className="text">
          I'm a Computer Science student who's slightly obsessed with making the web look and feel amazing. Click here to get access to my resume!
        </h2>
        <h2 className="closing">/&gt;</h2>
      </div>

      <div className="quick-links">
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

      <div className="work">
        <h2>Stuff I've Built<span className="accent">.</span></h2>
        <div className="work-1">
          <img className="p1-img" src="/p-1.png" alt="Image of summarAIze" />
          <div className="project-info">
            <div className="p-heading">
              <h2>summarAIze</h2>
              <div className="p-links">
                <a href="https://github.com/Khushi23V" target="_blank" rel="noreferrer" aria-label="GitHub repository">
                  <img src="/github.png" alt="GitHub" />
                </a>
                <a href="https://summaraize-ai.in/" target="_blank" rel="noreferrer" aria-label="Live site">
                  <img src="/arrow.png" alt="Link" className="arrow" />
                </a>
              </div>
            </div>
            <p className="p-desc">
              Full-stack AI summarization tool supporting 4 tones via Hugging Face's BART-large-cnn model. Achieved 81.29% average scroll depth and 0 rage clicks across 36 sessions.
            </p>
            <div className="p-tech">
              <button>React.js</button>
              <button>Vite</button>
              <button>CSS</button>
              <button>Node.js</button>
              <button>Express.js</button>
              <button>REST API</button>
              <button>Hugging Face API</button>
              <button>MS Clarity</button>
            </div>
          </div>
        </div>
        <div className="view-all">
          <Link to="/projects" className="view-all-link">
            <span>View all</span>
            <img src="/arrow-2.png" alt="" className="arrow-2" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="timeline">
        <div className="left">
          <div className="t-1">
            <h2>2026<span className="accent">.</span></h2>
            <p>Working on ML</p>
          </div>
          <div className="t-2">
            <h2>Early 2025<span className="accent">.</span></h2>
            <p>Expanded frontend, swanik</p>
          </div>
        </div>
        <img className="timeline-img" src="/Frame 2.png" alt="Timeline" />
        <div className="right">
          <div className="t-3">
            <h2>Late 2025<span className="accent">.</span></h2>
            <p>Dived into backend, summaraize</p>
          </div>
          <div className="t-4">
            <h2>2024<span className="accent">.</span></h2>
            <p>Gained familiarity with basic web dev tools</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function currentLineIs(displayed, lineIdx) {
  for (let i = lineIdx + 1; i < displayed.length; i++) {
    if (displayed[i].length > 0) return false;
  }
  return true;
}