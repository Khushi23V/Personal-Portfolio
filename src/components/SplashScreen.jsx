import React, { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState("enter"); // enter | hold | fly | done

  useEffect(() => {
    // Phase 1: letters enter (stagger in) — 600ms
    // Phase 2: hold — 500ms
    // Phase 3: fly to corner — 600ms
    // Phase 4: done — call onComplete
    const t1 = setTimeout(() => setPhase("hold"), 700);
    const t2 = setTimeout(() => setPhase("fly"), 1300);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div className={`splash splash--${phase}`} aria-hidden="true">
      <div className="splash__initials">
        <span className="splash__k">K</span>
        <span className="splash__dot1">.</span>
        <span className="splash__v">V</span>
        <span className="splash__dot2">.</span>
      </div>
    </div>
  );
}