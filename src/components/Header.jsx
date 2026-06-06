import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Header(){
    return (
<header className="head">
  <div className="navbar">
    <div className="nav-left">
      <span className="initials">K<span className="accent">.</span>V<span className="accent">.</span></span>
    </div>

    <nav className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>

    <div className="hamburger">
      ☰
    </div>
  </div>
</header>

    );
}