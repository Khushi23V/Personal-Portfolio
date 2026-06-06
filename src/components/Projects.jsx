import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    name: "summarAIze",
    img: "/p-1.png",
    github: "https://github.com/Khushi23V/summarAIze",
    live: "https://summaraize-ai.in/",
    desc: "Full-stack AI summarization tool supporting 4 tones via Hugging Face's BART-large-cnn model. Achieved 81.29% average scroll depth and 0 rage clicks across 36 sessions. Grew organic traffic 30% within launch week via Product Hunt, Google, and LinkedIn.",
    tech: ["React", "Vite", "Node.js", "Express.js", "Hugging Face API", "MS Clarity"],
  },
  {
    id: 2,
    name: "SwaNik",
    img: "/p-2.png",
    github: "https://github.com/Khushi23V/SwaNik",
    live: "https://swanik.netlify.app/",
    desc: "Stray dog finder app enabling real-world reports. Achieved 93.3% scroll depth, 3.98 pages/session, and a 27.27% return-visitor rate across 34 users over 90 days.",
    tech: ["React", "Vite", "JavaScript", "Firebase", "Figma"],
  },
  {
    id: 3,
    name: "iris",
    img: "/p-3.png",
    github: "https://github.com/Khushi23V",
    live: "#",
    desc: "Emotion-aware captioning system — final year research project. Multimodal emotion recognition on MELD achieving 67.51% accuracy, surpassing 7 published baselines. Submitted to Springer MTAP; presented at ICET-AICS 2026.",
    tech: ["Python", "PyTorch", "HuggingFace", "RoBERTa", "WavLM", "LoRA"],
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      <div className="projects-page">
        <h1 className="page-title">
          Projects<span className="accent">.</span>
        </h1>
        <div className="projects-list">
          {projects.map((p) => (
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
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <img src="/github.png" alt="GitHub" />
                    </a>
                    <a href={p.live} target="_blank" rel="noreferrer">
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
            Check out my launched products on Product Hunt!
          </p>
          <a href="https://www.figma.com/@khushiv" target="_blank" rel="noreferrer" className="cta-btn" aria-label="Product Hunt profile">
            <img src="/product-hunt.png" alt="Product Hunt" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}