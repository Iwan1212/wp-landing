import { useEffect, useRef } from "react";

export function FloatingDisc() {
  const disc1Ref = useRef<HTMLDivElement>(null);
  const disc2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      if (disc1Ref.current) {
        const y = Math.sin(progress * Math.PI * 2) * (vh * 0.3) + vh * 0.2;
        const x = Math.sin(progress * Math.PI * 3) * 200 + vw * 0.55;
        const rotate = progress * 720;
        disc1Ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      }

      if (disc2Ref.current) {
        const y = Math.cos(progress * Math.PI * 1.5) * (vh * 0.25) + vh * 0.55;
        const x = Math.cos(progress * Math.PI * 2.5) * 250 + vw * 0.08;
        const rotate = progress * -540;
        disc2Ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 10 }}>
      {/* Main disc with compass */}
      <div ref={disc1Ref} className="absolute top-0 left-0 will-change-transform">
        <div className="relative" style={{ width: 600, height: 600 }}>
          {/* Disc rings */}
          <svg
            width="600"
            height="600"
            viewBox="0 0 500 500"
            fill="none"
            className="absolute inset-0"
            style={{ opacity: 0.12 }}
          >
            <ellipse cx="250" cy="250" rx="240" ry="240" stroke="#FFECD1" strokeWidth="2" />
            <ellipse cx="250" cy="250" rx="200" ry="200" stroke="#FFECD1" strokeWidth="1.5" />
            <ellipse cx="250" cy="250" rx="80" ry="80" fill="#FFECD1" fillOpacity="0.3" />
            <ellipse cx="250" cy="250" rx="60" ry="60" stroke="#FFECD1" strokeWidth="1" />
            <ellipse cx="250" cy="250" rx="160" ry="160" stroke="#FFECD1" strokeWidth="0.5" strokeDasharray="8 12" />
            <ellipse cx="250" cy="250" rx="120" ry="120" stroke="#FFECD1" strokeWidth="0.5" strokeDasharray="6 10" />
            <path d="M50 250 Q 150 200, 250 250 Q 350 300, 450 250" stroke="#FFECD1" strokeWidth="0.8" strokeDasharray="4 8" />
            <path d="M250 50 Q 200 150, 250 250 Q 300 350, 250 450" stroke="#FFECD1" strokeWidth="0.8" strokeDasharray="4 8" />
          </svg>

          {/* Compass logo in center */}
          <img
            src="/logo/wp-icon-white.png"
            alt=""
            className="absolute top-1/2 left-1/2 w-52 h-52 animate-compass"
            style={{ opacity: 0.18 }}
          />
        </div>
      </div>

      {/* Secondary disc - teal */}
      <div ref={disc2Ref} className="absolute top-0 left-0 will-change-transform">
        <svg width="350" height="350" viewBox="0 0 500 500" fill="none" style={{ opacity: 0.08 }}>
          <ellipse cx="250" cy="250" rx="240" ry="240" stroke="#008491" strokeWidth="3" />
          <ellipse cx="250" cy="250" rx="180" ry="180" stroke="#008491" strokeWidth="2" />
          <ellipse cx="250" cy="250" rx="70" ry="70" fill="#008491" fillOpacity="0.3" />
          <ellipse cx="250" cy="250" rx="130" ry="130" stroke="#008491" strokeWidth="1" strokeDasharray="6 10" />
        </svg>
      </div>
    </div>
  );
}
