import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Backdrop from "./Backdrop";

interface Props {
  img: string;
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  techstack: { src: string; url: string }[];
  summaries: string[];
  jobDescription1: string;
  jobDescription2: string;
}

const ExperienceCard = ({
  img,
  title,
  subtitle,
  startDate,
  endDate,
  techstack,
  summaries,
  jobDescription1,
  jobDescription2,
}: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(
      Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
    );
  }, []);

  return (
    <motion.article
      className="relative flex flex-col py-3  gap-3 rounded-lg items-center flex-shrink-0 
       max-w-[100px] h-full md:w-[600px] xl:w-[700px] snap-center bg-gray-400/20
     transition-opacity duration-200 overflow-hidden px-3  
     opacity-60 hover:opacity-100  sm:px-3 md:px-10 sm:space-y-2 md:space-y-4 mx-auto"
      style={{ width: "calc(100vw - 4rem)", maxWidth: "800px" }}
    >
      <img
        className="w-[320px] h-[120px] xl:w-[400px] xl:h-[180px] rounded-xl object-cover"
        src={img}
        alt="image"
      />

      <h4 className="text-lg md:text-4xl font-light">{title}</h4>
      <p className="text-md font-bold uppercase">{subtitle}</p>

      {isMobile ? (
        <div className="flex my-1 ml-2 space-x-2 mx-auto justify-center flex-wrap">
          {techstack.map((tech, index) => (
            <Image
              key={index}
              className="rounded-xl items-center justify-center w-[25px] h-[25px] my-1 ml-1 mr-1"
              src={tech.src}
              alt="image"
              width={25}
              height={25}
            />
          ))}
        </div>
      ) : (
        <div className="flex my-2 space-x-2 ml-2 flex-wrap">
          {techstack.map((tech, index) => (
            <a key={index} href={tech.url} target="_blank">
              <Image
                key={index}
                className="rounded-xl w-[25px] h-[25px] m-1"
                src={tech.src}
                alt="image"
                width={25}
                height={25}
              />
            </a>
          ))}
        </div>
      )}

      <div className="font-extralight text-left text-sm space-x-6 flex ml-2 sm:ml-6 text-gray-300">
        <p className="">Start: {startDate}</p>
        <p className="">End: {endDate}</p>
      </div>

      <ul
        className="list-disc list-inside space-y-2 ml-2 sm:ml-6 
        text-base mx-auto my-0 text-left "
      >
        {summaries.map((summary, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: summary }}></li>
        ))}
      </ul>

      <div>
        {expanded ? (
          <motion.div
            onClick={() => {
              console.log("clicked");
              setExpanded(!expanded);
            }}
            transition={{ duration: 1.5 }}
          >
            <div
              className="absolute group py-3 right-0 top-0 rounded-lg bg-black/[0.8] backdrop-blur-lg 
            animate-none min-h-full h-full w-full ease-in-out transition-all duration-500 md:p-3
            overflow-y-scroll scrollbar-thin"
            >
              <div
                className="text-left font-light text-base m-4 flex-col flex gap-6 md:gap-9 
              h-fit overflow-x-clip"
              >
                <h3 className="flex-nowrap justify-center md:mt-9 tracking-widest text-center text-lg -mx-2 font-semibold px-1 md:text-2xl">
                  What was I responsible for:
                </h3>
                <p className="md:text-xl indent-6 md:indent-9 text-justify mx-3 md:mx-16">
                  {jobDescription1}
                </p>
                <p className="md:text-xl indent-6 md:indent-9 text-justify mx-3 sm:mx-16">
                  {jobDescription2}
                </p>
                <br />
              </div>
            </div>
          </motion.div>
        ) : (
          <div
            onClick={() => {
              console.log("clicked");
              setExpanded(!expanded);
            }}
            className="absolute group right-0 top-0 w-9 h-9 rounded-md bg-gray-400/[0.8] backdrop-blur-md animate-pulse ease-in-out transition-all duration-500 md:m-3"
          >
            <div className="absolute bottom-0 left-0 h-4 w-4 m-2 border-b-2 border-l-2 border-b-red-500 border-l-red-500" />
            <div className="absolute bottom-0 left-0 h-3 w-3 m-3 border-b-2 border-l-2 border-b-red-500 border-l-red-500" />
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
