"use client";
import React, { useEffect, useState } from "react";

const Blur = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // If we're at the very bottom (or within 2px), hide the blur
      setHide(scrollY + windowHeight >= docHeight - 2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed left-0 bottom-0 w-full h-12 max-md:h-20 overflow-hidden pointer-events-none z-150 bg-gradient-to-t from-white via-white/80 to-transparent" />
  );
};

export default Blur;
