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

        {/* Outer row: spine | C */}
        <div className="timeline-exp">

          {/* Spine */}
          <img className="exp-spine" src="/Frame 3.png" alt="Timeline" />

          {/* C: left + right stacked vertically */}
          <div className="exp-cards">
            <div className="exp-card">
              <h2 className="exp-year">April 2026 – June 2026<span className="accent">.</span></h2>
              <p className="exp-role">UI/UX Designer & Frontend Developer (Freelance)</p>
              <p className="exp-company">AJ’s Foundation</p>
              <ul className="exp-bullets">
                <li>Designed and developed the organization’s official responsive website from concept to deployment, using Figma
for high-fidelity wireframes and prototyping</li>
                <li>Spearheaded user onboarding design, optimizing the user journey to drive adoption to 50+ active users within 3
days of product launch</li>
                <li>Built a reusable React component library and design system, cutting future iteration cycles by 50% and ensuring
strict visual consistency</li>
              </ul>
              <div className="exp-tags">
                {["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Redis", "Razorpay"].map(t => (
                  <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="exp-card">
              <h2 className="exp-year">March 2026 – April 2026<span className="accent">.</span></h2>
              <p className="exp-role">MERN Stack Developer & UI/UX Intern</p>
              <p className="exp-company">Particle14 Infotech Pvt. Ltd.</p>
              <ul className="exp-bullets">
                <li>Improved design consistency across a 15+ screen mobile product by creating a full design system in Figma,
defining colour tokens, typography scale, gradient rules, and component variants for two distinct user flows (User
and Buddy), reducing design decision time during implementation.</li>
                <li>Reduced session security risk by implementing a Redis-backed OTP Safe-Meet protocol with 10-minute TTL and a
5-state booking lifecycle with Nodemailer confirmation emails at each transition, handling real concurrent users in
production.</li>
                <li>Built a 3-role (Client / Companion / Admin) access-control system using stateless JWT auth and bcrypt hashing,
eliminating server-side session storage entirely.</li>
                <li>Engineered a dual-channel real-time messaging system with Socket.io - booking-scoped and direct pre-booking,
persisted to PostgreSQL so chat history survives reconnects across all sessions.</li>
              </ul>
              <div className="exp-tags">
                {["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Redis", "Razorpay"].map(t => (
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