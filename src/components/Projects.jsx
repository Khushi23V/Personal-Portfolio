import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    type: "developer",
    name: "summarAIze",
    img: "/Frame 5.png",
    github: "https://github.com/Khushi23V/summarAIze",
    live: "https://summaraize-ai.in/",
    desc: "Built a full-stack AI summary tool with 4 summary tones, 200+ users, 81.29% avg scroll depth, 0 rage clicks, and 30% traffic growth in week one. Turns walls of text into something humans actually understand.",
    tech: ["React", "Vite", "Node.js", "Express.js", "Hugging Face API", "MS Clarity"],
  },
  {
    id: 2,
    type: "developer",
    name: "SwaNik",
    img: "/1. Main Page.png",
    github: "https://github.com/Khushi23V/SwaNik",
    live: "https://swanik.netlify.app/",
    desc: "A civic-tech app that turned stray dog reports into real-world action. 93.3% scroll depth, 3.98 pages/session, 45.72% return visitors. Built with heart, Firebase, and a lot of Figma.",
    tech: ["React", "Vite", "JavaScript", "Firebase", "Figma"],
  },
  {
    id: 3,
    type: "developer",
    name: "Emotion-Aware Captioning Model",
    img: "/p-3.png",
    github: "https://github.com/Khushi23V",
    live: "#",
    desc: "Multimodal emotion recognition on MELD — 67.51% accuracy, beat 7 published baselines including DialogueRNN and UniMSE. Submitted to Springer MTAP. Presented at ICET-AICS 2026. The research paper that started as a final-year project and became something worth publishing.",
    tech: ["Python", "PyTorch", "AI", "HuggingFace", "RoBERTa", "WavLM", "LoRA"],
  },
  {
    id: 4,
    type: "designer",
    name: "summarAIze",
    img: "/Frame 5.png",
    github: null,
    live: "https://www.figma.com/@khushiv",
    desc: "Designed the entire UI system before a line of code existed; component library, user flows, two app states (pre and post-summary). Then tracked 200+ real users with Clarity post-launch. 0 rage clicks. Design decisions validated.",
    tech: ["Figma", "UI Design", "User Research", "Design System", "Wireframing"],
  },
  {
    id: 5,
    type: "designer",
    name: "SwaNik",
    img: "/1. Main Page.png",
    github: null,
    live: "https://www.figma.com/@khushiv",
    desc: "Full product design for a civic stray-dog reporting app, from low-fidelity wireframes to a warm, high-contrast visual system built for accessibility. Every screen designed before a single component was coded.",
    tech: ["Figma", "UI Design", "Wireframing", "Prototyping", "Accessibility"],
  },
  {
    id: 6,
    type: "designer",
    name: "Weave",
    img: "/weave.png",
    github: null,
    live: "https://www.figma.com/@khushiv",
    desc: "Marketing website landing page design for a UX-led web agency. Desktop and mobile breakpoints fully documented in Figma, responsive nav overlay, CTA hierarchy designed for conversion.",
    tech: ["Figma", "UI Design", "Wireframing", "Breakpoint Design", "Responsive Design"],
  },
  {
    id: 7,
    type: "designer",
    name: "AeroFix",
    img: "/Framex.png",
    github: null,
    live: "https://www.figma.com/@khushiv",
    desc: "A clean, conversion-focused landing page design for an AC installation service. Hero section, trust signals, dual CTAs, and a fully responsive mobile layout. Designed to make a service business look credible in under 3 seconds.",
    tech: ["Figma", "UI Design", "Responsive Design", "Wireframing", "CTA Design"],
  },
  {
    id: 8,
    type: "designer",
    name: "Diet & Co.",
    img: "/dietco.png",
    github: null,
    live: "https://www.figma.com/@khushiv",
    desc: "Mobile-native food delivery app design. Splash screen, offer carousel, category browsing, geo-tagged restaurant cards, and bottom navigation. Built to iOS HIG standards with touch-target-conscious spacing throughout.",
    tech: ["Figma", "Mobile UI", "iOS HIG", "Interaction Design"],
  },
];

function DevLinks() {
  return (
    <div className="cta-btn-group">
      <a href="https://www.github.com/Khushi23V" target="_blank" rel="noreferrer" className="cta-btn" aria-label="GitHub profile">
        <img src="/github.png" alt="GitHub" />
      </a>
      <a href="https://www.producthunt.com/" target="_blank" rel="noreferrer" className="cta-btn" aria-label="Product Hunt profile">
        <img src="/product-hunt.png" alt="Product Hunt" />
      </a>
    </div>
  );
}

function DesignLinks() {
  return (
    <div className="cta-btn-group">
      <a href="https://www.figma.com/@khushiv" target="_blank" rel="noreferrer" className="cta-btn" aria-label="Figma profile">
        <img src="/figma.png" alt="Figma" />
      </a>
      <a href="https://www.behance.net/" target="_blank" rel="noreferrer" className="cta-btn" aria-label="Behance profile">
        <img src="/behance.png" alt="Behance" />
      </a>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("developer");

  const filtered = projects.filter((p) => p.type === activeFilter);

  return (
    <div>
      <Header />
      <div className="projects-page">
        <h1 className="page-title">
          Projects<span className="accent">.</span>
        </h1>

        <div className="projects-filter">
          <button
            className={"filter-btn" + (activeFilter === "developer" ? " filter-btn--active" : "")}
            onClick={() => setActiveFilter("developer")}
          >
            Developer
          </button>
          <button
            className={"filter-btn" + (activeFilter === "designer" ? " filter-btn--active" : "")}
            onClick={() => setActiveFilter("designer")}
          >
            Designer
          </button>
        </div>

        <div className="projects-list">
          {filtered.map((p) => (
            <div key={p.id} className="project-card">
              <img
                className="project-card-img"
                src={p.img}
                alt={p.name}
                onError={(e) => {
                  e.target.style.background = "#1a1a1a";
                  e.target.style.border = "none";
                }}
              />
              <div className="project-card-info">
                <div className="p-heading">
                  <h2>{p.name}</h2>
                  <div className="p-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
                        <img src="/github.png" alt="GitHub" />
                      </a>
                    )}
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live / Figma">
                      <img src="/arrow.png" alt="Live" className="arrow" />
                    </a>
                  </div>
                </div>
                <p className="p-desc">{p.desc}</p>
                <div className="p-tech">
                  {p.tech.map((t) => (
                    <button key={t}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>
            {activeFilter === "developer"
              ? "View my developer work on GitHub and Product Hunt!"
              : "View my design work on Figma and Behance!"}
          </p>
          {activeFilter === "developer" ? <DevLinks /> : <DesignLinks />}
        </div>

      </div>
      <Footer />
    </div>
  );
}