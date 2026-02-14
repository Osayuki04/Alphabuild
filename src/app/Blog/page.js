"use client";

import React, { useRef, useState, useEffect } from "react";
import Footer2 from "@/components/UI/footer2";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const BlogPage = () => {
  const articles = [
    {
      image: "/images/article1.jpg",
      title:
        "Cloud-Based Construction Software For Nigerian Companies: What Really Works",
      desc: "It’s Monday Morning. You Get To The Office And Open WhatsApp To Find Three Urgent Messages Waiting For You...",
      date: "4th January 2026",
    },
    {
      image: "/images/article2.jpg",
      title:
        "The Real Cost Of Building A Skyscraper In Nigeria: Insights From Over 20 Years Of Infrastructure Experience",
      desc: "You’ve Seen Estimates That Skyscrapers Cost Between $300–$600 Million In New York, Converted The Figures To Naira, And...",
      date: "16th November 2025",
    },
    {
      image: "/images/article3.jpg",
      title:
        "How To Measure Land Size In Nigeria: Practical DIY Methods And When To Hire A Professional Surveyor",
      desc: "You’re Standing On A Piece Of Land In Ajah. The Seller Says It’s 'Two Plots.' As You Walk The Perimeter,...",
      date: "24th August 2025",
    },
    {
      image: "/images/article4.jpg",
      title:
        "Green Building Materials: The Future Of Sustainable Construction In Nigeria",
      desc: "Explore the latest trends in eco-friendly materials and how they’re transforming the Nigerian construction industry...",
      date: "10th July 2025",
    },
    {
      image: "/images/article5.jpg",
      title: "Women In Construction: Breaking Barriers And Building Legacies",
      desc: "Meet the women leading the charge in Nigeria’s construction sector, inspiring the next generation...",
      date: "2nd May 2025",
    },
    {
      image: "/images/article6.jpg",
      title: "The Role Of Technology In Modern Project Management",
      desc: "From drones to project management software, discover how technology is streamlining construction projects...",
      date: "18th March 2025",
    },
    {
      image: "/images/article7.jpg",
      title: "Affordable Housing: Challenges And Opportunities In Nigeria",
      desc: "A look at the policies, partnerships, and innovations driving affordable housing solutions...",
      date: "5th January 2025",
    },
    {
      image: "/images/article8.jpg",
      title: "Safety First: Best Practices For Construction Sites",
      desc: "Essential safety protocols and how to foster a culture of safety on every project site...",
      date: "20th November 2024",
    },
    {
      image: "/images/article9.jpg",
      title: "Urbanization And Infrastructure: Nigeria’s Path Forward",
      desc: "How rapid urbanization is shaping infrastructure needs and what it means for the future...",
      date: "2nd September 2024",
    },
    {
      image: "/images/article10.jpg",
      title: "Renovation Vs. New Build: Making The Right Choice",
      desc: "Weighing the pros and cons of renovating existing structures versus starting from scratch...",
      date: "15th June 2024",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

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

  const handleLoadMore = () => {
    if (visibleCount + 3 >= articles.length) {
      setVisibleCount(articles.length);
    } else {
      setVisibleCount(visibleCount + 3);
    }
  };

  // Animation variants
  const articleVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.08, duration: 0.7, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full ">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full lg:h-[75vh] max-lg:h-[60vh] mb-2"
        style={{ cursor: "pointer" }}
      >
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/bloghero.jpg"
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
            Blogs
          </motion.h1>
          <motion.p
            className="text-white text-base text-center md:text-lg max-w-2xl mx-auto mt-2 drop-shadow-md"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Stay updated with the latest insights and trends in the construction industry.
          </motion.p>
         
        </motion.div>
      </div>
      {/* Articles Section */}
      <motion.div
        className="w-full max-w-5xl mx-auto py-20 px-4 md:px-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <AnimatePresence>
          {articles.slice(0, visibleCount).map((article, idx) => (
            <motion.div
              key={article.title}
              className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 items-start bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg p-6 md:p-8 group"
              variants={articleVariants}
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
              <div className="relative w-full md:w-60 h-48 md:h-40 flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 240px"
                  priority={idx < 3}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-xs text-gray-500 mb-1 font-medium">
                  Article
                </span>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-700 text-sm md:text-base mb-2 line-clamp-2 md:line-clamp-2">
                  {article.desc}
                </p>
                <span className="text-xs text-gray-500 font-medium">
                  {article.date}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {visibleCount < articles.length ? (
            <motion.button
              onClick={handleLoadMore}
              className="border-2 border-[#F4B400] cursor-pointer text-[#F4B400] px-8 py-2 rounded-none font-medium bg-white hover:bg-[#F4B400] hover:text-white transition-all duration-200"
              whileHover={{
                scale: 1.07,
                backgroundColor: "#F4B400",
                color: "#fff",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Load More
            </motion.button>
          ) : (
            <span className="border-2 border-[#F4B400] text-[#F4B400] px-8 py-2 rounded-none font-medium bg-white cursor-not-allowed select-none">
              No More Articles
            </span>
          )}
        </motion.div>
      </motion.div>

      <Footer2 />
    </section>
  );
};

export default BlogPage;
