"use client";

import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import BackgroundCircles from "../BackgroundCircles";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const EvervaultCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "-z-0 p-0.5 relative bg-transparent aspect-square h-[300vh] flex w-full   overflow-hidden",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="z-10 group/card w-full absolute overflow-hidden bg-transparent flex items-center justify-center"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />

        <div className="relative z-10 ">
          {children}
          {/* <span className="dark:text-white text-black z-20">{text}</span> */}
          {/* <div className="relative h-[650px] flex flex-col items-center justify-center text-center  overflow-visible">
              <BackgroundCircles />
              <div className=" absolute top-12 md:top-0 md:static space-y-6 ">
                <Image
                  src="/images/pfp1.jpg"
                  alt="Profile Picture"
                  height={6000}
                  width={4000}
                  className="relative h-[170px] w-[170px] rounded-full mx-auto object-cover"
                ></Image>
                <div className=" flex flex-col gap-3">
                  <h1 className="order-2 text-5xl lg:text-6xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="#FF0000" />
                  </h1>
                  <h2 className="order-1 w-full text-xs md:text-sm text-center text-gray-400 tracking-[15px] m-2">
                    Software Engineer
                  </h2>

                  <div className="z-10 order-3 pt-3 flex flex-col md:flex-row gap-[15px] sm:gap-6 flex-nowrap">
                    <a href="#about">
                      <button className="heroButton">About</button>
                    </a>
                    <a href="#experience">
                      <button className="heroButton">Experience</button>
                    </a>
                    <a href="#projects">
                      <button className="heroButton">Projects</button>
                    </a>
                    <a href="#skills">
                      <button className="heroButton">Skills</button>
                    </a>
                    <a href="https://blog.tomasvivaldi.com">
                      <button className="heroButton">Blog</button>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0  -z-10 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
    </div>
  );
}

export function StringPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0  -z-10 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500/80 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0  opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
