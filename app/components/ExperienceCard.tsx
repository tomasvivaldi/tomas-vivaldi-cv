import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <article
      className="relative flex flex-col py-6 gap-3 rounded-lg items-center flex-shrink-0
    w-full  md:w-[600px] xl:w-[900px] snap-center bg-gray-400/20
     transition-opacity duration-200 overflow-hidden
     opacity-60 hover:opacity-100"
    >
      <img
        className="w-[320px] h-[120px] xl:w-[420px] xl:h-[200px] rounded-xl object-cover"
        src={img}
        alt="image"
      />
      <div className="px-3 md:px-10 space-y-4 mx-1">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="text-lg font-bold uppercase">{subtitle}</p>
        <div className="flex my-2 space-x-2 ml-2 flex-wrap">
          {techstack.map((tech, index) => (
            <a key={index} href={tech.url} target="_blank">
              <Image
                key={index}
                className=" rounded-xl w-[25px] h-[25px] m-1"
                src={tech.src}
                alt="image"
                width={25}
                height={25}
              />
            </a>
          ))}
        </div>
        <div className=" space-x-6 flex ml-6 text-gray-300">
          <p className=" font-extralight text-left">
            Started work: {startDate}
          </p>
          <p className=" font-extralight text-left">Ended: {endDate}</p>
        </div>

        <ul
          className="list-disc list-inside space-y-2 ml-6 
        text-base mx-auto my-0 text-left "
        >
          {summaries.map((summary, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: summary }}></li>
          ))}
        </ul>
      </div>
      <div
        className=" absolute group right-0 top-0 w-9 h-9 rounded-md bg-gray-300/[0.8] 
      backdrop-blur-sm animate-pulse hover:animate-none hover:h-full hover:w-full
       ease-in-out transition-all duration-500 md:m-3"
      >
        <div className=" group-hover:hidden absolute bottom-0 left-0 h-4 w-4  m-2 border-b-2 border-l-2 border-b-red-500 border-l-red-500" />
        <div className=" group-hover:hidden absolute bottom-0 left-0 h-3 w-3  m-3 border-b-2 border-l-2 border-b-red-500 border-l-red-500" />
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileHover={{
            y: 0,
            opacity: [0, 0, 0, 0.5, 1],
          }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="h-full w-full hidden group-hover:flex flex-col text-black gap-3"
        >
          <div
            className="hidden group-hover:flex text-left font-light
           text-base m-4 flex-col gap-8 h-full"
          >
            <h3
              className="hidden group-hover:flex flex-nowrap justify-center mt-9 tracking-widest text-center font-semibold  px-1
          text-2xl "
            >
              What was I responsible for:
            </h3>

            <p className="text-xl indent-9 text-justify">{jobDescription1}</p>
            <p className="text-xl indent-9 text-justify">{jobDescription2}</p>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default ExperienceCard;
