"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { ExperienceCardData } from "../data/ExperienceCardData";

export default function WorkExperience() {
  return (
    <motion.div
      className="h-[calc(100vh - 3rem)] overflow-hidden flex flex-col text-center
      md:text-left  w-full md:px-10 justify-evenly relative
      mx-auto items-center pt-6"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="uppercase tracking-[10px] sm:tracking-[20px] text-gray-400 mx-auto w-min text-center text-base sm:text-xl lg:text-2xl ">
        Experience
      </h3>

      <div
        className="w-full h-[580px] md:h-[650px] flex space-x-5 md:space-x-10 overflow-x-scroll overflow-y-hidden
       px-10 py-4 my-6 snap-x snap-mandatory scrollbar-thin
       scrollbar-track-gray-400/20 scrollbar-thumb-red-500/50
        "
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
