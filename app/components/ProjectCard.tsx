import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectCardData from "../data/ProjectCardData";
import Link from "next/link";

interface Props {
  img: string;
  projectName: string;
  description: string;
  index: number;
  link: string;
}

const ProjectCard = ({ img, projectName, description, index, link }: Props) => {
  return (
    <div
      className="mx-auto flex-shrink-0 snap-center w-fit h-fit
        flex flex-col space-y-5 items-center justify-center
         min-h-[700px] pb-8"
    >
      <Link href={link} target="_blank">
        <Image
          className="h-[337.5px] w-[600px] rounded-lg shadow-lg"
          src={img}
          alt="image"
          width={1920}
          height={1080}
        />
      </Link>

      <div className="space-y-6 px-0 md:px-10 max-w-6xl">
        <h4 className=" text-2xl text-center font-semibold">
          <span className=" underline underline-offset-4 decoration-red-500/50 decoration-2">
            Recent project {index + 1} of {ProjectCardData.length}:
          </span>{" "}
          {projectName}
        </h4>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
