"use client";
import React from "react";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
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
