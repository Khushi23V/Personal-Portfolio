import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

const aboutLines = [
  { num: 1, text: "Hey everyone,", type: "text" },
  { num: 2, text: "", type: "blank" },
  {
    num: 3,
    text: "I'm Khushi — a Computer Science student at the University of Delhi",
    type: "text",
  },
  {
    num: 4,
    text: "(graduating June 2026, CGPA 8.45) who builds full-stack web apps",
    type: "text",
  },
  {
    num: 5,
    text: "and occasionally dives into ML research when the deadline allows.",
    type: "text",
  },
  { num: 6, text: "", type: "blank" },
  {
    num: 7,
    text: "I did a MERN Stack internship at Particle14 Infotech where I shipped",
    type: "text",
  },
  {
    num: 8,
    text: "JWT auth, real-time Socket.io messaging, Razorpay escrow flows,",
    type: "text",
  },
  {
    num: 9,
    text: "and Redis-backed OTP systems — in production, not just tutorials.",
    type: "text",
  },
  { num: 10, text: "", type: "blank" },
  {
    num: 11,
    text: "My final-year research (multimodal emotion recognition on MELD) hit",
    type: "text",
  },
  {
    num: 12,
    text: "67.51% accuracy, beat 7 published baselines, got submitted to",
    type: "text",
  },
  {
    num: 13,
    text: "Springer MTAP, and was presented at ICET-AICS 2026.",
    type: "text",
  },
  { num: 14, text: "", type: "blank" },
  {
    num: 15,
    text: "Outside of code, I care a lot about design — I Figma everything",
    type: "text",
  },
  {
    num: 16,
    text: "before I build it. I track real user behaviour with Microsoft Clarity.",
    type: "text",
  },
  {
    num: 17,
    text: "I like things that are both functional and beautiful.",
    type: "text",
  },
  { num: 18, text: "", type: "blank" },
  { num: 19, text: "Keep scrolling to check out my skills!", type: "text" },
  { num: 20, text: "", type: "blank" },
  { num: 21, text: "Front-End Development:", type: "label" },
  {
    num: 22,
    text: "[ React, TypeScript, JavaScript, Next.js,",
    type: "skills",
  },
  { num: 23, text: "HTML, CSS, Vite, Responsive Web Design ]", type: "skills" },
  { num: 24, text: "", type: "blank" },
  { num: 25, text: "Back-End Development:", type: "label" },
  {
    num: 26,
    text: "[ Node.js, Express.js, Socket.io, REST APIs,",
    type: "skills",
  },
  {
    num: 27,
    text: "JWT, bcrypt, PostgreSQL, Firebase, Redis ]",
    type: "skills",
  },
  { num: 28, text: "", type: "blank" },
  { num: 29, text: "ML / AI:", type: "label" },
  {
    num: 30,
    text: "[ Python, PyTorch, HuggingFace Transformers,",
    type: "skills",
  },
  { num: 31, text: "RoBERTa, WavLM, VideoMAE, LoRA fine-tuning ]", type: "skills" },
  { num: 32, text: "", type: "blank" },
  { num: 33, text: "UI/UX Design:", type: "label" },
  {
    num: 34,
    text: "[ Figma, User Interface Design, User Research, Wireframing ]",
    type: "skills",
  },
  { num: 35, text: "", type: "blank" },
  { num: 36, text: "Tools & Platforms:", type: "label" },
  {
    num: 37,
    text: "[ Git, Vercel, Railway, Microsoft Clarity, Razorpay SDK ]",
    type: "skills",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="code-editor">
          {aboutLines.map((line) => (
            <div key={line.num} className="code-line">
              <span className="line-num">{line.num}</span>
              {line.type === "blank" ? (
                <span className="line-content">&nbsp;</span>
              ) : line.type === "label" ? (
                <span className="line-content label-text">{line.text}</span>
              ) : line.type === "skills" ? (
                <span className="line-content skills-text">{line.text}</span>
              ) : (
                <span className="line-content">{line.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}