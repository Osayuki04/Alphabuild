"use client";

import React, { useRef, useState, useEffect } from "react";
import Footer2 from "@/components/UI/footer2";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const AboutPage = () => {
  // Parallax state for hero text
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

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

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.13, duration: 0.7, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full lg:h-[75vh] max-lg:h-[50vh] mb-2"
        style={{ cursor: "pointer" }}
      >
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/abouthero.jpg"
            alt="Construction site"
            fill
            priority
            className="object-cover w-full h-full"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[#5347256e]" />
        </div>
        {/* Centered Content with animation */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{
            willChange: "transform",
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
          }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-white font-bold text-[clamp(2rem,6vw,5rem)] mb-4 leading-tight drop-shadow-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
        </motion.div>
      </div>

      {/* Quality & Results Section */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.14 } },
        }}
      >
        <motion.div
          className="relative w-full md:w-1/2 h-[320px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
          variants={fadeUp}
          custom={0}
        >
          <Image
            src="/images/about.avif"
            alt="Quality Construction"
            fill
            className="object-cover w-full h-full"
            sizes="(max-width:768px) 100vw, 400px"
          />
        </motion.div>
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 w-full md:w-1/2"
          variants={fadeUp}
          custom={1}
        >
          <div className="text-xs font-semibold text-[#F4B400] mb-2 uppercase tracking-widest">
            About Us
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Committed To Superior Quality & Results
          </h2>
          <p className="text-gray-700 mb-4">
             We are dedicated to delivering superior quality and exceptional results in every project we undertake. With a relentless commitment to excellence, we strive to exceed our clients expectations by providing innovative solutions.   </p>
          <p className="text-gray-700 mb-6">
              Our team of skilled professionals is passionate about craftsmanship and attention to detail.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#F4B400] mt-1" size={22} />
              <div>
                <div className="font-bold text-gray-900 text-base">Quality</div>
                <div className="text-gray-700 text-sm">
                  We are committed to delivering superior quality in every aspect of our work.
                </div>
              </div>
            </div>  
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#F4B400] mt-1" size={22} />
              <div>
                <div className="font-bold text-gray-900 text-base">
                  Reliability
                </div>
                <div className="text-gray-700 text-sm">
                  We are a reliable partner, consistently delivering projects on time and within budget.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="w-full relative py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background image with black overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/services.jpg" // Use your stats background image here
            alt="Stats Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/75 bg-opacity-20" />
        </div>
        <div className="relative max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-6 px-4">
          <motion.div
            className="flex-1 min-w-[120px] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-[#F4B400] mb-2">
              32+
            </div>
            <div className="text-white text-sm md:text-base font-semibold">
              Years of Experience
            </div>
          </motion.div>
          <motion.div
            className="flex-1 min-w-[120px] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-[#F4B400] mb-2">
              95%
            </div>
            <div className="text-white text-sm md:text-base font-semibold">
              Happy Clients
            </div>
          </motion.div>
          <motion.div
            className="flex-1 min-w-[120px] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-[#F4B400] mb-2">
              1,476+
            </div>
            <div className="text-white text-sm md:text-base font-semibold">
              Complete Project
            </div>
          </motion.div>
          <motion.div
            className="flex-1 min-w-[120px] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <div className="text-3xl md:text-4xl font-bold text-[#F4B400] mb-2">
              80+
            </div>
            <div className="text-white text-sm md:text-base font-semibold">
              Professional Team
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Sectors Section */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-8">
          <div className="text-[#F4B400] font-semibold text-xs uppercase tracking-widest mb-2">
            Sector We Work In
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            Sector We Work In
          </h2>
          <p className="text-gray-700 mb-4 max-w-xl">
              We have a proven track record of delivering exceptional results across a wide range of sectors, including commercial, retail, industrial, educational, residential, and engineering projects. 
          </p>
          {/* <motion.button
            className="bg-[#F4B400] text-white px-6 py-2 rounded font-semibold hover:bg-[#dca900] transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Discover More
          </motion.button> */}
        </motion.div>
        <motion.div
          variants={fadeUp}
          custom={1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div>
            <div className="font-bold text-gray-900 mb-2">1. Commercial</div>
            <div className="text-gray-700 text-sm mb-4">
              commercial construction projects require a unique blend of functionality, aesthetics, and efficiency.    </div>
            <div className="font-bold text-gray-900 mb-2">2. Retail</div>
            <div className="text-gray-700 text-sm mb-4">
               Wide expertise in retail construction, we have successfully completed numerous retail projects. </div>
          </div>
          <div>
            <div className="font-bold text-gray-900 mb-2">3. Industrial</div>
            <div className="text-gray-700 text-sm mb-4">
              Our industrial construction projects encompass a wide range of facilities.
            </div>
            <div className="font-bold text-gray-900 mb-2">4. Educational</div>
            <div className="text-gray-700 text-sm mb-4">
             Educational construction projects require a unique blend of functionality, safety, and aesthetics. 
            </div>
          </div>
          <div>
            <div className="font-bold text-gray-900 mb-2">5. Residential</div>
            <div className="text-gray-700 text-sm mb-4">
             Residential construction projects require a unique blend of functionality, safety, and aesthetics.
            </div>
            <div className="font-bold text-gray-900 mb-2">6. Engineering</div>
            <div className="text-gray-700 text-sm mb-4">
              Our engineering construction projects encompass a wide range of infrastructure developments.
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Footer2 />
    </section>
  );
};

export default AboutPage;
