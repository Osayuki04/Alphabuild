"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Footer2 from "@/components/UI/footer2";
import Button from "./../../components/UI/buton"

const ServicesPage = () => {
  
  const services = [
  {
    title: "Residential",
    desc: "Comfortable, Modern Homes Thoughtfully Designed And Expertly Built With Quality Materials, Careful Planning, And Attention To Every Detail, So You Can Enjoy Lasting Comfort And Peace Of Mind.",
    image: "/images/services1.jpg",
    imageAlt: "Residential construction",
  },
  {
    title: "Interior Designs",
    desc: "Beautiful, Functional Interior Designs Thoughtfully Created Around Our Customers' Style, Blending Comfort, Elegance, And Personality To Transform Every Space Into A Place You'll Love To Live And Work In.",
    image: "/images/services2.jpg",
    imageAlt: "Interior design",
  },
  {
    title: "Structural Repair",
    desc: "Reliable Structural Repair Services Designed To Strengthen, Stabilize, And Protect Your Building, Restoring Its Integrity And Ensuring Long-Lasting Safety, Durability, And Peace Of Mind.",
    image: "/images/services3.jpg",
    imageAlt: "Structural repair",
  },
  {
    title: "Commercial",
    desc: "Professional Commercial Construction Services Tailored To Your Business Needs, Delivering High-Quality, Efficient, And Cost-Effective Solutions That Help Your Business Grow And Succeed.",
    image: "/images/services4.jpg",
    imageAlt: "Commercial construction",
  },
  {
    title: "Renovation",
    desc: "Expert Renovation Services That Breathe New Life Into Your Space, Combining Quality Craftsmanship, Innovative Design, And Attention To Detail To Create A Beautiful, Functional Environment You'll Love.",
    image: "/images/article7.jpg",
    imageAlt: "Renovation",
  },
 
  {
    title: "Project Management",
    desc: "Comprehensive Project Management Services That Ensure Your Construction Project Stays On Track, On Budget, And Meets Your Expectations Through Expert Planning, Coordination, And Communication.",
    image: "/images/article8.jpg",
    imageAlt: "Project management",
  },
];

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

  // Animation variants for services
  const serviceVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.13, duration: 0.7, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.4 } },
  };

  // Animation variants for the CTA section
  const ctaVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full lg:h-[75vh] max-lg:h-[50vh] mb-2"
        style={{ cursor: "pointer" }}
      >
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/services.jpg"
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
            className="text-white font-bold text-[clamp(2rem,6vw,5rem)] mb-4 leading-tight drop-shadow-lg text-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Services
          </motion.h1>
        </motion.div>
      </div>

      {/* Services Grid Section */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 max-md:gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.14 } },
        }}
      >
        <AnimatePresence>
          {services.map((service, idx) => (
            <React.Fragment key={service.title}>
              {/* Odd: text left, image right; Even: image left, text right */}
              {idx % 2 === 0 ? (
                <>
                  <motion.div
                    className="flex flex-col justify-center bg-white p-6 md:p-10"
                    variants={serviceVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={idx}
                    whileHover={{
                      scale: 1.025,
                      boxShadow: "0 8px 32px rgba(244,179,0,0.10)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg">
                      {service.desc}
                    </p>
                  </motion.div>
                  <motion.div
                    className="relative min-h-[220px] md:min-h-[480px]"
                    variants={serviceVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={idx + 0.5}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover w-full h-full rounded transition-transform duration-500"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="relative min-h-[220px] md:min-h-[400px]"
                    variants={serviceVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={idx + 0.5}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover w-full h-full rounded transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-col justify-center bg-white p-6 md:p-10"
                    variants={serviceVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={idx}
                    whileHover={{
                      scale: 1.025,
                      boxShadow: "0 8px 32px rgba(244,179,0,0.10)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg">
                      {service.desc}
                    </p>
                  </motion.div>
                </>
              )}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="relative w-full min-h-[540px] flex items-center justify-center my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={ctaVariants}
      >
        {/* Background Image */}
        <Image
          src="/images/about.avif" // Replace with your CTA background image path
          alt="Project Realization"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/55 bg-opacity-60" />
        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 w-full">
          <motion.h2
            className="text-white font-extrabold text-[clamp(2rem,5vw,3rem)] leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Lets Start Your <br />
            Project To Be Realize
          </motion.h2>
          <motion.p
            className="text-white text-base md:text-lg mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            We are ready to bring your vision to life. Contact us today to discuss your project and discover how we can help you achieve your goals with our expertise and commitment to excellence.
          </motion.p>
          <Button
            href="/Contact"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}  
          >
           Contact Us
          </Button>
        </div>
      </motion.div>

      <Footer2 />
    </section>
  );
};

export default ServicesPage;
