"use client";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const NAV_ITEMS = [
    { id: "about", label: "I · About" },
    { id: "experience", label: "II · Experience" },
    { id: "projects", label: "III · Projects" },
    { id: "skills", label: "IV · Skills" },
    { id: "contactme", label: "V · Contact" },
  ] as const;

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const item of NAV_ITEMS) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <nav
        aria-label="Section navigation"
        className="absolute top-0 right-0 flex items-center md:left-[52px] left-0 z-10"
        style={{
          height: 48,
          padding: "0 36px",
          gap: 28,
          borderBottom: "1px solid var(--rule)",
          overflowX: "auto",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "page" : undefined}
              className="font-[family-name:var(--font-dm-mono)] uppercase whitespace-nowrap transition-colors duration-200"
              style={{
                fontSize: 8.5,
                letterSpacing: "0.14em",
                color: isActive ? "var(--accent)" : "var(--ink-mute)",
                borderBottom: isActive ? "1px solid var(--accent)" : "1px solid transparent",
                paddingBottom: 2,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = "var(--ink-mute)";
              }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
      {/* Left rail */}
      <div
        className="absolute left-0 top-0 h-full hidden md:flex flex-col items-center justify-between"
        style={{
          width: 52,
          background: "var(--surface-2)",
          borderRight: "1px solid var(--rule)",
          padding: "20px 0 28px",
        }}
      >
        <span
          className="font-[family-name:var(--font-dm-mono)] uppercase"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: 8,
            letterSpacing: "0.22em",
            color: "var(--ink-pale)",
          }}
        >
          Tomas Vivaldi
        </span>
        <span
          aria-hidden="true"
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "var(--ink-pale)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Right image panel */}
      <div
        className="absolute right-0 top-0 h-full hidden lg:flex items-center justify-center"
        style={{
          width: 220,
          background: "var(--surface-3)",
          borderLeft: "1px solid var(--rule)",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "var(--surface-2)",
            border: "1px solid var(--rule)",
            opacity: 0.5,
          }}
          aria-hidden="true"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9a8e7a"
            strokeWidth="0.8"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </div>
      </div>

      {/* Center content (empty for now) */}
      <div
        className="absolute bottom-0"
        style={{
          top: 48,
          left: 52,
          right: 220,
          padding: "48px 36px 40px 52px",
        }}
      />
    </div>
  );
}
