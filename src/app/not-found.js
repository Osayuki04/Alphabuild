"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { FaSadTear } from "react-icons/fa";
import Logo from "@/components/UI/logo";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-stretch justify-center bg-gradient-to-br from-[#fafbfc] to-[#e2e8f0] px-0 py-0">
      {/* Left: Image fills half width and full height on desktop, text above image on mobile */}
      <motion.div
        className="relative w-full lg:w-1/2 h-[55vh] lg:h-screen flex-shrink-0 flex flex-col"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Mobile: Text block at the top */}
        <div className="block lg:hidden z-10 relative px-6  pb-2 flex flex-col items-center text-center max-lg:-mt-8 max-lg:mb-12">
         <motion.div
          className="mb-6 border-2 border-[#F4B400] rounded-full p-4" 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Logo width={30} height={30} textsize="text-md" className={"ml-3"}  />
        </motion.div>
          <div className="flex gap-2 items-center justify-center mt-2">
            <motion.h1
            className="text-2xl md:text-4xl font-bold mb-2 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Page Not Found
          </motion.h1>
          <FaSadTear className="text-[#F4B400] text-4xl mb-4 animate-bounce" />
        </div>
        <motion.p
          className="text-gray-700 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Sorry, the page you are looking for does not exist.
          Let’s get you back to the homepage!
        </motion.p>
           <motion.div
          whileHover={{ scale: 1.07, boxShadow: "0 4px 24px #F4B40033" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link
            href="/"
            className="bg-[#F4B400] text-black font-semibold flex items-center gap-2 px-8 py-3 rounded transition-all duration-200 shadow hover:bg-[#ffd84d]"
          >
            <IoHomeOutline className="text-xl" />
            Go Back Home
          </Link>
        </motion.div>
        </div>
        {/* Image fills the rest */}
        <div className="relative flex-1 min-h-[520px]">
          <Image
            src="/images/article1.jpg"
            alt="Page Not Found"
            fill
            priority
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>
      </motion.div>

      {/* Right: Text on desktop only */}
      <motion.div
        className="hidden lg:flex w-full md:w-1/2 flex-col items-center justify-center text-center px-6 py-16 lg:py-0 lg:px-12"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div
          className="mb-6 border-2 border-[#F4B400] rounded-full p-4" 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Logo width={30} height={30} textsize="text-md" className={"ml-3"}  />
        </motion.div>
        <div className="flex gap-2 items-center justify-center">
          <motion.h1
            className="text-2xl md:text-4xl font-bold mb-2 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Page Not Found
          </motion.h1>
          <FaSadTear className="text-[#F4B400] text-4xl mb-4 animate-bounce" />
        </div>
        <motion.p
          className="text-gray-700 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Sorry, the page you are looking for does not exist 
          Let’s get you back to the homepage!
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.07, boxShadow: "0 4px 24px #F4B40033" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link
            href="/"
            className="bg-[#F4B400] text-black font-semibold flex items-center gap-2 px-8 py-3 rounded transition-all duration-200 shadow hover:bg-[#ffd84d]"
          >
            <IoHomeOutline className="text-xl" />
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}