import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    type: "developer",
    name: "summarAIze",
    img: "/p-1.png",
    github: "https://github.com/Khushi23V/summarAIze",
    live: "https://summaraize-ai.in/",
    desc: "Full-stack AI summarization tool supporting 4 tones via Hugging Face's BART-large-cnn model. Achieved 81.29% average scroll depth and 0 rage clicks across 36 sessions. Grew organic traffic 30% within launch week via Product Hunt, Google, and LinkedIn.",
    tech: ["React", "Vite", "Node.js", "Express.js", "Hugging Face API", "MS Clarity"],
  },
  {
    id: 2,
    type: "developer",
    name: "SwaNik",
    img: "/p-2.png",
    github: "https://github.com/Khushi23V/SwaNik",
    live: "https://swanik.netlify.app/",
    desc: "Stray dog finder app enabling real-world reports. Achieved 93.3% scroll depth, 3.98 pages/session, and a 27.27% return-visitor rate across 34 users over 90 days.",
    tech: ["React", "Vite", "JavaScript", "Firebase", "Figma"],
  },
  {
    id: 3,
    type: "developer",
    name: "Emotion-Aware Captioning Model",
    img: "/p-3.png",
    github: "https://github.com/Khushi23V",
    live: "#",
    desc: "Emotion-aware captioning system — final year research project. Multimodal emotion recognition on MELD achieving 67.51% accuracy, surpassing 7 published baselines. Submitted to Springer MTAP; presented at ICET-AICS 2026.",
    tech: ["Python", "PyTorch", "HuggingFace", "RoBERTa", "WavLM", "LoRA"],
  },
  {
    id: 4,
    type: "developer",
    name: "iris",
    img: "/p-3.png",
    github: "https://github.com/Khushi23V",
    live: "#",
    desc: "Emotion-aware captioning system — final year research project. Multimodal emotion recognition on MELD achieving 67.51% accuracy, surpassing 7 published baselines. Submitted to Springer MTAP; presented at ICET-AICS 2026.",
    tech: ["Python", "PyTorch", "HuggingFace", "RoBERTa", "WavLM", "LoRA"],
  },
  {
    id: 5,
    type: "designer",
    name: "summarAIze",
    img: "/p-1.png",
    github: null,
    live: "https://www.figma.com/@khushiv",
    desc: "End-to-end Figma design for summarAIze. Designed the full UI system, component library, and user flows before a single line of code was written. Tracked real user behaviour via Microsoft Clarity post-launch.",
    tech: ["Figma", "UI Design", "User Research", "Design System", "Wireframing"],
  },
  {
    id: 6,
    type: "designer",
    name: "SwaNik",
    img: "/p-2.png",
    github: null,
    live: "https://www.figma.com/@khushiv",
    desc: "Designed the full product experience for SwaNik — a stray dog reporting app. Created user flows, wireframes, and a warm, accessible visual system to support civic participation.",
    tech: ["Figma", "UI Design", "Wireframing", "Prototyping", "Accessibility"],
  },
  {
    id: 7,
    type: "designer",
    name: "Weave & AeroFix",
    img: "/p-2.png",
    github: null,
    live: "https://www.figma.com/@khushiv",
    desc: "Designed the full product experience for SwaNik — a stray dog reporting app. Created user flows, wireframes, and a warm, accessible visual system to support civic participation.",
    tech: ["Figma", "UI Design", "Wireframing", "Prototyping", "Accessibility"],
  },
  {
    id: 8,
    type: "designer",
    name: "Diet & Co.",
    img: "/p-2.png",
    github: null,
    live: "https://www.figma.com/@khushiv",
    desc: "Designed the full product experience for SwaNik — a stray dog reporting app. Created user flows, wireframes, and a warm, accessible visual system to support civic participation.",
    tech: ["Figma", "UI Design", "Wireframing", "Prototyping", "Accessibility"],
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("developer");

  const filtered = projects.filter((p) => p.type === activeFilter);

  return (
    <>
      <Header />
      <div className="projects-page">
        <h1 className="page-title">
          Projects<span className="accent">.</span>
        </h1>

        {/* Filter toggle */}
        <div className="projects-filter">
          <button
            className={`filter-btn${activeFilter === "developer" ? " filter-btn--active" : ""}`}
            onClick={() => setActiveFilter("developer")}
          >
            Developer
          </button>
          <button
            className={`filter-btn${activeFilter === "designer" ? " filter-btn--active" : ""}`}
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
              ? "View my developer work on GitHub!"
              : "View my design work on Figma!"}
          </p>
          <a
            href={activeFilter === "developer" ? "https://www.github.com/Khushi23V" : "https://www.figma.com/@khushiv"}
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
            aria-label={activeFilter === "developer" ? "GitHub profile" : "Figma profile"}
          >
            <img
              src={activeFilter === "developer" ? "/github.png" : "/figma.png"}
              alt={activeFilter === "developer" ? "GitHub" : "Figma"}
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}