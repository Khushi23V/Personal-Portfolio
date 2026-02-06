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
    <a href="https://www.producthunt.com/@khushi_v23" target="_blank" rel="noreferrer">
      <img src="/github.png" alt="ProductHunt" />
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
        <div className="quick-links">
          <h2>Quick Links<span className="accent">.</span></h2>
          <p>Check out my two different personalities:</p>
          <div className="link-btns">
            <a href="https://github.com/Khushi23V" target="_blank" rel="noreferrer"><button className="btn-1">Developer</button></a>
            <a href="https://www.figma.com/@khushiv" target="_blank" rel="noreferrer"><button className="btn-2">Designer</button></a>
          </div>
        </div>
        <div className="work">
          <h2>Stuff I've Built<span className="accent">.</span></h2>
          <div className="work-1">
            <img className="p1-img" src="/p-1.png" alt="Image of summarAIze"/>
            <div className="project-info">
              <div className="p-heading">
                <h2>summarAIze</h2>
                <div className="p-links">
                  <a href="https://github.com/Khushi23V" target="_blank" rel="noreferrer">
      <img src="/github.png" alt="GitHub" />
    </a>
    <a href="https://summaraize-ai.in/" target="_blank" rel="noreferrer">
      <img src="/arrow.png" alt="Link" className="arrow"/>
    </a>
                </div>
              </div>
              <p className="p-desc">In aliquet turpis varius nibh ullamcorper imperdiet. Curabitur mauris eros, finibus nec mattis id, eleifend vitae est. Curabitur vel risus sapien.
</p>
              <div className="p-tech">
                <button>React.js</button>
                <button>Vite</button>
                <button>CSS</button>
                <button>Node.js</button>
                <button>Express.js</button>
                <button>CORS</button>
                <button>dotenv</button>
                <button>REST API</button>
                <button>Hugging Face API</button>
                <button>Axios</button>
                <button>MS Clarity</button>
              </div>
            </div>
          </div>
          <div className="view-all">
            <Link to="/projects" className="nav-link">
            <p>View all</p></Link>
            <Link to="/projects" className="nav-link"><img src="/arrow-2.png" alt="Link" className="arrow-2"/></Link>
          </div>
        </div>
        <div className="timeline">
          <div className="left">
            <div className="t-1">
              <h2>Thing 1<span className="accent">.</span></h2>
            <p>Text</p>
            </div>
            <div className="t-2">
              <h2>Thing 2<span className="accent">.</span></h2>
            <p>Text</p>
            </div>
          </div>
          <img className="timeline-img" src="/Frame 2.png" alt="Timeline"/>
          <div className="right">
            <div className="t-3">
              <h2>Thing 3<span className="accent">.</span></h2>
            <p>Text</p>
            </div>
            <div className="t-4">
              <h2>Thing 4<span className="accent">.</span></h2>
            <p>Text</p>
            </div>
          </div>
        </div>
        <Footer />
        </>
    );
}