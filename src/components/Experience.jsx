"use client";
import { easeOut, motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Junior Frontend Developer Intern",
      company: "Stock Squares – Internship (Future ProgrammersInitiative)",
      period: "1/12/2024 - 1/5/2025",
      description:
        "Developed responsive and accessible user interfaces using React.js, ensuring cross-device compatibility and improved usability. Integrated RESTful APIs to dynamically render real-time user data and enhance interactivity. Optimized front-end performance to achieve faster load times and smoother user experience. Collaborated closely with cross-functional technical teams to ensure seamless system integration and project delivery.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Freelance Project – Medical Educational Platform",
      period: "20/7/2025 - 15/9/2025",
      description:
        "Developed a medical educational platform with an interactive dashboard for administrators to manage content and users. Implemented features allowing admins to add, edit, and delete books and courses, upload course cover images, and manage user accounts (ban/unban). Built responsive React.js pages to display books and courses dynamically using RESTful API endpoints from the backend. Enhanced user experience with smooth animations using Framer Motion and applied modern styling with Tailwind CSS.",
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      company: "Dragons Bootcamp",
      period: "5/8/2025 - Present",
      description:
        "Currently participating in a software engineering internship, gaining hands-on experience in modern development practices and collaborating with the technical team. Actively learning company workflows, codebase structure, and preparing to contribute to real-world projects using industry-standard tools and technologies.",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to timeline height
const timelineHeight = useTransform(scrollYProgress, [0, 2.4], ["80%", "150%"]);


  // Individual card component with its own intersection observer
  const TimelineCard = ({ exp, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { 
      once: true, 
    });

    return (
      <motion.div
        ref={cardRef}
        className="relative flex items-center justify-center mb-20"
        initial={{ 
          opacity: 0, 
          x: index % 2 === 0 ? -100 : 100,
          scale: 0.8
        }}
        animate={isInView ? { 
          opacity: 1, 
          x: 0,
          scale: 1
        } : {
          opacity: 0, 
          x: index % 2 === 0 ? -100 : 100,
          scale: 0.8
        }}
        transition={{ 
          duration: 0.8, 
          ease: easeOut,
          delay: 0.2
        }}
      >
        {/* Timeline Dot */}
        <motion.div
          className="absolute left-1/2 transform  -translate-x-1/2 z-10 hidden lg:block"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.4 }}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full shadow-lg shadow-orange-400/50">
            <motion.div 
              className="w-full h-full bg-white rounded-full"
              animate={isInView ? { 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.6
              }}
            />
          </div>
          {/* Outer ring */}
          <motion.div 
            className="absolute inset-0 w-6 h-6 border-4 border-orange-400/30 rounded-full hidden lg:block"

            animate={isInView ? {
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3]
            } : {}}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: 0.8
            }}
          />
        </motion.div>

        {/* Card Content */}
        <div
          className={`w-full lg:w-6/12 ${
            index % 2 === 0 
              ? "lg:mr-auto lg:pr-16 text-right md:text-right" 
              : "lg:ml-auto lg:pl-16 text-left md:text-left"
          }`}
        >
          <motion.div
            className="group relative"
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3, ease: easeOut }
            }}
          >
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl overflow-hidden">
              {/* Content */}
              <div className="relative z-10">
                {/* Period Badge */}
                <motion.div 
                  className={'mb-4 flex justify-end'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="text-orange-400 md:text-sm text-[10px] font-semibold bg-orange-400/20 px-4 py-2 rounded-full border border-orange-400/30">
                    {exp.period}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-white text-lg text-start md:text-2xl font-bold mb-3 group-hover:text-orange-300 transition-colors "
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {exp.title}
                </motion.h3>

                {/* Company */}
                <motion.h4 
                  className="text-orange-400 md:text-sm text-[10px] font-semibold mb-4 text-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {exp.company}
                </motion.h4>

                {/* Description */}
                <motion.p 
                  className="text-gray-300 leading-relaxed mb-6 md:text-sm text-[10px] text-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {exp.description}
                </motion.p>


              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-full blur-xl"></div>
              
              {/* Arrow pointing to timeline */}
              <div className={`absolute top-8 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-0 h-0 border-t-8 border-b-8 border-transparent ${index % 2 === 0 ? 'border-l-8 border-l-white/20' : 'border-r-8 border-r-white/20'}`}></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        className="mt-20 flex flex-col items-center justify-center mb-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <h1 className="text-white text-2xl font-merapro md:text-4xl font-bold mb-4 text-center">
          My Experience
        </h1>
        <div className="bg-orange-300 w-32 h-1.5 rounded-full"></div>
        <p className="text-gray-300 lg:text-sm text-[10px] mt-6 text-center max-w-2xl">
          A journey through my professional growth and the exciting projects
          I've been part of
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto relative " ref={containerRef}>
        {/* Animated Timeline Line - بدون background */}
        <motion.div 
          className="absolute hidden lg:block left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 via-pink-500 to-purple-500 rounded-full origin-top"
          style={{ height: timelineHeight }}
        />

        {/* Timeline Cards */}
        {experiences.map((exp, index) => (
          <TimelineCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>


    </div>
  );
}