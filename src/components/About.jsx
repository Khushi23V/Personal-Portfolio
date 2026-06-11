import React from "react";
import { useReveal } from "../hooks/useReveal";
import Header from "./Header";
import Footer from "./Footer";

const aboutLines = [
  { num: 1,  text: "Hey, I'm Khushi —", type: "text" },
  { num: 2,  text: "", type: "blank" },
  { num: 3,  text: "a CS student at University of Delhi (CGPA 8.45)", type: "text" },
  { num: 4,  text: "who sits right at the cusp of design and engineering.", type: "text" },
  { num: 5,  text: "I don't just build things — I design them first,", type: "text" },
  { num: 6,  text: "obsess over them for a long while, then check", type: "text" },
  { num: 7,  text: "if real people actually use them.", type: "text" },
  { num: 8,  text: "(They do. The data says so.)", type: "text" },
  { num: 9,  text: "", type: "blank" },
  { num: 10, text: "I interned at Particle14 Infotech and shipped real", type: "text" },
  { num: 11, text: "features for a live product — JWT auth, Socket.io", type: "text" },
  { num: 12, text: "messaging, Razorpay escrow, Redis OTPs.", type: "text" },
  { num: 13, text: "Not 'built a to-do app' experience.", type: "text" },
  { num: 14, text: "(Tho that's still something I want to build.)", type: "text" },
  { num: 15, text: "", type: "blank" },
  { num: 16, text: "Every app I've built started life as a Figma file.", type: "text" },
  { num: 17, text: "Design systems, user flows, component libraries.", type: "text" },
  { num: 18, text: "I track behaviour post-launch with Microsoft Clarity.", type: "text" },
  { num: 19, text: "200+ users, 0 rage clicks.", type: "text" },
  { num: 20, text: "", type: "blank" },
  { num: 21, text: "Oh, and I co-authored an ML research paper that", type: "text" },
  { num: 22, text: "beat 7 published baselines (67.51% accuracy on MELD),", type: "text" },
  { num: 23, text: "got submitted to Springer, and was presented at", type: "text" },
  { num: 24, text: "ICET-AICS 2026. Just a normal final year, really.", type: "text" },
  { num: 25, text: "", type: "blank" },
  { num: 26, text: "Keep scrolling to check out my skills!", type: "text" },
  { num: 27, text: "", type: "blank" },
  { num: 28, text: "Front-End Development:", type: "label" },
  { num: 29, text: "[ React, TypeScript, JavaScript, Next.js,", type: "skills" },
  { num: 30, text: "  Tailwind CSS, HTML, CSS, Vite ]", type: "skills" },
  { num: 31, text: "", type: "blank" },
  { num: 32, text: "Back-End Development:", type: "label" },
  { num: 33, text: "[ Node.js, Express.js, Socket.io, REST APIs,", type: "skills" },
  { num: 34, text: "  JWT, bcrypt, PostgreSQL, Firebase, Redis ]", type: "skills" },
  { num: 35, text: "", type: "blank" },
  { num: 36, text: "UI/UX Design:", type: "label" },
  { num: 37, text: "[ Figma, Design Systems, Wireframing, Prototyping,", type: "skills" },
  { num: 38, text: "  User Flows, Component Libraries, MS Clarity ]", type: "skills" },
  { num: 39, text: "", type: "blank" },
  { num: 40, text: "ML / AI:", type: "label" },
  { num: 41, text: "[ Python, PyTorch, HuggingFace Transformers,", type: "skills" },
  { num: 42, text: "  RoBERTa, WavLM, VideoMAE, LoRA fine-tuning ]", type: "skills" },
  { num: 43, text: "", type: "blank" },
  { num: 44, text: "Tools & Platforms:", type: "label" },
  { num: 45, text: "[ Git, Vercel, Railway, Razorpay SDK,", type: "skills" },
  { num: 46, text: "  Google Analytics, Microsoft Clarity ]", type: "skills" },
];

export default function About({ standalone = true }) {
  const [editorRef, editorVisible] = useReveal(0.05);
  const content = (
    <div className="about-page">
      <div className={`code-editor reveal${editorVisible ? " reveal--visible" : ""}`}
  ref={editorRef}>
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
  );

  if (!standalone) return content;

  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
}