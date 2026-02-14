"use client";

import React from "react";
import Image from "next/image";
import Button from "../UI/buton";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const newsData = [
  {
    image: "/images/news1.jpg",
    title: "A New Project Begins",
    desc: "Follow Our Journey As We Start Another Exciting Construction Project For Our Valued Clients.",
  },
  {
    image: "/images/news2.jpg",
    title: "Project Successfully Completed",
    desc: "See How Alpha Build Delivered Quality, Safety, And Excellence On Our Latest Finished Site.",
  },
  {
    image: "/images/news3.jpg",
    title: "Building For The Future",
    desc: "Discover How Our Team Is Using Modern Techniques To Create Stronger And More Sustainable Structures.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const LatestNews = () => (
  <section className="py-10 px-2 mt-20 md:px-2">
    <motion.div
      className="text-left mx-auto px-3  "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold m-0 mb-2 lg:mb-0">
          Latest <span className="text-[#F4B400] italic"> Blogs </span>And
          Stories
        </h2>
        <Button variant="primary" href="/Blog" className="max-xl:hidden">
          See More
        </Button>
      </div>
      <p className="text-sm md:text-base text-gray-700 mb-6 max-w-[600px]">
        From Newly Completed Projects And Behind-The-Scenes Updates To Industry
        Insights And Company Milestones. Our Latest News & Stories Section Keeps
        You Connected To Our Journey.
      </p>
      <Button variant="primary" href="/news" className="xl:hidden">
        See More
      </Button>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[2vw] mx-auto px-[2vw] max-xl:mt-12">
      {/* Main News */}
      <AnimatePresence>
        <motion.div
          className="bg-white rounded-[1.5vw] shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col h-full min-w-0"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          exit="hidden"
        >
          <div className="w-full max-lg:aspect-[16/6] max-lg:object-cover h-[300px] lg:h-[880px] relative">
            <Image
              src={newsData[0].image}
              alt={newsData[0].title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-[clamp(1rem,2vw,2rem)] relative">
            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold mb-2">
              {newsData[0].title}
            </h3>
            <p className="text-[clamp(0.9rem,1.2vw,1.1rem)] text-gray-700 mb-4">
              {newsData[0].desc}
            </p>
            <motion.button
              className="bg-[#F4B400] flex flex-end border border-gray-300 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-[#ffd84d] hover:text-white transition"
              aria-label="Next"
              whileHover={{ scale: 1.13, backgroundColor: "#ffd84d" }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <IoArrowForwardOutline size={22} color="white" />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Secondary News */}
      <div className="flex flex-col gap-[2vw]">
        <AnimatePresence>
          {[newsData[1], newsData[2]].map((news, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-[1.5vw] shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col h-full min-w-0"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx + 1}
              exit="hidden"
            >
              <div className="w-full max-lg:aspect-[16/6] max-lg:object-cover h-[300px] lg:h-[300px] relative">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-[clamp(1rem,2vw,2rem)] relative">
                <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold mb-2">
                  {news.title}
                </h3>
                <p className="text-[clamp(0.9rem,1.2vw,1.1rem)] text-gray-700 mb-4">
                  {news.desc}
                </p>
                <motion.button
                  className="bg-[#F4B400] border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#ffd84d] hover:text-white transition"
                  aria-label="Next"
                  whileHover={{ scale: 1.13, backgroundColor: "#ffd84d" }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <IoArrowForwardOutline size={22} color="white" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  </section>
);

export default LatestNews;
