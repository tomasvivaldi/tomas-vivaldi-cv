// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import ProjectCardData from "../data/ProjectCardData";

// interface Props {
//   img: string;
//   projectName: string;
//   description: string;
//   index: number;
// }

// const ProjectCard = ({ img, projectName, description, index }: Props) => {
//   return (
//     <div
//       className="w-screen flex-shrink-0 snap-center
//         flex flex-col space-y-5 items-center justify-center
//         p-6 md:p-12 xl:p-16 h-[700px]"
//     >
//       <Image
//         className="h-[200px] w-[300px]"
//         src={img}
//         alt="image"
//         width={200}
//         height={300}
//       />
//       <div className="space-y-6 px-0 md:px-10 max-w-6xl">
//         <h4 className=" text-2xl text-center font-semibold">
//           <span className=" underline underline-offset-4 decoration-red-500/50 decoration-2">
//             Case study {index + 1} of {ProjectCardData.length}:
//           </span>{" "}
//           {projectName}
//         </h4>
//         <p className="">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
