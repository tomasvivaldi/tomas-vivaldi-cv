"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const RING_CIRCUMFERENCE = 2 * Math.PI * 38;

export default function ContactMe() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[var(--bg)] py-24 overflow-visible"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          aria-hidden="true"
        >
          <motion.circle
            cx="40"
            cy="40"
            r="38"
            stroke="var(--ink-mute)"
            strokeWidth="1"
            strokeDasharray={RING_CIRCUMFERENCE}
            initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.svg>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[52px_2fr_3fr] gap-0 relative">
          <div className="hidden lg:block" />

          <motion.div variants={childVariants} className="relative">
            <motion.span
              aria-hidden="true"
              className="absolute top-0 left-0 select-none pointer-events-none leading-none text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "clamp(180px, 22vw, 340px)",
                opacity: 0,
              }}
              animate={{ opacity: 0.03 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              VI
            </motion.span>

            <div className="relative z-10">
              {/* Left column content — Task 4 */}
            </div>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="relative mt-12 lg:mt-0"
          >
            <span
              aria-hidden="true"
              className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "10px",
                fontStyle: "italic",
                color: "var(--ink-pale)",
              }}
            >
              35.6762° N
            </span>

            {/* Form — Task 5 */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
