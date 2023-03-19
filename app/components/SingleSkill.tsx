"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  percentage: string;
  img: string;
}

const SingleSkill = ({ percentage, img }: Props) => {
  return (
    <motion.div className="group relative flex cursor-pointer">
      <Image
        alt="image"
        width={55}
        height={55}
        src={img}
        className=" border border-gray-500 rounded-full object-fill 
        w-[50px] md:w-[65px] h-[50px] md:h-[65px] xl:w-[70px] xl:h-[70px] filter group-hover:grayscale
        transition duration-200 ease-in-out m-1 "
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition 
      duration-200 ease-in-out group-hover:bg-white w-[50px] md:w-[65px] h-[50px] md:h-[65px] xl:w-[70px] xl:h-[70px] 
      rounded-full z-0 m-1"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-base font-bold text-black opacity-100">
            {percentage}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleSkill;
