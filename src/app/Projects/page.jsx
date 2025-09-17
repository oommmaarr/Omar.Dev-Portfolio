"use client";
import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "A-Syndrome Platform",
      description:
        "Developed a responsive React platform for medical students featuring light/dark mode, and dedicated pages for courses and books. The admin dashboard provides analytics and full management of users, books, and courses, seamlessly integrated with a RESTful API backend.",
      image: "/asyndrome.png",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "#https://asyndrome.vercel.app/home",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Store",
      description:
        "This site is considered one of the most powerful sites for the commercial sale of clothes, as it contains a display window for clothes and is available for logging in with a specific number of subscribers to the site. There is a window to complete the purchase process. The site also supports response on the phone and PC.",
      image: "/ecommerce.png",
      technologies: ["Vanilla JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "AI Chat App with Google Gemini API",
      description:
        "Developed a real-time AI-powered chat app using React and Google Generative AI (Gemini API). Implemented Context API for state management, typing animation effect, dynamic response formatting, and support for multiple chat sessions.",
      image: "/GeminiClone.png",
      technologies: ["React.js", "Framer Motion", "Vercel", "Pure CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Gaming Paradise",
      description:
        "A modern, responsive gaming store website built with Tailwind CSS and HTML5, featuring a sleek glass-morphism design with neon color scheme. The website showcases gaming laptops and accessories with an elegant user interface optimized for both desktop and mobile devices.",
      image: "/gamingShop.png",
      technologies: ["Tailwind CSS", "HTML5"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Traveling Website",
      description:
        "This site talks about the best and most beautiful places that a person can visit around the world, and this site contains a special login window for the site.",
      image: "/Travel.png",
      technologies: ["HTML", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Parallax Scrolling Landing Page",
      description:
        "Built an interactive landing page using HTML, CSS, and Vanilla JavaScript with smooth parallax scrolling effects. Implemented dynamic background gradients, animated elements on scroll, and responsive design for an engaging user experience.",
      image: "/AdvJs.png",
      technologies: ["HTML", "CSS", "Vanilla JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 7,
      title: "Todo App",
      description:
        "A responsive and interactive task manager where users can add, complete, delete, and filter todos (All / Active / Completed), clear completed tasks, and switch between light & dark mode. The app adapts to all screen sizes and includes hover states for a smooth user experience.",
      image: "/todo.webp",
      technologies: ["React.js", "Vite", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 8,
      title: "Conference Ticket Generator",
      description:
        "A responsive and accessible app to generate personalized tickets. Includes form validation, keyboard-only navigation, screen reader support, and light hover/focus interactions. Optimized for all screen sizes.",
      image: "/GenerateTicket.png",
      technologies: ["Vanilla JavaScript", "HTML", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 9,
      title: "Redux Counter & Calculator",
      description:
        "An interactive React and Redux application that combines a counter and a calculator in a single interface. Users can increase or decrease the counter, increment it by a specific value, and perform essential arithmetic operations such as addition, subtraction, multiplication, and division. The app features a modern, responsive design with smooth animations, gradient styling, and full RTL/Arabic support, delivering a polished and professional user experience.",
      image: "/redux-calc.png",
      technologies: ["React.js", "(Redux) State Management", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 10,
      title: "Product list with cart",
      description:
        "A responsive shopping cart interface where users can add or remove items, adjust item quantities, confirm their order through a modal, and reset selections to start a new order. The design adapts to all screen sizes and includes smooth hover and focus states for an interactive user experience.",
      image: "/ProductList.jpg",
      technologies: ["React.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 11,
      title: "Browser extensions manager UI",
      description:
        "A responsive interface that lets users toggle extensions on or off, filter by active or inactive state, remove extensions, and customize the color theme. The app is optimized for all screen sizes with clear hover and focus interactions for a smooth user experience.",
      image: "/extensionManager.jpg",
      technologies: ["Vanilla JavaScript", "HTML", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 12,
      title: "Fylo landing page with two column layout",
      description:
        "I built a responsive landing page that adapts seamlessly to different screen sizes, ensuring an optimal user experience across devices. All interactive elements include smooth hover states to enhance usability. Additionally, I implemented input handling with proper error validation to provide clear feedback when users enter invalid data, making the form both functional and user-friendly.",
      image: "/landingPage.jpg",
      technologies: ["Vanilla JavaScript", "HTML", "Pure CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 13,
      title: "Testimonials grid section",
      description:
        "I developed a responsive testimonials grid section that adapts smoothly to different screen sizes, ensuring a clean and user-friendly layout across devices. The design was built to closely match the original challenge, with attention to detail and accessibility in mind.",
      image: "/grid.jpg",
      technologies: ["HTML", "Pure CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 14,
      title: "Intro component with sign up form",
      description:
        "I built an introductory component that is fully responsive and adapts to different screen sizes for an optimal user experience. Interactive elements include smooth hover states, and the form features robust validation with clear error messages for empty fields or incorrectly formatted emails, ensuring usability and accessibility.",
      image: "/loginForm.jpg",
      technologies: ["Vanilla JavaScript", "HTML", "Pure CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      "Next.js": "bg-black text-white",
      React: "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      TypeScript: "bg-blue-100 text-blue-800",
      JavaScript: "bg-yellow-100 text-yellow-800",
      "Tailwind CSS": "bg-cyan-100 text-cyan-800",
      MongoDB: "bg-green-100 text-green-800",
      PostgreSQL: "bg-blue-100 text-blue-800",
      Prisma: "bg-purple-100 text-purple-800",
      Stripe: "bg-purple-100 text-purple-800",
      "Framer Motion": "bg-pink-100 text-pink-800",
      "Chart.js": "bg-orange-100 text-orange-800",
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="font-sans flex-col mt-40 overflow-hidden flex items-center justify-start px-8 w-full h-auto ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-white text-2xl font-merapro md:text-4xl  font-bold ">
            My Projects
          </h1>
          <div className="bg-orange-300  w-24 mt-2 h-1 "></div>
          <p className="text-gray-300 lg:text-sm  font-serif text-[10px]  mt-5 w-full mx-auto leading-relaxed">
            A collection of web applications I've built using modern
            technologies and best practices .
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-white text-2xl font-merapro md:text-4xl  font-bold  my-10">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={4000}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full">
                      Featured
                    </span>
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <Eye size={16} className="text-white" />
                      </button>
                      <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <Github size={16} className="text-white" />
                      </button>
                      <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <ExternalLink size={16} className="text-white" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h2 className="text-white text-2xl font-merapro md:text-4xl  font-bold  my-10">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
             hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105
             flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={4000}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-3 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                      <Eye size={20} className="text-white" />
                    </button>
                    <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                      <Github size={20} className="text-white" />
                    </button>
                    <button className="p-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
                      <ExternalLink size={20} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* المحتوى الداخلي */}
                <div className="p-5 flex flex-col flex-1 min-h-[250px]">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* التاجز في الآخر */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let's bring your ideas to life! Get in touch and let's discuss your
            next project.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            Let's Work Together
          </button>
        </div>
      </div>
    </div>
  );
}
