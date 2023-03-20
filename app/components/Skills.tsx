"use client";
import React from "react";
import { motion } from "framer-motion";
import SingleSkill from "./SingleSkill";
import { SkillsData } from "../data/SkillsData";

type Props = {
  directionLeft?: boolean;
};

export default function ({ directionLeft }: Props) {
  return (
    <motion.div
      className="h-[700px] relative overflow-hidden
       flex flex-col text-center md:text-left  max-w-7xl md:px-10 
mx-auto items-center pt-[55px] sm:pt-16 lg:gap-16"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
    >
      <div className=" text-gray-400 uppercase flex flex-col gap-1">
        <h3 className="  tracking-[20px] text-center text-xl ">Skills</h3>
        <p className=" text-xs tracking-[4px]">
          Hover over a skill to see proficiency
        </p>
      </div>

      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className=" h-fit my-auto mx-4 grid grid-cols-5 gap-3 md:gap-10 place-items-center"
      >
        {SkillsData.map((el, index) => (
          <SingleSkill key={index} percentage={el.percentage} img={el.img} />
        ))}
      </motion.div>
      <div></div>
    </motion.div>
  );
}
