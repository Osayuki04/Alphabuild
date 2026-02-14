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
    { id: 1, category: "ARCHITECTURE", src: "/images/projects1.jpg" },
    { id: 2, category: "GARDENING", src: "/images/projects2.jpg" },
    { id: 3, category: "INTERIOR", src: "/images/projects3.jpg" },
    { id: 4, category: "LANDSCAPE", src: "/images/projects4.jpg" },
    { id: 5, category: "RENOVATION", src: "/images/projects5.jpg" },
    { id: 6, category: "ARCHITECTURE", src: "/images/projects6.jpg" },
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

      {/* Swiper for mobile/tab, grid for desktop */}
      <div>
        {/* Swiper: show on mobile/tab only */}
        <div className="block lg:hidden">
          <div className="flex justify-end gap-3 mb-3">
            <button
              ref={prevRef}
              className="custom-prev bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4B400] hover:text-white transition"
              aria-label="Previous"
            >
              <IoArrowBackOutline size={22} />
            </button>
            <button
              ref={nextRef}
              className="custom-next bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4B400] hover:text-white transition"
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
            onInit={(swiper) => {
              // Fix for Swiper custom navigation with React refs
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <FollowTooltip text={`Project ${project.id}`}>
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src={project.src}
                      alt={`Project ${project.id}`}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 cursor-pointer" />
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
            className="mySwiper mt-4"
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
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 cursor-pointer" />
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
