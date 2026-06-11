import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    id: 1,
    type: "developer",
    name: "summarAIze",
    img: "/Frame 5.png",
    github: "https://github.com/Khushi23V/summarAIze",
    live: "https://summaraize-ai.in/",
    tagline: "Built a full-stack AI summary tool with 4 summary tones, 200+ users, 81.29% avg scroll depth, 0 rage clicks, and 30% traffic growth in week one. Turns walls of text into something humans actually understand.",
    tech: ["REACT", "VITE", "NODE.JS", "EXPRESS.JS", "HUGGING FACE API", "MS CLARITY"],
  },
  {
    id: 2,
    type: "developer",
    name: "SwaNik",
    img: "/swanik.png",
    github: "https://github.com/Khushi23V/SwaNik",
    live: "https://swanik.netlify.app/",
    tagline: "A civic-tech app that turned stray dog reports into real-world action. 93.3% scroll depth, 3.98 pages/session, 45.72% return visitors. Built with heart, Firebase, and a lot of Figma.",
    tech: ["REACT", "VITE", "FIREBASE", "JAVASCRIPT", "FIGMA"],
  },
  {
    id: 3,
    type: "developer",
    name: "Emotion-Aware Captioning Model",
    img: null,
    github: null,
    live: null,
    tagline: "Multimodal emotion recognition and captioning on MELD — 67.51% accuracy, beat 7 published baselines including DialogueRNN and UniMSE. Submitted to Springer MTAP. Presented at ICET-AICS 2026. The research paper that started as a final-year project and became something worth publishing.",
    tech: ["PYTHON", "PYTORCH", "AI", "HUGGING FACE API", "ROBERTA", "WAVLM", "LORA"],
  },
  {
    id: 4,
    type: "designer",
    name: "summarAIze",
    img: "/Frame 5.png",
    behance: "https://www.behance.net/gallery/250870007/summarAIze-AI-Summarization-Web-App-Case-Study",
    live: "https://summaraize-ai.in/",
    tagline: "Designed the entire UI system before a line of code existed; component library, user flows, two app states (pre and post-summary). Then tracked 200+ real users with Clarity post-launch. 0 rage clicks. Design decisions validated.",
    tech: ["FIGMA", "UI", "DESIGN SYSTEM", "USER RESEARCH", "WIREFRAMING"],
  },
  {
    id: 5,
    type: "designer",
    name: "SwaNik",
    img: "/swanik.png",
    behance: "https://www.behance.net/gallery/250742261/SwaNik-A-Stray-Dog-Finder-App",
    live: "https://swanik.netlify.app/",
    tagline: "Full product design for a civic stray-dog reporting app, from low-fidelity wireframes to a warm, high-contrast visual system built for accessibility. Every screen designed before a single component was coded.",
    tech: ["FIGMA", "UI DESIGN", "WIREFRAMING", "PROTOTYPING", "ACCESSIBILITY"],
  },
  {
    id: 6,
    type: "designer",
    name: "Weave",
    img: "/weave.png",
    figma: "https://www.figma.com/community/file/1645041480133748404/development-agency-website-design-weave",
    tagline: "Marketing website landing page design for a UX-led web agency. Desktop and mobile breakpoints fully documented in Figma, responsive nav overlay, CTA hierarchy designed for conversion.",
    tech: ["FIGMA", "UI DESIGN", "WIREFRAMING", "BREAKPOINT DESIGN", "RESPONSIVE DESIGN"],
  },
  {
    id: 7,
    type: "designer",
    name: "AeroFix",
    img: "/Framex.png",
    figma: "https://www.figma.com/community/file/1645040417836073645/ac-services-aerofix-hero-section",
    tagline: "A clean, conversion-focused landing page design for an AC installation service. Hero section, trust signals, dual CTAs, and a fully responsive mobile layout. Designed to make a service business look credible in under 3 seconds.",
    tech: ["FIGMA", "UI DESIGN", "RESPONSIVE DESIGN", "WIREFRAMING", "CTA DESIGN"],
  },
  {
    id: 8,
    type: "designer",
    name: "Diet & Co.",
    img: "/dietco.png",
    figma: "https://www.figma.com/community/file/1603345172730176254/diet-co",
    tagline: "Mobile-native food delivery app design. Splash screen, offer carousel, category browsing, geo-tagged restaurant cards, and bottom navigation. Built to iOS HIG standards with touch-target-conscious spacing throughout.",
    tech: ["FIGMA", "MOBILE UI", "iOS HIG", "INTERACTION DESIGN"],
  },
];

const PixelDiamondIcon = () => (
  <img src="/Dev.png" alt="Developer view" width="18" height="18" />
);

const PixelPencilIcon = () => (
  <img src="/Des.png" alt="Designer view" width="18" height="18" />
);

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const FigmaIcon = () => (
  <svg width="14" height="20" viewBox="0 0 10 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5 7.5C5 6.837 5.263 6.201 5.732 5.732C6.201 5.263 6.837 5 7.5 5C8.163 5 8.799 5.263 9.268 5.732C9.737 6.201 10 6.837 10 7.5C10 8.163 9.737 8.799 9.268 9.268C8.799 9.737 8.163 10 7.5 10C6.837 10 6.201 9.737 5.732 9.268C5.263 8.799 5 8.163 5 7.5ZM0 12.5C0 11.837 0.263 11.201 0.732 10.732C1.201 10.263 1.837 10 2.5 10H5V12.5C5 13.163 4.737 13.799 4.268 14.268C3.799 14.737 3.163 15 2.5 15C1.837 15 1.201 14.737 0.732 14.268C0.263 13.799 0 13.163 0 12.5ZM5 0V5H7.5C8.163 5 8.799 4.737 9.268 4.268C9.737 3.799 10 3.163 10 2.5C10 1.837 9.737 1.201 9.268 0.732C8.799 0.263 8.163 0 7.5 0H5ZM0 2.5C0 3.163 0.263 3.799 0.732 4.268C1.201 4.737 1.837 5 2.5 5H5V0H2.5C1.837 0 1.201 0.263 0.732 0.732C0.263 1.201 0 1.837 0 2.5ZM0 7.5C0 8.163 0.263 8.799 0.732 9.268C1.201 9.737 1.837 10 2.5 10H5V5H2.5C1.837 5 1.201 5.263 0.732 5.732C0.263 6.201 0 6.837 0 7.5Z"/>
  </svg>
);

const BehanceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.482.105.895.273 1.235.509.336.232.599.544.785.921.182.381.274.848.274 1.392 0 .596-.131 1.086-.395 1.479-.263.391-.659.714-1.176.963.704.201 1.23.557 1.574 1.063.346.508.518 1.112.518 1.818 0 .605-.12 1.125-.355 1.559-.24.435-.565.785-.974 1.049-.407.262-.876.451-1.399.562-.525.111-1.056.167-1.596.167H1V5.698h6.799zm-.339 4.872c.462 0 .839-.107 1.128-.327.287-.218.43-.561.43-1.019 0-.265-.048-.481-.144-.65a1.047 1.047 0 00-.386-.401 1.634 1.634 0 00-.57-.207 3.53 3.53 0 00-.685-.063H3.5v2.667h3.96zm.157 5.106c.267 0 .523-.025.765-.076.243-.052.455-.136.638-.254.181-.118.326-.279.435-.48.106-.202.161-.457.161-.762 0-.601-.166-1.026-.499-1.278-.334-.249-.775-.375-1.323-.375H3.5v3.225h4.117zM16.628 16.626c.441.43.998.644 1.675.644.522 0 .974-.131 1.35-.396.374-.263.602-.544.687-.843h2.44c-.391 1.213-1.001 2.071-1.826 2.577C20.124 19.117 19.143 19.37 18 19.37c-.766 0-1.455-.125-2.072-.375a4.432 4.432 0 01-1.575-1.061 4.76 4.76 0 01-1.003-1.635 5.875 5.875 0 01-.354-2.063c0-.741.12-1.432.357-2.072a4.742 4.742 0 011.017-1.638 4.592 4.592 0 011.578-1.081c.615-.26 1.293-.389 2.035-.389.822 0 1.543.161 2.163.483.616.32 1.127.753 1.524 1.293.399.541.683 1.166.855 1.872.172.704.229 1.438.173 2.203H15.97c.025.744.22 1.429.658 1.919zm2.938-5.012c-.361-.396-.886-.592-1.574-.592-.442 0-.811.074-1.1.225a2.31 2.31 0 00-.725.565 2.04 2.04 0 00-.385.735 3.367 3.367 0 00-.126.77h4.682c-.098-.706-.41-1.307-.772-1.703zM15.098 6.185h5.407v1.468h-5.407V6.185z"/>
  </svg>
);

const ProductHuntIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 000-3.6M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m1.604 14.4h-3.405V18H7.8V6h5.804a4.2 4.2 0 010 8.4"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);

function ProjectLinks({ project }) {
  
  if (project.type === "developer") {
    return (
      <div className="p-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="proj-icon-link">
            <GitHubIcon />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live site" className="proj-icon-link proj-arrow-link">
            <ArrowIcon />
          </a>
        )}
      </div>
    );
  }

  if (project.figma) {
    return (
      <div className="p-links">
        <a href={project.figma} target="_blank" rel="noreferrer" aria-label="Figma design" className="proj-icon-link">
          <FigmaIcon />
        </a>
      </div>
    );
  }

  return (
    <div className="p-links">
      {project.behance && (
        <a href={project.behance} target="_blank" rel="noreferrer" aria-label="Behance" className="proj-icon-link">
          <BehanceIcon />
        </a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live site" className="proj-icon-link proj-arrow-link">
          <ArrowIcon />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  
  const [activeFilter, setActiveFilter] = useState("developer");
  const [tappedCard, setTappedCard] = useState(null);
  const filtered = projects.filter((p) => p.type === activeFilter);
  const [headerRef, headerVisible] = useReveal();

  const handleMobileTap = (id) => {
    setTappedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="page-enter">
      
      <Header />
      <div className="projects-page">

        <div  className={`projects-header reveal${headerVisible ? " reveal--visible" : ""}`}
  ref={headerRef}>
          <h1 className="page-title">Projects<span className="accent">.</span></h1>

          <button
            className={`projects-toggle${activeFilter === "designer" ? " projects-toggle--designer" : ""}`}
            onClick={() => setActiveFilter(activeFilter === "developer" ? "designer" : "developer")}
            aria-label={`Switch to ${activeFilter === "developer" ? "designer" : "developer"} view`}
          >
            <span className="toggle-icon-circle">
              {activeFilter === "developer" ? <PixelDiamondIcon /> : <PixelPencilIcon />}
            </span>
            <span className="toggle-pill-label">
              {activeFilter === "developer" ? "Developer" : "Designer"}
            </span>
          </button>
        </div>

        <div className="projects-list">
          {filtered.map((p, i) => {
  const idx = String(i + 1).padStart(2, "0");
  const isTapped = tappedCard === p.id;
  return (
    <div
      key={p.id}
      className={`project-row${isTapped ? " mobile-tapped" : ""}`}
      style={{
        animation: `pageEnter 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s both`
      }}
      onClick={() => handleMobileTap(p.id)}
    >
      <span className="project-row-bg-num" aria-hidden="true">{idx}</span>
      <span className="project-row-num">{idx}</span>

      <div className="project-row-body">
        <div className="p-heading">
          <h2>{p.name}</h2>
          <div className="p-links-mobile">
            <ProjectLinks project={p} />
          </div>
        </div>
        <p className="p-desc">{p.tagline}</p>
        <div className="p-tech">
          {p.tech.map((t) => <button key={t}>{t}</button>)}
        </div>
      </div>

      <div className="project-row-right">
        {p.img && (
          <div className="project-row-img">
            <img
              src={p.img}
              alt={p.name}
              onError={(e) => {
                e.target.style.background = "#1a1a1a";
                e.target.style.opacity = "0";
              }}
            />
          </div>
        )}
        <div className="p-links-desktop">
          <ProjectLinks project={p} />
        </div>
      </div>

      {p.img && (
        <div className="project-row-mobile-img-overlay">
          <img src={p.img} alt={p.name} />
        </div>
      )}
    </div>
  );
})}
        </div>

        <div className="projects-cta">
          <p>
            {activeFilter === "developer"
              ? "View more of my developer work:"
              : "View more of my design work:"}
          </p>
          <div className="cta-btn-group">
            {activeFilter === "developer" ? (
              <>
                <a href="https://www.github.com/Khushi23V" target="_blank" rel="noreferrer" className="cta-btn" aria-label="GitHub profile">
                  <GitHubIcon />
                </a>
                <a href="https://www.producthunt.com/@khushi_v23" target="_blank" rel="noreferrer" className="cta-btn" aria-label="Product Hunt profile">
                  <ProductHuntIcon />
                </a>
              </>
            ) : (
              <>
                <a href="https://www.figma.com/@khushiv" target="_blank" rel="noreferrer" className="cta-btn" aria-label="Figma profile">
                  <FigmaIcon />
                </a>
                <a href="https://www.behance.net/khushiverma59" target="_blank" rel="noreferrer" className="cta-btn" aria-label="Behance profile">
                  <BehanceIcon />
                </a>
              </>
            )}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}