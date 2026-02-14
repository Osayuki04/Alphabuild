"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Button from "../UI/buton";
import MissionImage from "../../../public/images/mission.jpg";
import CheckMark from "../../../public/icons/Checkmark.svg";
import { motion, useInView } from "framer-motion";

export default function Mission() {
  const svgWidth = 689;
  const svgHeight = 513;
  const features = [
    "Quality materials and modern designs",
    "On‑time project delivery",
    "Certified professionals",
    "Transparent pricing",
  ];

  // Ref for scroll-triggered animation
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="mt-20 mx-auto px-4 sm:px-6 xl:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-18 items-center "
    >
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[689px]"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={
            inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
          }
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            width="100%"
            height="auto"
            style={{ display: "block" }}
          >
            <defs>
              <clipPath id="clip-pattern6" clipPathUnits="objectBoundingBox">
                <path
                  d="M0 1H0.152466C0.185351 0.960002 0.327354 0.884713 0.505232 0.884713C0.683109 0.884713 0.818635 0.968237 0.849028 1H1V0.347104C0.985052 0.222406 0.838565 0.00477544 0.497758 6.98837e-05C0.156951 -0.00463567 0.0239163 0.229466 0 0.347104V1Z"
                  fill="#D9D9D9"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#clip-pattern6)">
              <image
                href={MissionImage.src}
                width={svgWidth}
                height={svgHeight}
                preserveAspectRatio="xMidYMid slice"
              />
              <rect
                x="0"
                y="0"
                width={svgWidth}
                height={svgHeight}
                fill="black"
                fillOpacity="0.18"
              />
            </g>
          </svg>
        </motion.div>
      </motion.div>
      <motion.div
        className="max-xl:ml-0  max-xl:mx-auto max-xl:w-full flex flex-col items-center xl:items-start xl:ml-4 xl:w-auto "
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl xl:text-4xl font-semibold leading-tight max-xl:text-center lg:text-left lg:mt-28 max-lg:-mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Building A 
          Better <br /> Future <span className="text-[#F4B400] italic">Tomorrow</span> For You
        </motion.h1>
        <motion.div
          className="mt-6  space-y-3  text-gray-600 justify-center xl:text-left"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              <Image
                src={CheckMark}
                alt="Checkmark"
                className="inline-block mr-2"
                width={22}
                height={22}
              />
              {feature}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <Button
            variant="primary"
            href="/About"
            className="mt-8 max-xl:mx-auto"
          >
            Read More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
