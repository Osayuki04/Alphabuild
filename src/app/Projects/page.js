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

  const projects = [
    { id: 1, category: "ARCHITECTURE", src: "/images/projects1.jpg" },
    { id: 2, category: "GARDENING", src: "/images/projects2.jpg" },
    { id: 3, category: "INTERIOR", src: "/images/projects3.jpg" },
    { id: 4, category: "LANDSCAPE", src: "/images/projects4.jpg" },
    { id: 5, category: "RENOVATION", src: "/images/projects5.jpg" },
    { id: 6, category: "ARCHITECTURE", src: "/images/projects6.jpg" },
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

  // Showcase projects for the "Latest Project" section
  const showcaseProjects = [
    {
      id: 1,
      category: "PUBLIC BUILDING",
      title: "The Triangle City Square",
      image: "/images/projects1.jpg",
    },
    {
      id: 2,
      category: "SPORT CENTER",
      title: "Graha Super Sports",
      image: "/images/projects2.jpg",
    },
    {
      id: 3,
      category: "OFFICE TOWER",
      title: "Great Block Tower",
      image: "/images/projects3.jpg",
    },
  ];

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
        className="relative w-full lg:h-[75vh] max-lg:h-[50vh] mb-2"
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
          className="absolute inset-0 flex items-center justify-center"
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

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 xl:px-20 "
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"
            >
              <FollowTooltip text={`Project ${project.id}`}>
                <div className="relative w-full h-full">
                  <Image
                    src={project.src}
                    alt={`Project ${project.id}`}
                    fill
                    sizes="(max-width:768px) 100vw,
                           (max-width:1200px) 50vw,
                           33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 cursor-pointer" />
                </div>
              </FollowTooltip>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Showcase Section */}
      <div className="w-full bg-white py-12 px-4 sm:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8 items-stretch">
          {/* Latest Project Description */}
          <motion.div
            className="flex-1 flex flex-col justify-center px-2 mb-8 xl:mb-0 w-full xl:w-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ maxWidth: "100%" }}
          >
            <div className="text-md font-semibold text-[#F4B400] uppercase tracking-widest mb-2">
              Latest Project
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
              From Up To Down It’s Made Up <br /> Of The Best Quality
            </h2>
            <p className="text-gray-700 max-w-md">
              Our latest project, The Triangle City Square, is a testament to
              our commitment to excellence and innovation in construction. This
              iconic public space seamlessly blends modern design with
              functionality, creating a vibrant hub for community engagement and
              cultural events.
            </p>
          </motion.div>
          {/* Project Cards */}
          <div className="flex flex-col sm:flex-row gap-6 flex-1">
            {showcaseProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="relative rounded-xl overflow-hidden shadow-lg flex-1 min-w-[220px] max-w-full group"
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
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={260}
                  className="object-cover w-full h-full"
                  sizes="(max-width:768px) 100vw, 400px"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="text-xs font-semibold text-[#F4B400] uppercase tracking-widest mb-1">
                    {project.category}
                  </div>
                  <div className="text-white text-lg font-bold mb-4 leading-tight drop-shadow">
                    {project.title}
                  </div>
                </div>
              </motion.div>
            ))}
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
          .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
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
