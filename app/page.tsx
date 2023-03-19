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

      <section id="hero" className=" snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className=" snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className=" snap-center">
        <Skills />
      </section>

      {/* copywrite  */}
      {/* <section id="projects" className=" snap-center">
        <Projects />
      </section> */}

      <section id="contactme" className=" snap-center">
        <ContactMe />
      </section>
    </div>
  );
}
