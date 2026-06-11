import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const [contentRef, contentVisible] = useReveal();
  return (
    <div className="page-enter">
      <Header />
      <div className={`contact-page reveal${contentVisible ? " reveal--visible" : ""}`}
  ref={contentRef}>
        <h1 className="page-title">Contact<span className="accent">.</span></h1>
        <p className="contact-desc">
          Want to work together, collaborate, or just say hi? I'm always open to new opportunities!
        </p>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer"
          className="schedule-btn"
          aria-label="Schedule a meeting on Calendly"
        >
          Schedule a meeting
        </a>
        <p className="contact-or">or</p>
        <div className="contact-socials">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=k23verma@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Send email"
            className="contact-icon-link"
          >
            <img src="/gmail.png" alt="Gmail" className="contact-icon-img" />
          </a>
          <a
            href="https://www.linkedin.com/in/khushiverma23/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="contact-icon-link"
          >
            <img src="/linkedin-logo.png" alt="LinkedIn" className="contact-icon-img" />
          </a>
        </div>
        <p className="contact-social-label">Message me on my socials!</p>
      </div>
      <Footer />
    </div>
  );
}