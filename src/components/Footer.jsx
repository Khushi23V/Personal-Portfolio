import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Footer() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const SESSION_KEY = "kv_visited_this_session";

    async function handleVisit() {
      try {
        const alreadyCounted = sessionStorage.getItem(SESSION_KEY);

        if (!alreadyCounted) {
          const { data, error } = await supabase.rpc("increment_visitor_count");
          if (error) throw error;
          setCount(data);
          sessionStorage.setItem(SESSION_KEY, "1");
        } else {
          const { data, error } = await supabase
            .from("visitor_count")
            .select("count")
            .eq("id", 1)
            .single();
          if (error) throw error;
          setCount(data.count);
        }
      } catch (err) {
        console.error("Visitor count error:", err);
      }
    }

    handleVisit();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-left">
          <div>
            <p className="footer-section-label">Pages</p>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div>
            <p className="footer-section-label">Socials</p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/khushiverma23/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-soc-link">LI</a>
              <span className="footer-soc-sep">·</span>
              <a href="https://github.com/Khushi23V" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-soc-link">GH</a>
              <span className="footer-soc-sep">·</span>
              <a href="https://www.figma.com/@khushiv" target="_blank" rel="noreferrer" aria-label="Figma" className="footer-soc-link">FG</a>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div>
            <p className="footer-cta-label">Have an idea? Let's talk</p>
            <h2 className="footer-cta-headline">
              LET'S BUILD<br />SOMETHING<span className="accent">.</span>
            </h2>
          </div>
          <a className="footer-email" href="mailto:k23verma@gmail.com">
            k23verma@gmail.com
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          Designed &amp; developed by <span className="accent">Khushi Verma</span> — 2026
        </span>
        {count !== null && (
          <span className="footer-visitor-count" aria-label={`${count} visitors`}>
            {count.toLocaleString()} visitors
          </span>
        )}
      </div>
    </footer>
  );
}