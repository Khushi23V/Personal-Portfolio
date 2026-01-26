import React, {useState} from "react";
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainPage() {
    return(
        <>
        <Header />

        <div className="intro">
            <h1 className="hero-title">
                <span className="line hey">HEY<span className="accent">,</span></span>
                <span className="line name">I<span className="accent">’</span>M KHUSHI</span>
                <span className="line surname">VERMA</span>
            </h1>
<div className="image-logo">
  <img className="profile-img" src="/port-image.png" alt="Image of Khushi Verma"
  />
  <div className="icons">
    <a href="https://www.linkedin.com/in/khushiverma23/" target="_blank" rel="noreferrer">
      <img src="/linkedin-logo.png" alt="LinkedIn" />
    </a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=k23verma@gmail.com" className="gmail" target="_blank" rel="noreferrer">
      <img src="/gmail.png" alt="Gmail"  />
    </a>
    <a href="https://github.com/Khushi23V" target="_blank" rel="noreferrer">
      <img src="/github.png" alt="GitHub" />
    </a>
  </div>
</div>
        </div>

        <div className="one-liner">
            <h2 className="opening">&lt;</h2>
            <h2 className="text">I’m a Computer Science student who’s slightly obsessed with making the web look and feel amazing.
                <span className="text-break"> Click here to download my resume!</span></h2>
            <h2 className="closing">/&gt;</h2>
        </div>
        <div className="carousel"></div>
        <div className="timeline"></div>
        <Footer />
        </>
    );
}