import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Experience() {
  return (
    <>
      <Header />
      <div className="exp-page">
        <h1 className="page-title">
          Experience<span className="accent">.</span>
        </h1>

        <div className="timeline-exp">


          <img className="exp-spine" src="/Frame 3.png" alt="Timeline" />

          <div className="exp-cards">
            <div className="exp-card">
              <h2 className="exp-year">April 2026 – June 2026<span className="accent">.</span></h2>
              <p className="exp-role">UI/UX Designer & Frontend Developer (Freelance)</p>
              <p className="exp-company">AJ’s Foundation</p>
              <ul className="exp-bullets">
                <li>Designed the organisation's website from scratch in Figma, defining visual identity, colour tokens, type system, component library, and responsive layouts across desktop and mobile before opening VS Code.</li>
                <li>Built and deployed a multi-page React site to Vercel, responsive across all breakpoints, with smooth animations and transitions that matched the design intent exactly.</li>
                <li>Optimised images for faster load times and integrated Microsoft Clarity to track real user behaviour post-launch. 50+ live users within 3 days of launch.</li>
              </ul>
              <div className="exp-tags">
                {["React", "CSS", "Figma", "Git", "Vercel", "Microsoft Clarity", "Design Research"].map(t => (
                  <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="exp-card">
              <h2 className="exp-year">March 2026 – April 2026<span className="accent">.</span></h2>
              <p className="exp-role">MERN Stack Developer & UI/UX Intern</p>
              <p className="exp-company">Particle14 Infotech Pvt. Ltd.</p>
              <ul className="exp-bullets">
                <li>Designed the complete Buddy4day mobile app in Figma — full design system with colour tokens, type scale, gradient rules, and 5+ component variants before a single screen was coded.</li>
                <li>Mapped end-to-end flows for two separate user personas (User and Buddy) across 15+ screens: onboarding, discovery, booking lifecycle, payment, ID verification, chat, and post-session rating.</li>
                <li>Shipped JWT-based 3-role auth, real-time Socket.io dual-channel messaging (persisted to PostgreSQL), and a Razorpay escrow flow with HMAC-SHA256 verification all in production, all on a live user base.</li>
                <li>Built a Redis-backed OTP Safe-Meet system with 10-minute TTL and a 5-state booking lifecycle with automated Nodemailer emails at every transition. Real-time GPS geofencing enforced a 500 m session boundary using the Haversine formula.</li>
              </ul>
              <div className="exp-tags">
                {["TypeScript", "Express.js", "React", "Node.js", "PostgreSQL", "Socket.io", "Redis", "Razorpay", "Figma", "UI/UX Design", "Design Research"].map(t => (
                  <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}