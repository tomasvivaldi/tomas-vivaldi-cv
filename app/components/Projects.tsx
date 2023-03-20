// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import ProjectCard from "./ProjectCard";
// import ProjectCardData from "../data/ProjectCardData";

// type Props = {};

// export default function WorkExperience({}: Props) {
//   return (
//     <motion.div
//       className="h-[700px] justify-evenly relative overflow-hidden flex flex-col text-center
// md:text-left  max-w-7xl md:px-10
// mx-auto items-center pt-16"
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//       }}
//       transition={{ duration: 1.5 }}
//     >
//       <div className=" text-gray-400 uppercase flex flex-col gap-3">
//         <h3 className="  tracking-[20px]  text-xl ">Projects</h3>
//         <p className=" text-xs tracking-[4px]">
//           Hover over a skill to see proficiency
//         </p>
//       </div>
//       <div
//         className="relative w-full flex overflow-x-scroll overflow-y-hidden
//        snap-x snap-mandatory z-20 scrollbar-thin
//        scrollbar-track-gray-400/20 scrollbar-thumb-red-500/50"
//       >
//         {ProjectCardData.map((project, i) => (
//           <ProjectCard
//             key={i}
//             img={project.img}
//             projectName={project.name}
//             description={project.description}
//             index={i} // pass i as a prop
//           />
//         ))}
//       </div>
//       <div className="w-full absolute top-[30%] bg-red-500/20 h-[400px] left-0 -skew-y-12" />
//     </motion.div>
//   );
// }
