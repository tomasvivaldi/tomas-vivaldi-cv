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
     opacity-60 hover:opacity-100 sm:px-3 md:px-10 sm:space-y-2 md:space-y-4 mx-auto"
      style={{ width: "calc(100vw - 4rem)", maxWidth: "675px" }}
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

      <div className="font-extralight text-left md:text-center text-sm space-x-6 flex ml-2 sm:ml-6 text-gray-300">
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
        <AnimatePresence>
          {expanded && (
            <motion.div
              onClick={() => {
                console.log("clicked");
                setExpanded(!expanded);
              }}
              initial={{
                backgroundColor: "rgba(128, 128, 128, 0.8)",
                opacity: 1,
              }}
              animate={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                position: "absolute",
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 1,
                backgroundColor: "rgba(128, 128, 128, 0.8)",
                width: 36,
                height: 36,

                position: "absolute",
                transition: { duration: 0.2 },
              }}
              transition={{
                duration: 0.5,
              }}
              className="absolute right-0 top-0 rounded-lg w-9 h-9  md:w-12 md:h-12 
              backdrop-blur-md py-3 animate-none md:p-3 overflow-y-scroll scrollbar-none"
            >
              {expanded && (
                <AnimatePresence>
                  <motion.div
                    onClick={() => {
                      console.log("clicked");
                      setExpanded(!expanded);
                    }}
                    initial={{
                      y: -100,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: [0, 0, 0, 0.6, 1],
                      position: "sticky",
                      top: 0,
                      left: 0,
                    }}
                    exit={{
                      y: 100,
                      opacity: [0, 1, 0, 1],
                    }}
                    transition={{ duration: 1.5 }}
                  >
                    <div
                      className="text-left font-light text-base m-4 flex-col flex gap-6 md:gap-9 
              h-fit overflow-x-clip bg-transparent "
                    >
                      <h3 className="flex-nowrap justify-center md:mt-9 tracking-widest text-center text-lg -mx-2 font-semibold px-1 md:text-2xl">
                        What was I responsible for:
                      </h3>
                      <p className="md:text-xl indent-6 md:indent-9 text-justify mx-3 sm:mx-16">
                        {jobDescription1}
                      </p>
                      <p className="md:text-xl indent-6 md:indent-9 text-justify mx-3 sm:mx-16">
                        {jobDescription2}
                      </p>
                      <br />
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          animate={
            expanded
              ? {
                  display: "none",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }
              : {
                  backgroundColor: [
                    "rgba(0, 0, 0, 0.8)",
                    "rgba(128, 128, 128, 1)",
                  ],
                  opacity: [0, 0, 0, 0.3, 0.6, 1],
                  x: [0, 0, 10, -10, 1],
                  y: [0, 0, -10, 10, 1],
                }
          }
          onClick={() => {
            console.log("clicked");
            setExpanded(!expanded);
          }}
          initial={{
            backgroundColor: "rgba(128, 128, 128, 0.8)",
          }}
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.8,
          }}
          transition={{
            duration: 0.1,
          }}
          className="absolute  right-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-transparent"
        >
          <div
            className="absolute -z-0 right-0 top-0 rounded-lg w-12 h-12 sm:w-16 sm:h-16 
              backdrop-blur-md  py-3 animate-none md:p-3 bg-black/10 border-b border-l border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              className="w-7 h-7 sm:w-9 sm:h-9 absolute inset-0 m-auto "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>

            <div className="absolute bottom-0 left-0 h-4 w-4 m-1 border-b-2 border-l-2 border-b-black border-l-black" />
            <div className="absolute bottom-0 left-0 h-3 w-3 m-2 border-b-2 border-l-2 border-b-black border-l-black" />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
