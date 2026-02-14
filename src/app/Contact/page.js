"use client";

import React, { useRef, useState, useEffect } from "react";
import Footer2 from "@/components/UI/footer2";
import Image from "next/image";
import ContactForm from "../../components/UI/ContactForm";
import ContactMap from "../../components/UI/ContactMap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const ContactPage = () => {
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

  // Animation variants for info/form
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

  // Social links data
  const socials = [
    {
      href: "https://facebook.com/",
      icon: <FaFacebookF />,
      label: "Facebook",
      color: "hover:text-[#1877f3]",
    },
    {
      href: "https://twitter.com/",
      icon: <FaTwitter />,
      label: "Twitter",
      color: "hover:text-[#1da1f2]",
    },
    {
      href: "https://linkedin.com/",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      color: "hover:text-[#0077b5]",
    },
    {
      href: "https://instagram.com/",
      icon: <FaInstagram />,
      label: "Instagram",
      color: "hover:text-[#e4405f]",
    },
    {
      href: "https://wa.me/2348012345678",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      color: "hover:text-[#25d366]",
    },
    {
      href: "https://youtube.com/",
      icon: <FaYoutube />,
      label: "YouTube",
      color: "hover:text-[#ff0000]",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full lg:h-[75vh] max-lg:h-[50vh] mb-2"
        style={{ cursor: "pointer" }}
      >
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/projectshero.jpg"
            alt="Construction site"
            fill
            priority
            className="object-cover w-full h-full"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[#5347256e]" />
        </div>
        {/* Animated Centered Content */}
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
            Contact Us
          </motion.h1>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 py-20"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.14 } },
        }}
      >
        {/* Left: Info */}
        <motion.div
          className="flex flex-col justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={0}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            We are always ready to help you and answer your questions
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
           AlphaBuild is here to assist you with any inquiries or support you may need. Whether you have questions about our services, want to discuss a project, or need help with anything else, our team is ready to help you.
          </motion.p>
          <motion.div
            className="grid grid-cols-2 gap-6 mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0}
            >
              <div className="text-sm font-semibold text-gray-900 mb-2">
                Call Center
              </div>
              <div className="text-gray-700 text-sm mb-1">880 120 1956 254</div>
              <div className="text-gray-700 text-sm">+1 121 380 246 5078</div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={1}
            >
              <div className="text-sm font-semibold text-gray-900 mb-2">
                Our Location
              </div>
              <div className="text-gray-700 text-sm mb-1">
               UK,  London
              </div>
              <div className="text-gray-700 text-sm">12 St. First Avenue,</div>
            </motion.div>
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <div className="text-sm font-semibold text-gray-900 mb-2">
              Email
            </div>
            <div className="text-gray-700 text-sm">alphabuild@mail.co</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            <div className="text-sm font-semibold text-gray-900 mb-2">
              Social network
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-gray-700 text-xl rounded-full p-2 bg-gray-100 hover:bg-[#F4B400] hover:text-white transition-all duration-200 shadow-sm ${social.color}`}
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        {/* Right: Form */}
        <motion.div
          className="flex flex-col justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={1}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
      {/* Map Section */}
      <motion.div
        className="w-full mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ContactMap />
      </motion.div>
      <Footer2 />
    </section>
  );
};

export default ContactPage;
