"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Footer2 from "@/components/UI/footer2";
import { motion } from "framer-motion";

const CompanyPage = () => {
  const teamMembers = [
    {
      name: "Engr. Daniel Okafor",
      role: "Project Manager",
      image: "/images/team1.jpg",
    },
    {
      name: "Mr. Tunde Adebayo",
      role: "Quantity Surveyor",
      image: "/images/team2.jpg",
    },
    {
      name: "Mrs. Kemi Ogunleye",
      role: "Health & Safety Officer",
      image: "/images/team3.jpg",
    },
    {
      name: "Mr. Chinedu Nwankwo",
      role: "Construction Supervisor",
      image: "/images/team4.jpg",
    },
    {
      name: "Ms. Aisha Bello",
      role: "Architect",
      image: "/images/team5.jpg",
    },
    {
      name: "Mr. Ibrahim Sule",
      role: "Site Engineer",
      image: "/images/team6.jpg",
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

  return (
    <section className="w-full ">
      <div
        ref={heroRef}
        className="relative w-full lg:h-[75vh] max-lg:h-[50vh] mb-2"
        style={{ cursor: "pointer" }}
      >
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/companyhero.jpg"
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
            className="text-white font-extrabold text-[clamp(2rem,6vw,5rem)] mb-4 leading-tight flex items-center justify-center drop-shadow-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
           Our Company - Teams
          </motion.h1>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl duration-200"
            >
              <div className="relative w-full aspect-square bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 3}
                />
              </div>
              <div className="w-full flex flex-col items-center py-5 px-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-center font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer2 />
    </section>
  );
};

export default CompanyPage;
