"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../../public/images/hero.jpg";
import Button from "../UI/buton";
import TypingText from "../UI/Typedtext";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-6 xl:px-20 top-16 max-xl:pt-12 max-md:pt-8 max-sm:pt-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 py-10 lg:py-20 items-center">
        <motion.div
          className="text-center xl:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Building &nbsp;
            <TypingText
              words={["Dreams,", " Homes,", " Structures,"]}
              typeSpeed={80}
              backSpeed={30}
              loop={true}
              className="text-[#F4B400] italic"
            />
            <br />
            One Brick At A Time!
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-gray-600 max-lg:max-w-md max-xl:max-w-2xl mx-auto xl:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Delivering high-quality construction services through skilled
            craftsmanship, careful planning, and a commitment to lasting
            excellence.
          </motion.p>
          <motion.div
            className="mt-6 sm:mt-8 flex sm:flex-row gap-4 justify-center xl:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Button variant="primary" href="/Projects">
              Get Started
            </Button>
            <Button variant="outline" href="/Contact">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black/10 rounded-lg" />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Image
              src={HeroImage}
              alt="construction"
              width={854}
              height={635}
              className=" rounded-lg max-xl:w-full"
            />
          </motion.div>
          <div className="absolute  xl:h-28 max-sm:h-18 max-xl:h-36 top-[70%]  max-xl:top-[68.8%] bottom-0  max-md:bottom-0  w-full rounded-lg text-xs sm:text-sm font-semibold">
            <div className="grid grid-cols-3 md:gap-1.5  h-full">
              {[
                {
                  bg: "bg-[#A47042] text-white",
                  value: "500+",
                  label: "Hundred Projects",
                  delay: 0.7,
                },
                {
                  bg: "bg-[#F4B400] text-black",
                  value: "200+",
                  label: "Professional Workers",
                  delay: 0.8,
                },
                {
                  bg: "bg-white/20 backdrop-blur-md text-white",
                  value: "10+",
                  label: "Years of Experience",
                  delay: 0.9,
                },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center text-center ${stat.bg} h-full gap-1`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay, duration: 0.6 }}
                >
                  <span className="md:text-2xl max-sm:text-sm">
                    {stat.value}
                  </span>
                  <span className="md:text-md max-sm:text-[10px]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}
