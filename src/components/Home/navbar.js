"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "../UI/logo";
import AnimatedNavLink from "./AnimatedNavLink";
import { usePathname } from "next/navigation";
import Button from "../UI/buton";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const NAV_OFFSET = "5rem";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const navlinks = [
    { link: "/", label: "Home" },
    { link: "/Projects", label: "Projects" },
    { link: "/Company", label: "Company" },
    { link: "/Services", label: "Services" },
    { link: "/Blog", label: "Blog" },
    { link: "/About", label: "About" },
  ];

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Outside click */
  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleOutside);
    }
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isMobileMenuOpen]);

  /* Lock body scroll */
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : original;
    return () => (document.body.style.overflow = original);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.header
        className="max-xl:hidden fixed z-50 left-1/2 -translate-x-1/2 h-20 w-full bg-white"
        animate={{
          y: scrolled ? 16 : 0,
          scaleX: scrolled ? 0.95 : 1,
          borderRadius: scrolled ? "9999px" : "0px",
        }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
        style={
          scrolled
            ? {
                background: `linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05)),
            linear-gradient(120deg, rgba(255,255,255,0.35),rgba(255,255,255,0.35), rgba(255,255,255,0.05) `,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid white",
                boxShadow: "inset 0 0 12px #e5e7eb, 0 8px 24px #6b728050",
              }
            : {}
        }
      >
        {scrolled && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background:
                "linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)",
              opacity: 0.4,
              pointerEvents: "none",
              zIndex: -10,
            }}
          />
        )}

        <div
          className={`relative flex items-center justify-between h-full ${
            scrolled ? "px-8 gap-10" : "px-6 md:px-12"
          }`}
        >
          <Logo width={24} height={24} />

          <motion.nav
            className={`hidden xl:flex gap-12${isMobileMenuOpen ? " hidden!" : ""}`}
          >
            {navlinks.map((item, i) => (
              <AnimatedNavLink key={i} href={item.link}>
                <p
                  className={`font-semibold transition-all ${
                    scrolled ? "text-sm" : "text-base"
                  }`}
                >
                  {item.label}
                </p>
              </AnimatedNavLink>
            ))}
          </motion.nav>

          <motion.div
            animate={{ scale: scrolled ? 0.92 : 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            className="flex items-center"
          >
            <Button
              variant="primary"
              href="/Contact"
              className={
                scrolled
                  ? "px-3 py-1.5 text-sm rounded-full"
                  : "px-6 py-2 text-base"
              }
              style={{ minWidth: scrolled ? 110 : 140 }}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* MOBILE NAVBAR */}
      <motion.header
        className="xl:hidden fixed z-50 left-1/2 -translate-x-1/2 h-20 w-full flex items-center justify-between px-6 md:px-12 bg-white"
        animate={{
          y: scrolled ? 16 : 0,
          scaleX: scrolled ? 0.95 : 1,
          borderRadius: scrolled ? "9999px" : "0px",
        }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
        style={
          scrolled
            ? {
                   background: `linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05)),
            linear-gradient(120deg, rgba(255,255,255,0.35),rgba(255,255,255,0.35), rgba(255,255,255,0.05) `,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid white",
                boxShadow: "inset 0 0 12px #e5e7eb, 0 8px 24px #6b728050",
              }
            : {}
        }
      >
        {scrolled && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background:
                "linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)",
              opacity: 0.4,
              pointerEvents: "none",
              zIndex: -10,
            }}
          />
        )}

        <Logo width={30} height={30} textsize="text-md" />

        <button
        className="cursor-pointer"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {!isMobileMenuOpen && <RiMenu3Fill size={26} />}
        </button>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed left-0 right-0 bottom-0 bg-black z-40"
              style={{ top: NAV_OFFSET }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              ref={menuRef}
              id="mobile-menu"
              className="fixed inset-0 bg-white z-50 flex flex-col px-8 w-full"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <button
                className="mt-8 mb-4 self-end cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <AiOutlineCloseSquare size={26} />
              </button>

              {navlinks.map((item, i) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    key={i}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`px-5 py-3 rounded-lg ${
                        isActive
                          ? "bg-linear-to-r from-[#F4B400] to-yellow-300 text-white font-semibold"
                          : "text-gray-900"
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                );
              })}

              <motion.div className="mt-8 w-full  flex flex-col">
                <button
                  variant="primary"
                  href="/Contact"
                  className="w-full py-3 rounded-xl bg-[#F4B400] text-black  h-[50px] text-base flex items-center justify-center rounded transition-all duration-200 cursor-pointer   "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </button>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
