"use client";
import { motion } from "framer-motion";
import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/javascript.png";
import react from "../../public/react.png";
import git from "../../public/git.png";
import vscode from "../../public/visual-studio-code.png";
import vs from "../../public/visual-studio.png";
import github from "../../public/github.png";
import nextjs from "../../public/icons8-nextjs-48.png";
import bootstrap from "../../public/bootstrap-framework.png";
import ts from "../../public/typescript.png";
import tailwind from "../../public/tailwind.png";
import nodejs from "../../public/nodejs.png";
import redux from "../../public/icons8-redux-24.png";
import postman from "../../public/postman.svg";
import Image from "next/image";

export default function ShowSkills() {
  const skills = [
    { name: "HTML", icon: html, color: "#E34F26" },
    { name: "CSS", icon: css, color: "#1572B6" },
    { name: "JAVASCRIPT", icon: js, color: "#F7DF1E" },
    { name: "REACT JS", icon: react, color: "#61DAFB" },
    { name: "TAILWIND", icon: tailwind, color: "#F05032" },
    { name: "TYPESCRIPT", icon: ts, color: "#F05032" },
    { name: "GITHUB", icon: github, color: "#F05032" },
    { name: "GIT", icon: git, color: "#F05032" },
    { name: "NEXT JS", icon: nextjs, color: "#F05032" },
    { name: "BOOTSTRAP", icon: bootstrap, color: "#F05032" },
    { name: "VS CODE", icon: vscode, color: "#F05032" },
    { name: "VS", icon: vs, color: "#F05032" },
    { name: "Node Js", icon: nodejs, color: "#F05032" },
    { name: "Redux", icon: redux, color: "#F05032" },
    { name: "Postman", icon: postman, color: "#F05032" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
<div className="font-sans flex-col mt-40 overflow-hidden min-h-screen flex items-center justify-start px-8 w-full h-auto">
      {/* Title Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-white text-2xl font-merapro md:text-4xl  font-bold ">
          What I do
        </h1>
        <div className="bg-orange-300  w-24 mt-2 h-1 "></div>
        <p className="text-gray-300 lg:text-sm  font-serif text-[10px]  mt-5 w-full mx-auto leading-relaxed">
           I am doing Bachelor's in Computer Science and I will
          graduate in the year 2026. I am Front-End Developer and currently
          working as a Freelancer.
        </p>
      </motion.div>

      {/* Skills Container */}
      <motion.div
        className="flex w-full items-center xl:flex-row flex-col justify-center gap-8 mt-10 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Skills Text */}
        <motion.div className="flex items-center justify-center" variants={titleVariants}>
          <div className="flex xl:flex-row  flex-col items-center justify-center text-center ">
          <h2
            className="text-white text-2xl font-merapro md:text-4xl xl:mr-3 font-bold tracking-wider xl:rotate-180  xl:[writing-mode:vertical-rl]"
          >
            Skills
          </h2>
          <div className="bg-orange-300 xl:w-1 xl:h-20 w-24 h-1 mt-2 xl:mr-7"></div>
          </div>
        </motion.div>

       <div className="flex justify-center items-center gap-20">
        {/* Vertical Separator */}
        <div className="w-px h-32  bg-orange-100 md:flex hidden"></div>

        {/* Skills Icons Grid */}
        <motion.div
          className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 md:w-full w-[280px]  gap-12 md:gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group flex flex-col md:mb-0  mb-3 items-center  justify-center md:p-6 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 cursor-pointer border border-gray-700/50"
              variants={skillVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-16 h-16 mb-3 flex items-center justify-center"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-white text-xs font-medium text-center group-hover:text-orange-300 transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Separator */}
        <div className="w-px h-32 bg-orange-100 md:flex hidden"></div>
        </div>
      </motion.div>

    </div>
  );
}
