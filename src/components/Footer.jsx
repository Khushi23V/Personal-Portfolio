import React, { useEffect, useState } from "react";

export default function Footer() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Simple localStorage visitor counter (no backend needed)
    // Increments once per unique browser session
    try {
      const stored = parseInt(localStorage.getItem("kv_visit_count") || "0", 10);
      const sessionKey = "kv_visited_this_session";
      const alreadyCounted = sessionStorage.getItem(sessionKey);

      let newCount = stored;
      if (!alreadyCounted) {
        newCount = stored + 1;
        localStorage.setItem("kv_visit_count", String(newCount));
        sessionStorage.setItem(sessionKey, "1");
      }
      setCount(newCount);
    } catch {
      // If storage is blocked, just show nothing
    }
  }, []);

  return (
    <>
      {count !== null && (
        <span className="visitor-count" aria-label={`${count} visitors`}>
          Visitor count: {count.toLocaleString()}
        </span>
      )}
      <footer className="footer">
        <p>Designed and Developed by Khushi Verma</p>
      </footer>
    </>
  );
}