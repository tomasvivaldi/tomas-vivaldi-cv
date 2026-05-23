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
      {/* ③ Ghost 01 */}
      <span
        aria-hidden="true"
        className="hidden md:block font-[family-name:var(--font-cormorant)] absolute pointer-events-none select-none"
        style={{
          top: 36,
          left: "48%",
          fontWeight: 300,
          fontSize: 340,
          color: "var(--ink)",
          opacity: 0.035,
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        01
      </span>
      {/* ④ Floating MMXXVI */}
      <span
        className="font-[family-name:var(--font-cormorant)] italic absolute md:bottom-[88px] bottom-[64px] md:left-[310px] left-6 md:text-[12px] text-[11px]"
        style={{
          color: "var(--ink-pale)",
          letterSpacing: "0.12em",
        }}
      >
        MMXXVI
      </span>
      {/* ⑤ Sideways role label */}
      <span
        aria-hidden="true"
        className="hidden md:block font-[family-name:var(--font-dm-mono)] uppercase absolute lg:right-[228px] right-3"
        style={{
          top: 72,
          transform: "rotate(90deg)",
          transformOrigin: "right top",
          fontSize: 8,
          letterSpacing: "0.22em",
          color: "var(--ink-pale)",
          whiteSpace: "nowrap",
          opacity: 0.75,
        }}
      >
        Software Engineer
      </span>
      {/* Margin annotation */}
      <span
        className="hidden md:block font-[family-name:var(--font-cormorant)] italic absolute whitespace-nowrap"
        style={{
          bottom: 128,
          right: 238,
          fontSize: 10,
          color: "var(--accent)",
          opacity: 0.65,
        }}
      >
        † first in JP
      </span>
      {/* ⑦ Index card */}
      <div
        className="absolute md:bottom-[-16px] bottom-2 md:left-[100px] left-4 md:right-auto right-4 md:w-[230px] w-auto"
        style={{
          background: "var(--surface)",
          border: "1px solid rgba(28,24,16,0.1)",
          padding: "13px 16px",
          boxShadow: "3px 3px 0 rgba(28,24,16,0.05)",
          zIndex: 2,
        }}
      >
        <div
          className="font-[family-name:var(--font-dm-mono)] uppercase"
          style={{
            fontSize: 7.5,
            letterSpacing: "0.2em",
            color: "var(--ink-mute)",
            marginBottom: 5,
          }}
        >
          Current
        </div>
        <div
          className="font-[family-name:var(--font-dm-sans)]"
          style={{
            fontWeight: 300,
            fontSize: 11,
            color: "var(--ink-soft)",
            lineHeight: 1.5,
          }}
        >
          Founding Member · Arkhon Tech
        </div>
        <div
          className="font-[family-name:var(--font-dm-sans)]"
          style={{
            fontWeight: 300,
            fontSize: 10.5,
            color: "var(--ink-mute)",
            marginTop: 2,
          }}
        >
          Tokyo, Japan
        </div>
      </div>
      {/* ⑥ Ring crossing center/image boundary */}
      <svg
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none"
        style={{
          right: 210,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
      >
        <circle cx="64" cy="64" r="60" stroke="#1c1810" strokeWidth="0.6" opacity="0.1" />
        <circle cx="64" cy="64" r="46" stroke="#1c1810" strokeWidth="0.6" opacity="0.1" />
        <circle cx="64" cy="64" r="32" stroke="#1c1810" strokeWidth="0.6" opacity="0.1" />
        <circle cx="64" cy="64" r="18" stroke="#1c1810" strokeWidth="0.6" opacity="0.1" />
      </svg>
      {/* ⑧ Bottom boundary ring */}
      <svg
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: -18,
          left: "38%",
        }}
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
      >
        <circle cx="22" cy="22" r="20" stroke="#1c1810" strokeWidth="0.6" opacity="0.12" />
        <circle cx="22" cy="22" r="12" stroke="#1c1810" strokeWidth="0.6" opacity="0.12" />
      </svg>
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

      {/* Center content */}
      <div
        className="absolute bottom-0 flex flex-col justify-center md:left-[52px] left-0 md:right-0 lg:right-[220px] right-0 md:px-9 px-6 md:py-12 py-10"
        style={{ top: 48 }}
      >
        <h1
          className="font-[family-name:var(--font-cormorant)] mb-7"
          style={{
            lineHeight: 0.88,
            marginLeft: "var(--name-bleed, -88px)",
          }}
        >
          <span
            className="block"
            style={{
              fontWeight: 300,
              fontSize: "var(--name-size, 96px)",
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}
          >
            Tomas
          </span>
          <span
            className="block italic"
            style={{
              fontWeight: 300,
              fontSize: "var(--name-size, 96px)",
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              marginLeft: "var(--name-offset, 48px)",
            }}
          >
            Vivaldi
          </span>
        </h1>
        <p
          className="font-[family-name:var(--font-dm-sans)]"
          style={{
            fontSize: 12.5,
            fontWeight: 300,
            color: "var(--ink-soft)",
            lineHeight: 1.65,
            maxWidth: 300,
          }}
        >
          Full-stack engineer · Blockchain · Game Systems · UI/UX
          <br />
          <em
            className="font-[family-name:var(--font-cormorant)]"
            style={{
              fontStyle: "italic",
              color: "var(--ink-pale)",
              fontSize: 13,
            }}
          >
            Based in Tokyo&nbsp;
            <sup style={{ color: "var(--accent)", verticalAlign: "baseline" }}>†</sup>
          </em>
        </p>
      </div>
    </div>
  );
}
