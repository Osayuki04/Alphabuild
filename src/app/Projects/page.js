"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Button from "./../../components/UI/buton";
import TypingText from "../../components/UI/Typedtext";
import Footer2 from "@/components/UI/footer2";
import { motion, AnimatePresence } from "framer-motion";
import FollowTooltip from "@/components/UI/tooltip";
import { FaArrowRight } from "react-icons/fa";

const ProjectsPage = () => {
  const tabs = [
    "ALL PROJECTS",
    "ARCHITECTURE",
    "GARDENING",
    "INTERIOR",
    "LANDSCAPE",
    "RENOVATION",
  ];

  // Updated projects array with title and description
  const projects = [
    //architecture
    {
      id: 1,
      src: "/images/archi1.jpg",
      category: "ARCHITECTURE",
      title: "Blay Architecture plan",
      description: "A modern architectural design for a residential building.",
    },
    {
      id: 2,
      src: "/images/archi2.jpg",
      category: "ARCHITECTURE",
      title: "Maze Bay plan",
      description: "A stunning architectural project located by the bay.",
    },
    {
      id: 3,
      src: "/images/archi3.webp",
      category: "ARCHITECTURE",
      title: "Sierra plan",
      description: "An innovative design nestled in the mountains.",
    },
    {
      id: 4,
      src: "/images/archi4.jpg",
      category: "ARCHITECTURE",
      title: "Jayx plan",
      description: "A futuristic architectural concept.",
    },

    //gardening
    {
      id: 5,
      src: "/images/garden1.jpeg",
      category: "GARDENING",
      title: "Prime Garden ",
      description: "A beautiful garden design with a variety of plants.",
    },
    {
      id: 6,
      src: "/images/garden2.jpg",
      category: "GARDENING",
      title: "Grux Garden ",
      description: "A modern garden with sleek lines and minimalistic design.",
    },
    {
      id: 7,
      src: "/images/garden3.jpg",
      category: "GARDENING",
      title: "Gardenes tulix",
      description: "A vibrant garden filled with colorful flowers.",
    },

    //interior
    {
      id: 8,
      src: "/images/inti.jpg",
      category: "INTERIOR",
      title: "Hunt Mansion",
      description: "An opulent mansion with classic interior design.",
    },
    {
      id: 9,
      src: "/images/inti2.webp",
      category: "INTERIOR",
      title: "Kulesjk Mansion",
      description: "A contemporary mansion with unique architectural features.",
    },
    {
      id: 10,
      src: "/images/inti3.webp",
      category: "INTERIOR",
      title: "Meridian Mansion",
      description: "A luxurious mansion with modern interior design.",
    },
    {
      id: 11,
      src: "/images/inti4.jpg",
      category: "INTERIOR",
      title: "Seclorum Mansion",
      description:
        "A grand mansion with intricate details and elegant furnishings.",
    },

    //landscape
    {
      id: 12,
      src: "/images/land1.jpg",
      category: "LANDSCAPE",
      title: "Griffin Landscape",
      description: "A beautiful landscape design featuring lush greenery.",
    },
    {
      id: 13,
      src: "/images/land2.jpeg",
      category: "LANDSCAPE",
      title: "Vortex Landscape",
      description: "A modern landscape design with geometric shapes.",
    },
    {
      id: 14,
      src: "/images/projects3.jpg",
      category: "LANDSCAPE",
      title: "Serenity Landscape",
      description: "A serene landscape design with a focus on tranquility.",
    },

    //renovation
    {
      id: 15,
      src: "/images/reno1.jpg",
      category: "RENOVATION",
      title: "Kenny Renovation",
      description:
        "A comprehensive renovation project for a historic building.",
    },
    {
      id: 16,
      src: "/images/reno2.jpg",
      category: "RENOVATION",
      title: "Malvis Renovation",
      description:
        "A modern renovation project with innovative design elements.",
    },
  ];

  const [active, setActive] = useState("ALL PROJECTS");

  // Parallax state for hero text
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Smooth parallax animation
  useEffect(() => {
    let animationFrame;
    let current = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    const animate = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      setParallax({ x: current.x, y: current.y });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    // Mouse move handler
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      const maxOffset = 12;
      target.x = -x * maxOffset;
      target.y = -y * maxOffset;
    };

    // Reset on mouse leave
    const handleMouseLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    // Touch move handler for mobile
    const handleTouchMove = (e) => {
      if (!heroRef.current || !e.touches[0]) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.touches[0].clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.touches[0].clientY - rect.top) / rect.height - 0.5) * 2;
      const maxOffset = 12;
      target.x = -x * maxOffset;
      target.y = -y * maxOffset;
    };

    const handleTouchEnd = () => {
      target.x = 0;
      target.y = 0;
    };

    const node = heroRef.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("mouseleave", handleMouseLeave);
      node.addEventListener("touchmove", handleTouchMove);
      node.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      if (node) {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseleave", handleMouseLeave);
        node.removeEventListener("touchmove", handleTouchMove);
        node.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  // Filtered projects
  const filteredProjects =
    active === "ALL PROJECTS"
      ? projects
      : projects.filter((project) => project.category === active);

  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.13, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full lg:h-[75vh] max-lg:h-[60vh] mb-2"
        style={{ cursor: "pointer" }}
      >
        <div className="absolute inset-0 w-full rounded-md">
          <Image
            src="/images/projectshero.jpg"
            alt="Construction site"
            fill
            priority
            className="object-cover w-full h-full"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[#6357386e]" />
        </div>
        {/* Centered Content with animation */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{
            willChange: "transform",
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
          }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-white font-extrabold text-[clamp(2rem,6vw,5rem)] mb-4 leading-tight flex items-center justify-center drop-shadow-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-white text-base md:text-lg max-w-2xl mx-auto mt-2 drop-shadow-md "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            Discover our diverse portfolio of projects, each crafted with
            precision, creativity, and a commitment to excellence. 
          </motion.p>
        </motion.div>
      </div>

      {/* Tabs Section - separated from hero/intro */}
      <div className="w-full flex justify-center mt-10 mb-8">
        {/* Tabs */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 min-w-max justify-center lg:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative whitespace-nowrap text-sm font-semibold pb-2 px-3 transition-colors ${
                  active === tab
                    ? "text-[#F4B400]"
                    : "text-gray-700 hover:text-[#F4B400]"
                }`}
              >
                {tab}
                {active === tab && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#F4B400]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Grid/List */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 xl:px-20"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="relative w-full rounded-xl overflow-hidden shadow-lg group bg-white flex flex-col"
            >
              <FollowTooltip text={project.title}>
                <div className="relative w-full h-72 sm:h-80 md:h-[28rem]">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 group-hover:scale-105 transition-all duration-300 cursor-pointer" />
                </div>
                <div className="flex-1 flex flex-col justify-between p-5">
                  <div>
                    <div className="text-xs font-semibold text-[#F4B400] uppercase tracking-widest mb-1 mt-1">
                      {project.category}
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-2">
                      {project.title}
                    </div>
                    <div className="text-gray-600 text-sm mb-3">
                      {project.description}
                    </div>
                  </div>
                </div>
              </FollowTooltip>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Showcase Section */}
      <div className="w-full bg-white py-12 px-4 sm:px-8 mt-12">
        <div className="max-w-[90rem] mx-auto flex flex-col xl:flex-row gap-8 items-stretch">
          {/* Latest Project Description */}
          <motion.div
            className="flex-1 flex flex-col justify-center px-2 mb-8 xl:mb-0 w-full xl:w-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ maxWidth: "100%" }}
          >
            <div className="text-md font-semibold text-[#F4B400] uppercase tracking-widest mb-2">
              Award Winning Projects
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
              From Up To Down It’s Made Up <br /> Of Our Best Works
            </h2>
            <p className="text-gray-700  xl:max-w-md w-full">
              Explore our award-winning projects that showcase our commitment to
              excellence and innovation in design. Each project is a testament
              to our dedication to creating spaces that inspire and delight.
              From stunning architecture to breathtaking landscapes, our
              portfolio reflects our passion for delivering exceptional results
              that exceed expectations.
            </p>
          </motion.div>
          {/* Project Cards */}
          <div className="flex flex-col sm:flex-row gap-6 flex-1 w-full">
            {[
              projects.find((p) => p.category === "INTERIOR"),
              projects.find((p) => p.category === "LANDSCAPE"),
              projects.find((p) => p.category === "ARCHITECTURE"),
            ].map(
              (project, idx) =>
                project && (
                  <motion.div
                    key={project.id}
                    className="relative rounded-xl overflow-hidden shadow-lg flex-1 min-w-[220px] max-w-full group bg-white flex flex-col"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={idx}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 8px 32px rgba(244,179,0,0.10)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <div className="relative w-full h-64 sm:h-72 md:h-80">
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        sizes="(max-width:768px) 100vw, 400px"
                        className="object-cover w-full h-full"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="text-xs font-semibold text-[#F4B400] uppercase tracking-widest mb-1">
                          {project.category}
                        </div>
                        <div className="text-white text-lg font-bold mb-2 leading-tight drop-shadow">
                          {project.title}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between p-5 bg-white">
                      <div className="text-gray-600 text-sm mb-3">
                        {project.description}
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </div>
        </div>
      </div>

      <Footer2 />

      <style jsx>{`
        @media (max-width: 1280px) {
          .max-w-7xl.flex-col-reverse,
          .max-w-7xl.flex-col {
            flex-direction: column !important;
          }
        }
        @media (max-width: 1024px) {
          .max-w-7xl.flex-col,
          .max-w-7xl.flex-col-reverse {
            flex-direction: column !important;
          }
          .flex-1.flex.flex-col.justify-center.px-2.mb-8.xl\\:mb-0.w-full.xl\\:w-auto {
            max-width: 100% !important;
            width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          .aspect-\[1.2\/1\] {
            aspect-ratio: 1.2/1;
          }
        }
        @media (max-width: 600px) {
          .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          .aspect-\[1.2\/1\] {
            aspect-ratio: 1.2/1;
          }
        }
      `}</style>
      <style jsx global>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsPage;
