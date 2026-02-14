"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  // Open email client with prefilled fields
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const mailto = `mailto:neuro@mail.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.09, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.form
      className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5"
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      <motion.h2
        className="text-xl font-bold mb-2 text-gray-900"
        variants={fadeUp}
        custom={0}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-gray-700 text-sm mb-4"
        variants={fadeUp}
        custom={1}
      >
        Have questions or want to discuss a project? Fill out the form below and we will get back to you as soon as possible.
      </motion.p>
      <motion.input
        name="name"
        type="text"
        placeholder="Full name"
        required
        className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#F4B400] focus:ring-[#F4B400] outline-none"
        variants={fadeUp}
        custom={2}
      />
      <motion.input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#F4B400] focus:ring-[#F4B400] outline-none"
        variants={fadeUp}
        custom={3}
      />
      <motion.input
        name="subject"
        type="text"
        placeholder="Subject"
        required
        className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#F4B400] focus:ring-[#F4B400] outline-none"
        variants={fadeUp}
        custom={4}
      />
      <motion.textarea
        name="message"
        placeholder="Message"
        required
        className="border border-gray-300 rounded-md px-4 py-2 min-h-[120px] focus:border-[#F4B400] focus:ring-[#F4B400] outline-none"
        variants={fadeUp}
        custom={5}
      />
      <motion.button
        type="submit"
        className="border-2 bg-[#F4B400] text-white px-8 py-3 cursor-pointer rounded-none font-medium hover:bg-[#F4B400] hover:text-white transition-all duration-200 mt-2"
        variants={fadeUp}
        custom={6}
        whileHover={{
          scale: 1.04,
          boxShadow: "0 4px 24px rgba(244,180,0,0.12)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      >
        Send a message
      </motion.button>
    </motion.form>
  );
}
