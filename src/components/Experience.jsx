import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const experiences = [
  {
    id: 0,
    duration: "April 2026 – June 2026",
    role: "UI/UX Designer & Frontend Developer (Freelance)",
    company: "AJ's Foundation",
    bullets: [
      "Designed the organisation's website from scratch in Figma, defining visual identity, colour tokens, type system, component library, and responsive layouts across desktop and mobile before opening VS Code.",
      "Built and deployed a multi-page React site to Vercel, responsive across all breakpoints, with smooth animations and transitions that matched the design intent exactly.",
      "Optimised images for faster load times and integrated Microsoft Clarity to track real user behaviour post-launch. 50+ live users within 3 days of launch.",
    ],
    tags: ["REACT", "CSS", "FIGMA", "GIT", "VERCEL", "MICROSOFT CLARITY", "DESIGN RESEARCH"],
  },
  {
    id: 1,
    duration: "March 2026 – April 2026",
    role: "MERN Stack Developer & UI/UX Intern",
    company: "Particle14 Infotech Pvt. Ltd.",
    bullets: [
      "Designed the complete Buddy4day mobile app in Figma — full design system with colour tokens, type scale, gradient rules, and 5+ component variants before a single screen was coded.",
      "Mapped end-to-end flows for two separate user personas across 15+ screens: onboarding, discovery, booking lifecycle, payment, ID verification, chat, and post-session rating.",
      "Shipped JWT-based 3-role auth, real-time Socket.io dual-channel messaging persisted to PostgreSQL, and a Razorpay escrow flow with HMAC-SHA256 verification — all in production.",
      "Built a Redis-backed OTP Safe-Meet system with 10-minute TTL and real-time GPS geofencing enforcing a 500m session boundary using the Haversine formula.",
    ],
    tags: ["TYPESCRIPT", "EXPRESS.JS", "REACT", "NODE.JS", "POSTGRESQL", "SOCKET.IO", "REDIS", "RAZORPAY", "FIGMA", "UI/UX DESIGN", "DESIGN RESEARCH"],
  },
];

export default function Experience() {
  const [openCard, setOpenCard] = useState(null);

  const handleToggle = (idx) => {
    setOpenCard((prev) => (prev === idx ? null : idx));
  };

  const gridClass = `exp-cards-grid${openCard === 0 ? " expanded-0" : openCard === 1 ? " expanded-1" : ""}`;

  return (
    <>
      <Header />
      <div className="exp-page">
        <h1 className="page-title">Experience<span className="accent">.</span></h1>

        <div className="exp-cards-wrap">
          <div className={gridClass}>
            {experiences.map((exp) => {
              const isOpen = openCard === exp.id;
              return (
                <div
                  key={exp.id}
                  className={`exp-card-new${isOpen ? " open" : ""}`}
                  onClick={() => handleToggle(exp.id)}
                  role="button"
                  aria-expanded={isOpen}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleToggle(exp.id)}
                >
                  <div className="exp-card-header">
                    <div className="exp-card-meta">
                      <p className="exp-card-duration">{exp.duration}</p>
                      <p className="exp-card-role">{exp.role}</p>
                      <p className="exp-card-company">{exp.company}</p>
                    </div>
                    <div className="exp-card-toggle" aria-hidden="true">
                      <svg className="tog-plus" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <svg className="tog-minus" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className="exp-card-detail">
                    <div className="exp-card-detail-inner">
                      <ul className="exp-card-bullets">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                      <div className="exp-card-tags">
                        {exp.tags.map((t) => (
                          <span key={t} className="exp-card-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}