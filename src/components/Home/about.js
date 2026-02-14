"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MiniAbout() {
  return (
    <section className="relative px-4 sm:px-6 xl:px-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Heading and image */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="mb-2 text-sm font-semibold tracking-widest text-[#F4B400] italic">
              WHO WE ARE
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Committed To Superior <br className="hidden md:block" />
              Quality & Results
            </h2>
            <div className="w-16 h-1 bg-[#F4B400] rounded mb-6" />
            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg relative">
              <Image
                src="/images/projects1.jpg"
                alt="Construction site"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
        {/* Right: Text and image */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="font-bold text-gray-900 text-base md:text-lg mb-2">
                At Alphabuild, we are dedicated to delivering exceptional
                construction services that exceed our clients expectations.
                integrity, and customer satisfaction, we strive to build lasting relationships and create spaces that inspire and
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Our team of experienced professionals is committed to excellence in
                every project we undertake, ensuring that we bring our clients visions
                to life with precision and care.  With a
                focus on quality, integrity, and customer satisfaction, we strive
                to build lasting relationships and create spaces that inspire and
                endure.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="/About"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4B400] hover:underline transition"
              >
                MORE ABOUT US{" "}
                <span className="inline-block w-16 h-1 mt-1 bg-[#F4B400] rounded-full" />
              </a>
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg mt-2 relative">
                <Image
                  src="/images/projects2.jpg"
                  alt="Team at work"
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
