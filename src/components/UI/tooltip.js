"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FollowTooltip({
  children,
  text,
  offset = { x: 12, y: 12 },
  delay = 0,
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handlePointerMove = (e) => {
    setPos({
      x: e.clientX + offset.x,
      y: e.clientY + offset.y,
    });
  };

  const handleEnter = () => {
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => setVisible(true), delay);
    } else {
      setVisible(true);
    }
  };

  const handleLeave = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      className="relative w-full h-full"
    >
      {children}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="hidden lg:block fixed px-8 py-3  text-sm font-semibold text-white bg-[#F4B400] rounded-2xl shadow-2xl pointer-events-none"
            style={{
              top: pos.y,
              left: pos.x,
              zIndex: 9999,
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}