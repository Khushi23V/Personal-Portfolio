import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "/", label: "Home", num: "01" },
    { to: "/about", label: "About", num: "02" },
    { to: "/projects", label: "Projects", num: "03" },
    { to: "/contact", label: "Contact", num: "04" },
  ];

  return (
    <header className="head">
      <div className="navbar">
        <div className="nav-left">
          <Link to="/" onClick={closeMenu} aria-label="Home" style={{ textDecoration: "none" }}>
            <span className="initials">K<span className="accent">.</span>V<span className="accent">.</span></span>
          </Link>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link">{item.label}</Link>
          ))}
        </nav>

        <button
          className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="ham-bar ham-bar--top"></span>
          <span className="ham-bar ham-bar--mid"></span>
          <span className="ham-bar ham-bar--bot"></span>
        </button>
      </div>

      {/* Fullscreen creative mobile overlay */}
      <div className={`mobile-overlay${menuOpen ? " mobile-overlay--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-overlay__bg"></div>
        <nav className="mobile-overlay__nav" aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="mobile-nav-item"
              onClick={closeMenu}
              style={{ "--i": i }}
            >
              <span className="mobile-nav-num">{item.num}</span>
              <span className="mobile-nav-label">{item.label}</span>
              <span className="mobile-nav-arrow">→</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-overlay__footer">
          <a href="https://www.linkedin.com/in/khushiverma23/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LI</a>
          <a href="https://github.com/Khushi23V" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <a href="https://www.figma.com/@khushiv" target="_blank" rel="noreferrer" aria-label="Figma">FG</a>
        </div>
      </div>
    </header>
  );
}