import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";

import { EvervaultCard } from "./components/aceternity/Hover";

import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import { HighlightedProjects } from "./components/aceternity/HighlightedProjects";
import { link } from "fs";
import ProductParallax from "./components/aceternity/ProductParalax";
import { TextGenerate } from "./components/aceternity/TextGenerate";

const inter = Inter({ subsets: ["latin"] });
const projects = [
  {
    title: "80K View",
    link: "https://app.80kview.com/",
    thumbnail: "/images/projects/View80K.png",
  },
  {
    title: "80K View",
    link: "https://app.80kview.com/",
    thumbnail: "/images/projects/View80K.png",
  },
  {
    title: "80K View",
    link: "https://app.80kview.com/",
    thumbnail: "/images/projects/View80K.png",
  },
];

export default function Home() {
  return (
    <div className="-z-50 bg-[rgb(19,19,19)] text-white w-full">
      <Head>
        <title>Tomas' Portfolio</title>
      </Head>

      <Header />
      <EvervaultCard>
        <section id="hero" className=" relative min-h-screen   snap-normal">
          <Hero />
        </section>
        <section id="about" className="my-24 md:my-64 mb-10 snap-normal">
          <TextGenerate
            words={
              "I specialize in crafting immersive digital experiences as an independent consultant, holding the belief that every project presents a unique opportunity to deliver great digital products and create strong relationships."
            }
          />
        </section>
        <section id="about" className="  snap-normal">
          <About />
        </section>
      </EvervaultCard>

      <section id="experience" className="  snap-normal">
        <WorkExperience />
      </section>

      <section id="projects" className="  snap-normal">
        {/* <Projects /> */}
        <ProductParallax />
      </section>
      <div className="h-[25px] w-full" />

      <section id="skills" className="  snap-normal">
        <Skills />
      </section>
      <div className="h-[25px] w-full" />
      <section id="contactme" className="  snap-normal">
        <ContactMe />
      </section>

      <section id="copyright">
        <p className=" text-center text-xs mb-6 text-gray-500 py-2">
          © Tomas Vivaldi 2023. All Rights Reserved
        </p>
      </section>
    </div>
  );
}
