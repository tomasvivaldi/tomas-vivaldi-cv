import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] h-screen text-white snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar
     scrollbar-track-gray-400/20 scrollbar-thumb-red-500/50 "
    >
      <Head>
        <title>Tomas' Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="  snap-normal">
        <Hero />
      </section>
      <div className="h-[25px] w-full" />
      <section id="about" className="  snap-normal">
        <About />
      </section>
      <div className="h-[25px] w-full" />
      <section id="experience" className="  snap-normal">
        <WorkExperience />
      </section>
      <div className="h-[25px] w-full" />
      <section id="skills" className="  snap-normal">
        <Skills />
      </section>
      <div className="h-[25px] w-full" />
      {/* copywrite  */}
      {/* <section id="projects" className="  snap-normal">
        <Projects />
      </section> 
      <div className="h-[25px] w-full" />*/}
      <section id="contactme" className="  snap-normal">
        <ContactMe />
      </section>
      <section id="copyright">
        <p className=" text-center text-xs mb-6 text-gray-500">
          © Tomas Vivaldi 2023. All Rights Reserved
        </p>
      </section>
    </div>
  );
}
