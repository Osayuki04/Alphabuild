"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FollowTooltip from "../UI/tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const tabs = [
    "ALL PROJECTS",
    "ARCHITECTURE",
    "GARDENING",
    "INTERIOR",
    "LANDSCAPE",
    "RENOVATION",
  ];

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
  const [isMobileOrTab, setIsMobileOrTab] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Swiper navigation refs for custom buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobileOrTab(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 40, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full px-4 sm:px-6 xl:px-20 py-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our <span className="text-[#F4B400] italic ">Projects</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 text-center max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Explore A Showcase Of Our Finest Work, Where Vision Meets Craftsmanship.
      </motion.p>

      {/* Tabs */}
      <div className="w-full flex justify-center mt-10 mb-8">
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

      {/* Swiper for mobile/tab, grid for desktop */}
      <div>
        {/* Swiper: show on mobile/tab only */}
        <div className="block lg:hidden">
          <div className="flex justify-end gap-3 mb-3">
            <button
              ref={prevRef}
              className="custom-prev bg-white max-xl:bg-[#F4B400] max-xl:text-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4B400] hover:text-white transition"
              aria-label="Previous"
            >
              <IoArrowBackOutline size={22} />
            </button>
            <button
              ref={nextRef}
              className="custom-next bg-white max-xl:bg-[#F4B400] max-xl:text-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4B400] hover:text-white transition"
              aria-label="Next"
            >
              <IoArrowForwardOutline size={22} />
            </button>
          </div>
          <Swiper
            spaceBetween={16}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            style={{
              "--swiper-navigation-color": "#F4B400",
              "--swiper-pagination-color": "#F4B400",
            }}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <FollowTooltip text={project.title}>
                  <div className="relative w-full rounded-xl overflow-hidden shadow-lg group bg-white flex flex-col">
                    <div className="relative w-full h-72 sm:h-80 md:h-[28rem]">
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10  group-hover:scale-105 transition-all duration-300 cursor-pointer" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between p-4">
                      <div>
                        <div className="text-xs font-semibold text-[#F4B400] uppercase tracking-widest mb-1 mt-2">
                          {project.category}
                        </div>
                        <div className="text-lg font-bold text-gray-900 mb-2">
                          {project.title}
                        </div>
                        <div className="text-gray-600 text-sm mb-3">
                          {project.description}
                        </div>
                      </div>
                      {/* <button className="mt-auto border border-[#F4B400] text-[#F4B400] px-4 py-2 text-xs font-semibold rounded bg-white hover:bg-[#F4B400] hover:text-white transition-all duration-200 flex items-center gap-2">
                        VIEW MORE <FaArrowRight size={12} />
                      </button> */}
                    </div>
                  </div>
                </FollowTooltip>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Mini Swiper for thumbs */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-2" // reduce mt-4 to mt-2 or mt-0
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src={project.src}
                    alt={`Project Thumb ${project.id}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Grid: show on desktop only */}
        <motion.div
          className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="relative w-full rounded-xl overflow-hidden shadow-lg group bg-white flex flex-col"
              >
                <FollowTooltip text={project.title}>
                  <div className="relative w-full h-84 md:h-72 lg:h-80 bg-amber-600">
                    {" "}
                    {/* Increased height */}
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 group-hover:scale-105 transition-all duration-300 cursor-pointer" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                      <div className="text-xs font-semibold text-[#F4B400] uppercase tracking-widest mb-1 mt-2">
                        {project.category}
                      </div>
                      <div className="text-lg font-bold text-gray-900 mb-2">
                        {project.title}
                      </div>
                      <div className="text-gray-600 text-sm mb-3">
                        {project.description}
                      </div>
                    </div>
                    {/* <button className="mt-auto border border-[#F4B400] text-[#F4B400] px-4 py-2 text-xs font-semibold rounded bg-white hover:bg-[#F4B400] hover:text-white transition-all duration-200 flex items-center gap-2">
                      VIEW MORE <FaArrowRight size={12} />
                    </button> */}
                  </div>
                </FollowTooltip>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx global>
        {`
          .scrollbar-hide {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
}
