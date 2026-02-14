"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  as,
  ...props
}) {
  const styles = {
    primary:
      "bg-[#F4B400] text-black max-md:w-[170px] w-[190px] h-[50px] text-base flex items-center justify-center rounded transition-all duration-200",
    outline:
      "bg-transparent text-black max-md:w-[170px] w-[190px] h-[50px] text-base flex items-center justify-center border-2 border-[#F4B400] rounded transition-all duration-200",
  };

  const Component = href ? Link : as || "button";

  return (
    <motion.div
      whileHover={{ scale: 1.06, boxShadow: "0 4px 24px #F4B40033" }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Component
        href={href}
        className={`${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
