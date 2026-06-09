import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

const aboutLines = [
  { num: 1, text: "Hey, I'm Khushi —", type: "text" },
  { num: 2, text: "", type: "blank" },
  { num: 3, text: "a CS student at University of Delhi (CGPA 8.45) who sits", type: "text" },
  { num: 4, text: "right at the cusp of design and engineering.", type: "text" },
  { num: 5, text: "I don't just build things, I design them first then obsess over", type: "text" },
  { num: 6, text: "them for a long while. Then check if real people actually use", type: "text" },
  { num: 7, text: "them. (They do. The data says so.)", type: "text" },
  { num: 8, text: "", type: "blank" },
  { num: 9, text: "I interned at Particle14 Infotech and shipped real features", type: "text" },
  { num: 10, text: "for a live product — JWT auth, Socket.io messaging, Razorpay", type: "text" },
  { num: 11, text: "escrow, Redis OTPs. Not 'built a to-do app' experience (Tho ", type: "text" },
  { num: 12, text: "that's still something something I want to build).", type: "text" },
  { num: 13, text: "", type: "blank" },
  { num: 14, text: "Every app I've built started life as a Figma file.", type: "text" },
  { num: 15, text: "Design systems, user flows, component libraries, you name it.", type: "text" },
  { num: 16, text: "I track behaviour post-launch with Microsoft Clarity.", type: "text" },
  { num: 17, text: "200+ users, 0 rage clicks. All through design and development", type: "text" },
  { num: 18, text: "intent.", type: "text" },
  { num: 19, text: "", type: "blank" },
  { num: 20, text: "Oh, and I co-authored an ML research paper that beat 7 published", type: "text" },
  { num: 21, text: "baselines (67.51% accuracy on MELD), got submitted to Springer,", type: "text" },
  { num: 22, text: "and was presented at ICET-AICS 2026. Just a normal final year,", type: "text" },
  { num: 23, text: "really.", type: "text" },
  { num: 24, text: "", type: "blank" },
  { num: 25, text: "Keep scrolling to check out my skills!", type: "text" },
  { num: 26, text: "", type: "blank" },
  { num: 27, text: "Front-End Development:", type: "label" },
  { num: 28, text: "[ React, TypeScript, JavaScript, Next.js,", type: "skills" },
  { num: 29, text: "Tailwind CSS, HTML, CSS, Vite, Responsive Web Design ]", type: "skills" },
  { num: 30, text: "", type: "blank" },
  { num: 31, text: "Back-End Development:", type: "label" },
  { num: 32, text: "[ Node.js, Express.js, Socket.io, REST APIs,", type: "skills" },
  { num: 33, text: "JWT, bcrypt, PostgreSQL, Firebase, Redis ]", type: "skills" },
  { num: 34, text: "", type: "blank" },
  { num: 35, text: "UI/UX Design:", type: "label" },
  { num: 36, text: "[ Figma, Design Systems, Wireframing, Prototyping,", type: "skills" },
  { num: 37, text: "User Flows, Component Libraries, Interaction Design,", type: "skills" },
  { num: 38, text: "Information Architecture, Microsoft Clarity ]", type: "skills" },
  { num: 39, text: "", type: "blank" },
  { num: 40, text: "ML / AI:", type: "label" },
  { num: 41, text: "[ Python, PyTorch, HuggingFace Transformers,", type: "skills" },
  { num: 42, text: "RoBERTa, WavLM, VideoMAE, LoRA fine-tuning ]", type: "skills" },
  { num: 43, text: "", type: "blank" },
  { num: 44, text: "Tools & Platforms:", type: "label" },
  { num: 45, text: "[ Git, Vercel, Railway, Razorpay SDK,", type: "skills" },
  { num: 46, text: "Google Analytics, Microsoft Clarity ]", type: "skills" },
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