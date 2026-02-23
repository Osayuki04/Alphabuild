"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqList = [
  {
    q: "What services do you offer?",
    a: "We offer a full range of construction services including design, project management, renovation, landscaping, and interior finishing.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, our company is fully licensed and insured to operate in all areas we serve, ensuring your project is protected.",
  },
  {
    q: "How do you ensure project quality?",
    a: "We use only high-quality materials, certified professionals, and follow strict quality control processes at every stage.",
  },
  {
    q: "Can you help with permits and approvals?",
    a: "Absolutely! We handle all necessary permits and approvals to ensure your project complies with local regulations.",
  },
  {
    q: "How do you handle project timelines?",
    a: "We provide a detailed project schedule and keep you updated throughout, ensuring timely completion without compromising quality.",
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes, we offer free consultations to discuss your project needs and provide a transparent estimate.",
  },
  {
    q: "What is your payment schedule?",
    a: "Our payment schedule is milestone-based, with clear terms outlined in your contract for transparency and peace of mind.",
  },
  {
    q: "How do you manage safety on site?",
    a: "Safety is our top priority. We follow strict safety protocols and ensure all workers are trained and equipped appropriately.",
  },
  {
    q: "Can I make changes during construction?",
    a: "Yes, we accommodate reasonable changes and provide updated timelines and costs for your approval before proceeding.",
  },
  {
    q: "What warranty do you provide?",
    a: "We offer a comprehensive warranty on our workmanship and materials, giving you confidence in the durability of your project.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full py-20 px-4 sm:px-8 xl:px-6 2xl:px-16 bg-white">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
        {/* Left: Title and description */}
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col gap-3 h-full justify-center">
            <div className="flex items-center max-lg:self-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F4B400]" />
              <span className="text-xs font-semibold max-lg:text-center  text-[#F4B400] uppercase tracking-widest">
                Frequently asked questions
              </span>
            </div>
            <h2 className="text-2xl max-lg:text-center  md:text-4xl font-bold leading-tight">
              Frequently asked{" "}
              <span className="text-[#F4B400] italic">questions</span>
            </h2>
            <p className="text-gray-600 max-lg:text-center max-lg:self-center  max-w-xl">
              Find answers to common questions about our construction services,
              process, and policies. If you need more information, feel free to
              contact us directly.
            </p>
          </div>
        </div>
        {/* Right: FAQ Accordions in scrollable div */}
        <div className="relative w-full">
          <div
            className="flex flex-col gap-4 max-h-[420px] overflow-y-auto pr-2 faq-scroll"
            style={{ scrollbarWidth: "none" }} // Hide scrollbar for Firefox
          >
            {faqList.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                className={`rounded-2xl bg-[#FAF7F0] border border-[#F4B400]/20 shadow-sm`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.04,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  onClick={() => setOpen(open === idx ? -1 : idx)}
                  aria-expanded={open === idx}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-semibold text-base text-gray-900">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 text-[#F4B400]"
                  >
                    <FaChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === idx && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden px-6"
                    >
                      <div className="py-2 text-gray-700 text-sm">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            {/* Blur at the bottom */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-2xl" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .faq-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
