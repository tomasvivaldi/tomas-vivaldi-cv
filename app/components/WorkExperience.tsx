"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { ExperienceCardData } from "../data/ExperienceCardData";
("");
import style from "./WorkExperience.module.css";

export default function WorkExperience() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <motion.div
      className={style.Wrapper}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <div className={style.title}>
        <h3>Experience</h3>
      </div>

      <div
        className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden
       px-10 py-4 snap-x snap-mandatory scrollbar-thin
       scrollbar-track-gray-400/20 scrollbar-thumb-red-500/50 "
      >
        {ExperienceCardData.map((el, index) => (
          <ExperienceCard
            key={index}
            img={el.img}
            title={el.title}
            subtitle={el.subtitle}
            startDate={el.startDate}
            endDate={el.endDate}
            techstack={el.techstack}
            summaries={el.summaries}
            jobDescription1={el.jobDescription1}
            jobDescription2={el.jobDescription2}
          />
        ))}
      </div>
    </motion.div>
  );
}
