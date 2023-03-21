import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
  // children: React.ReactNode;
  onClick: () => void;
};

const Backdrop = ({ onClick }: Props) => {
  return (
    <motion.div
      className="absolute z-20 top-0 left-0 h-screen w-screen bg-white/80 
      items-center justify-center opacity-100"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
    >
      {/* {children} */}
    </motion.div>
  );
};

export default Backdrop;
