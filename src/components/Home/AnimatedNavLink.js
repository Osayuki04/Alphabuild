"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedNavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative px-3 py-3 font-semibold">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className=""
      >
        <motion.span
          animate={{ color: isActive ? "#ec4899" : "#1f2937" }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.span>
      </motion.div>
      {isActive && (
        <motion.div
          layoutId="nav-underline"
          className="absolute left-0 bottom-0 h-0.75 bg-[#F4B400] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
    </Link>
  );
}
