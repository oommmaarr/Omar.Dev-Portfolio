"use client";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
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
      liveUrl: "https://asyndrome.vercel.app/home",
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
      liveUrl: " https://oommmaarr.github.io/E-commerce/",
      githubUrl: "https://github.com/oommmaarr/E-commerce",
      featured: true,
    },
    {
      id: 3,
      title: "AI Chat App",
      description:
        "Developed a real-time AI-powered chat app using React and Google Generative AI (Gemini API). Implemented Context API for state management, typing animation effect, dynamic response formatting, and support for multiple chat sessions.",
      image: "/GeminiClone.png",
      technologies: ["React.js", "Framer Motion", "Vercel", "Pure CSS"],
      liveUrl: "https://oommmaarr.github.io/GeeminiApp/",
      githubUrl: "https://github.com/oommmaarr/GeeminiApp",
      featured: false,
    },
    {
      id: 4,
      title: "Gaming Paradise",
      description:
        "A modern, responsive gaming store website built with Tailwind CSS and HTML5, featuring a sleek glass-morphism design with neon color scheme. The website showcases gaming laptops and accessories with an elegant user interface optimized for both desktop and mobile devices.",
      image: "/gamingShop.png",
      technologies: ["Tailwind CSS", "HTML5"],
      liveUrl: "https://oommmaarr.github.io/Gaming_Paradise/",
      githubUrl: "https://github.com/oommmaarr/Gaming_Paradise#",
      featured: false,
    },
    {
      id: 5,
      title: "Traveling Website",
      description:
        "This site talks about the best and most beautiful places that a person can visit around the world, and this site contains a special login window for the site.",
      image: "/Travel.png",
      technologies: ["HTML", "Bootstrap"],
      liveUrl: "https://oommmaarr.github.io/Traveling-Website/",
      githubUrl: "https://github.com/oommmaarr/Traveling-Website",
      featured: false,
    },
    {
      id: 6,
      title: "Parallax Scrolling Landing Page",
      description:
        "Built an interactive landing page using HTML, CSS, and Vanilla JavaScript with smooth parallax scrolling effects. Implemented dynamic background gradients, animated elements on scroll, and responsive design for an engaging user experience.",
      image: "/AdvJs.png",
      technologies: ["HTML", "CSS", "Vanilla JavaScript"],
      liveUrl: "https://oommmaarr.github.io/Advance-Task-JS/",
      githubUrl: "https://github.com/oommmaarr/Advance-Task-JS",
      featured: false,
    },
    {
      id: 7,
      title: "Todo App",
      description:
        "A responsive and interactive task manager where users can add, complete, delete, and filter todos (All / Active / Completed), clear completed tasks, and switch between light & dark mode. The app adapts to all screen sizes and includes hover states for a smooth user experience.",
      image: "/todo.webp",
      technologies: ["React.js", "Vite", "Tailwind CSS"],
      liveUrl: "https://oommmaarr.github.io/Todo-List-React/",
      githubUrl: "https://github.com/oommmaarr/Todo-List-React",
      featured: false,
    },
    {
      id: 8,
      title: "Conference Ticket Generator",
      description:
        "A responsive and accessible app to generate personalized tickets. Includes form validation, keyboard-only navigation, screen reader support, and light hover/focus interactions. Optimized for all screen sizes.",
      image: "/GenerateTicket.png",
      technologies: ["Vanilla JavaScript", "HTML", "Tailwind CSS"],
      liveUrl:
        "https://oommmaarr.github.io/Frontend-Mentor-Conference-ticket-generator/",
      githubUrl:
        "https://github.com/oommmaarr/Frontend-Mentor-Conference-ticket-generator",
      featured: false,
    },
    {
      id: 9,
      title: "Redux Counter & Calculator",
      description:
        "An interactive React and Redux application that combines a counter and a calculator in a single interface. Users can increase or decrease the counter, increment it by a specific value, and perform essential arithmetic operations such as addition, subtraction, multiplication, and division. The app features a modern, responsive design with smooth animations, gradient styling, and full RTL/Arabic support, delivering a polished and professional user experience.",
      image: "/redux-calc.png",
      technologies: ["React.js", "(Redux) State Management", "Tailwind CSS"],
      liveUrl: "https://oommmaarr.github.io/Redux-Toolkit-Calculator/",
      githubUrl: "https://github.com/oommmaarr/Redux-Toolkit-Calculator",
      featured: false,
    },
    {
      id: 10,
      title: "Product list with cart",
      description:
        "A responsive shopping cart interface where users can add or remove items, adjust item quantities, confirm their order through a modal, and reset selections to start a new order. The design adapts to all screen sizes and includes smooth hover and focus states for an interactive user experience.",
      image: "/ProductList.jpg",
      technologies: ["React.js", "Tailwind CSS"],
      liveUrl:
        "https://oommmaarr.github.io/Frontend-Mentor-Product-list-with-cart/",
      githubUrl:
        "https://github.com/oommmaarr/Frontend-Mentor-Product-list-with-cart",
      featured: false,
    },
    {
      id: 11,
      title: "Browser extensions manager UI",
      description:
        "A responsive interface that lets users toggle extensions on or off, filter by active or inactive state, remove extensions, and customize the color theme. The app is optimized for all screen sizes with clear hover and focus interactions for a smooth user experience.",
      image: "/extensionManager.jpg",
      technologies: ["Vanilla JavaScript", "HTML", "Tailwind CSS"],
      liveUrl:
        "https://oommmaarr.github.io/Frontend-Mentor-Browser-extensions-manager-UI/",
      githubUrl:
        "https://github.com/oommmaarr/Frontend-Mentor-Browser-extensions-manager-UI",
      featured: false,
    },
    {
      id: 12,
      title: "Fylo landing page with two column layout",
      description:
        "I built a responsive landing page that adapts seamlessly to different screen sizes, ensuring an optimal user experience across devices. All interactive elements include smooth hover states to enhance usability. Additionally, I implemented input handling with proper error validation to provide clear feedback when users enter invalid data, making the form both functional and user-friendly.",
      image: "/landingPage.jpg",
      technologies: ["Vanilla JavaScript", "HTML", "Pure CSS"],
      liveUrl:
        "https://oommmaarr.github.io/Frontend-Mentor-Fylo-landing-page-with-two-column-layout/",
      githubUrl:
        "https://github.com/oommmaarr/Frontend-Mentor-Fylo-landing-page-with-two-column-layout",
      featured: false,
    },
    {
      id: 13,
      title: "Testimonials grid section",
      description:
        "I developed a responsive testimonials grid section that adapts smoothly to different screen sizes, ensuring a clean and user-friendly layout across devices. The design was built to closely match the original challenge, with attention to detail and accessibility in mind.",
      image: "/grid.jpg",
      technologies: ["HTML", "Pure CSS"],
      liveUrl:
        "https://oommmaarr.github.io/Frontend-Mentor-Testimonials-grid-section/",
      githubUrl:
        "https://github.com/oommmaarr/Frontend-Mentor-Testimonials-grid-section",
      featured: false,
    },
    {
      id: 14,
      title: "Intro component with sign up form",
      description:
        "I built an introductory component that is fully responsive and adapts to different screen sizes for an optimal user experience. Interactive elements include smooth hover states, and the form features robust validation with clear error messages for empty fields or incorrectly formatted emails, ensuring usability and accessibility.",
      image: "/loginForm.jpg",
      technologies: ["Vanilla JavaScript", "HTML", "Pure CSS"],
      liveUrl:
        "https://oommmaarr.github.io/Frontend-Mentor-Intro-component-with-sign-up-form/",
      githubUrl:
        "https://github.com/oommmaarr/Frontend-Mentor-Intro-component-with-sign-up-form",
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

  // Function to get first part of description (about 100 characters)
  const getPreviewText = (text) => {
    if (text.length <= 100) return text;
    return text.substring(0, 100) + "...";
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const [showAll, setShowAll] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const visibleProjects = showAll ? otherProjects : otherProjects.slice(0, 3);

  const toggleDescription = (projectId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  // Component for description with expand/collapse functionality
  const ExpandableDescription = ({ project, isExpanded, toggle }) => {
    const previewText = getPreviewText(project.description);
    const hasMore = previewText !== project.description;

    return (
      <div className="text-gray-300 mb-4 z-10 leading-relaxed lg:text-xs md:text-sm text-[10px]">
        <p>{isExpanded ? project.description : previewText}</p>
        {hasMore && (
          <button
            onClick={() => toggle(project.id)}
            className="mt-2 text-orange-400 hover:text-orange-300 cursor-pointer z-[100] font-medium inline-flex items-center gap-1 transition-colors"
          >
            {isExpanded ? (
              <>
                See Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                See More <ChevronDown size={14} />
              </>
            )}
          </button>
        )}
      </div>
    );
  };

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
          <p className="text-gray-300 lg:text-sm  font-serif text-xs  mt-5 w-full mx-auto leading-relaxed">
            A collection of web applications I've built using modern
            technologies and best practices .
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-white text-xl font-merapro xl:text-4xl lg:text-2xl md:text-3xl font-bold  my-10">
            Powerful Projects
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 w-full  gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-orange-500/50 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={4000}
                    height={1500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-600 text-white lg:text-sm  md:text-xs text-[10px] rounded-full">
                      Powerful
                    </span>
                  </div>

                  {/* Title with Icons */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="2xl:text-xl lg:text-lg md:text-md text-sm font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={project.liveUrl} 
                        target="_blank"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Eye  className="text-white lg:w-5 lg:h-5  md:w-4 md:h-4 w-3 h-3"/>
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Github className="text-white lg:w-5 lg:h-5  md:w-4 md:h-4 w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <ExpandableDescription
                    project={project}
                    isExpanded={expandedDescriptions[project.id]}
                    toggle={toggleDescription}
                  />

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full md:text-[10px] text-[8px] font-medium ${getTechColor(
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
          <h2 className="text-white text-xl font-merapro xl:text-4xl lg:text-2xl md:text-3xl  font-bold  my-10">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
             hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105
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
                </div>

                {/* المحتوى الداخلي */}
                <div className="p-5 flex flex-col flex-1 min-h-[250px]">
                  {/* Title with Icons */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="2xl:text-xl lg:text-lg md:text-md text-sm font-semibold text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a 
                        href={project.liveUrl} 
                        target="_blank"
                        className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Eye  className="text-white xl:w-5 xl:h-5 lg:w-3 lg:h-3 md:w-5 md:h-5 w-3 h-3" />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank"
                        className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Github  className="text-white xl:w-5 xl:h-5 lg:w-3 lg:h-3 md:w-4 md:h-4 w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <ExpandableDescription
                    project={project}
                    isExpanded={expandedDescriptions[project.id]}
                    toggle={toggleDescription}
                  />

                  {/* التاجز في الآخر */}
                  <div className="flex items-center flex-wrap gap-1 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-full md:text-[10px] text-[8px] font-medium ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded-full text-xs md:font-medium text-[8px] bg-gray-100 text-gray-800">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button - منفصل عن الـ grid */}
          {otherProjects.length > 3 && (
            <div className="flex justify-center mt-8">
              <button
                className="md:px-8 md:py-4 px-4 py-3 rounded-full bg-gradient-to-r cursor-pointer from-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-semibold  transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less Projects" : "Show More Projects"}
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-white/20">
          <h2 className="md:text-3xl text-lg font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl text-xs mx-auto">
            Let's bring your ideas to life! Get in touch and let's discuss your
            next project.
          </p>
          <button className="md:px-8 md:py-4 px-4 py-3 cursor-pointer mb-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
            Let's Work Together
          </button>
        </div>
      </div>
    </div>
  );
}