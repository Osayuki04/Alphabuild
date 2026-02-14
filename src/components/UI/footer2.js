"use client"; 

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Projects", label: "Projects" },
  { href: "/Services", label: "Services" },
  { href: "/Blog", label: "Blog" },
  { href: "/Contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

export default function Footer2() {
  return (
    <footer className="w-full bg-[#F4B400] flex flex-col items-center justify-center md:py-24 py-12 px-4 mt-12">
      <motion.h2
        className="text-white text-center font-bold text-[clamp(1.3rem,3vw,2.2rem)] mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
          Stay <span className="italic">Connected.</span> Keep Building.
      </motion.h2>

      {/* Navigation Links */}
      <motion.nav
        className="max-md:hidden flex flex-wrap justify-center gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {navLinks.map((link, idx) => (
          <Link key={link.href} href={link.href} passHref>
            <motion.a
              className="text-white text-base font-medium hover:text-[#222] transition-colors duration-200 px-2 py-1"
              whileHover={{ scale: 1.08, color: "#222" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {link.label}
            </motion.a>
          </Link>
        ))}
      </motion.nav>

      {/* Social Media Links */}
      <motion.div
        className="flex gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {socialLinks.map((social, idx) => (
          <motion.a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#F4B400] transition-all duration-200 text-lg"
            whileHover={{
              scale: 1.15,
              backgroundColor: "#fff",
              color: "#F4B400",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <Link href="/Contact">
        <motion.button
          className="border-white cursor-pointer   border-2 text-white bg-transparent px-10 py-3 rounded-none text-lg font-medium mb-12 hover:bg-white hover:text-[#F4B400] transition-all duration-200"
         whileHover={{
              scale: 1.15,
              backgroundColor: "#fff",
              color: "#F4B400",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Contact Us
        </motion.button>
      </Link>

      <motion.div
        className="md:mt-10 text-center text-white text-xs font-medium opacity-80"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        © 2025 Alphabuild. All Rights Reserved. Crafted With Trust And Passion.
      </motion.div>
    </footer>
  );
}
