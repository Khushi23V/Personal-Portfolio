import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <>
      <Header />

      <div className="intro">
        <div className="intro-info">
          <h1 className="hero-title">
          <span className="line hey">HEY<span className="accent">,</span></span>
          <span className="line name">I<span className="accent">'</span>M KHUSHI</span>
          <span className="line surname">VERMA</span>
        </h1>
        <p>FRONT-END DEVELOPER <span className="accent">|</span> UI/UX DESIGNER</p>
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
          I'm a Computer Science student who's slightly obsessed with making the web look and feel amazing.
          <span className="text-break"> Click here to get access to my resume!</span>
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
              In aliquet turpis varius nibh ullamcorper imperdiet. Curabitur mauris eros, finibus nec mattis id, eleifend vitae est. Curabitur vel risus sapien.
            </p>
            <div className="p-tech">
              <button>React.js</button>
              <button>Vite</button>
              <button>CSS</button>
              <button>Node.js</button>
              <button>Express.js</button>
              <button>CORS</button>
              <button>dotenv</button>
              <button>REST API</button>
              <button>Hugging Face API</button>
              <button>Axios</button>
              <button>MS Clarity</button>
            </div>
          </div>
        </div>
        <div className="view-all">
          <Link to="/projects" className="view-all-link">
            <a>View all</a>
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