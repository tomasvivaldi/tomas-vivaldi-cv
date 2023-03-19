"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { SocialIcon } from "react-social-icons";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:tms.vivaldi@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
    %0D%0A%0D%0A( sent by ${formData.email} )`;
  };

  return (
    <motion.div
      className="h-screen justify-between relative overflow-hidden flex flex-col text-center 
md:text-left  max-w-7xl md:px-10 
mx-auto items-center pt-6"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
    >
      <div className=" text-gray-400 uppercase flex flex-col gap-3">
        <h3 className="  tracking-[20px]  text-xl ">Contact Me</h3>
      </div>
      <div className="flex flex-col space-y-8 px-3">
        <h4 className=" text-3xl md:text-4xl font-semibold text-center">
          I have got just what you need.{"  "}
          <span className="underline decoration-2 underline-offset-4 decoration-red-500/50">
            Let's Talk
          </span>
        </h4>
        <div
          className="flex flex-col md:flex-row justify-between gap-12 md:gap-3
        order-2 md:order-1"
        >
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className=" text-red-500/50 h-7 w-7 animate-pulse" />
            <p className="text-base">+81 090-6653-9737</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className=" text-red-500/50 h-7 w-7 animate-pulse" />
            <p className="text-base">tms.vivaldi@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <SocialIcon
              className=" cursor-pointer animate-pulse h-7 w-7"
              network="linkedin"
              url="https://linkedin.com/in/tomas-vivaldi-89475619a"
              bgColor="transparent"
              fgColor="rgb(239 68 68 / 0.4)"
            />
            <p className="text-base">+123456789</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto "
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Messange"
            className="contactInput"
          />
          <button
            className="bg-red-500/50 py-5 px-10 rounded-md font-bold
          text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="h-1"></div>
    </motion.div>
  );
};

export default ContactMe;
