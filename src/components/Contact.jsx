import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <h1 className="page-title">Contact<span className="accent">.</span></h1>
        <p className="contact-desc">
          Want to work together, collaborate on something, or just say hi?<br />
          I'm always open to new opportunities and conversations!
        </p>
        <a href="https://calendly.com/" target="_blank" rel="noreferrer">
          <button className="schedule-btn">Schedule a meeting</button>
        </a>
        <p className="contact-or">or</p>
        <div className="contact-socials">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=k23verma@gmail.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e90c06" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/khushiverma23/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e90c06" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
        <p className="contact-social-label">Message me on my socials!</p>
      </div>
      <Footer />
    </>
  );
}