"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerate = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white font-extralight opacity-0 "
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4 flex justify-start px-20">
        <div
          className=" mx-auto sm:mx-0 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl  w-full text-slate-100 text-2xl sm:text-3xl md:text-4xl leading-snug tracking-widest px-4 sm:px-12
         "
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
