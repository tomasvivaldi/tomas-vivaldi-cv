"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      className="h-[700px] relative flex flex-col text-center 
      max-w-7xl px-10 
    mx-auto items-center gap-6 md:gap-20 pt-[55px] sm:pt-16"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="flex  uppercase tracking-[20px] text-center text-gray-400 text-xl lg:text-2xl ">
        About
      </h3>
      <div className="flex flex-col gap-6  md:flex-row ">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src="/images/about1.jpg"
          alt="About Picture"
          className=" md:mb-0 flex-shrink-0 object-cover w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] 
            rounded-full md:w-[300px] md:h-[400px] md:rounded-2xl self-center "
        ></motion.img>
        <div className="flex flex-col justify-evenly">
          <div className=" space-y-5 px-0 md:px-10">
            <h4 className="text-3xl text-left font-semibold">
              Here is a{" "}
              <span className=" underline-offset-4 underline decoration-red-500/50">
                Little
              </span>{" "}
              Background
            </h4>
            <p className=" text-xs sm:text-sm text-justify">
              I'm Tomas Vivaldi, a software developer with over 4 years of
              experience in the field. I have developed my expertise in a number
              of programming languages over the course of my career, including
              Python, JavaScript, TypeScript, and SQL, among others.
              Having worked on a variety of projects ranging from front-end web
              development to software logic development. I take great
              satisfaction in my ability to work well with cross-functional
              teams and explain difficult technical topics to non-technical
              stakeholders. I have expertise working with customers and other
              involved parties to ensure that project goals are reached and
              expectations are exceeded from my work at both smaller start-ups
              and renowned organizations like Bosch Japan. I take part in online
              coding contests and hackathons since I'm constantly looking for
              new challenges and educational opportunities.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
