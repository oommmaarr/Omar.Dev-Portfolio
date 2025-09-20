"use client";
import React from "react";
import person from "../../public/person.svg";
import catching from "../../public/catch.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import TextType from "@/components/TextType";
import { useRouter } from "next/navigation";
export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Catching Elements - Right Side */}
      <motion.div 
        className="absolute md:-right-36 -right-12 md:top-0 top-10 transform z-5"
        initial={{ x: 200, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 0.8,
          y: [10, -40, 10]
        }}
        transition={{
          x: { duration: .6, ease: "easeOut" },
          opacity: { duration: .6, ease: "easeOut" },
          y: { 
            duration: 3, 
            ease: "easeInOut", 
            delay: 1
          }
        }}
      >
        <Image
          src={catching}
          alt="catching elements1"
          className="xl:w-full md:w-[300px] w-[100px] h-auto"
          loading="lazy"
        />
      </motion.div>

      {/* Catching Elements - Left Side */}
      <motion.div 
        className="absolute md:-left-36 -left-11 -rotate-[100deg] md:-bottom-40 -bottom-5 transform z-5"
        initial={{ x: -200, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 0.8,
          y: [10, -40, 10]
        }}
        transition={{
          x: { duration: .6, ease: "easeOut"},
          opacity: { duration: .6, ease: "easeOut"},
          y: { 
            duration: 3, 
            ease: "easeInOut", 
            delay: 1
          }
        }}
      >
        <Image
          src={catching}
          alt="catching elements2"
          className="xl:w-full md:w-[300px] w-[100px] h-auto transform scale-x-[-1]"
          loading="lazy"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:mt-0  mt-32 lg:flex-row items-center lg:items-center justify-center lg:justify-between mx-auto lg:min-h-[80vh] min-h-screen px-8 md:px-16 2xl:w-5/6">
        {/* Left Side - Text Content */}
        <motion.div 
          className="flex-1 text-white max-w-xl lg:max-w-none w-full h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-lg md:text-xl mb-4 text-white">
            Hey, I am
            
          </h2>
          <h1 className="2xl:text-6xl lg:text-4xl md:text-5xl  text-4xl font-semibold mb-6 leading-tight ">
            Omar Madkour
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center">
          <p className="text-2xl font-bold">And I am a {" "}</p>
          <TextType 
            text={["Frontend Developer", "Web Developer", "Happy coding!"]}
            className="font-merapro sm:ml-2 mt-2 sm:mt-0"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
          />
        </div>
          <p className="text-gray-300 xl:text-lg lg:text-sm md:text-xl text-sm mb-8 mt-5 ">
            Creating innovative digital solutions with modern technologies and
            creative design approaches.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.button 
              className="bg-orange-600 hover:bg-orange-700 transition-colors px-8 py-3 rounded-lg font-semibold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>router.push('/ContactMe')}
            >
            
              Get In Touch
            </motion.button>
            <motion.button 
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition-all px-8 py-3 rounded-lg font-semibold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <a href="/Omar-Mohammed.pdf" download={true}> Download Resume</a>
            </motion.button>
          </div>
          <hr className="w-full lg:mt-5  mt-10 h-2 bg-white border-0 opacity-25 rounded" />
        </motion.div>

        {/* Right Side - Person SVG with icons and circular lines */}
        <motion.div 
          className="flex-1 flex justify-end items-end relative h-screen"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <div className="relative">
            <div className="flex items-center justify-center">
              <Image
                src={person}
                alt="Omar - Web Developer"
                className="lg:w-10/12  w-full h-auto z-20 relative "
                priority
              />
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-[750px] h-[750px] border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1 opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border-2 border-white rounded-full transform -translate-x-1/2 translate-y-1/6 opacity-50"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}