"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "oki samuel",
    avatar: "/images/team1.jpg",
    text: "I had a wonderful experience with Alphabuild. The team was professional, responsive, and attentive to my needs throughout the entire process. They delivered high-quality work on time and within budget. I highly recommend Alphabuild for any construction project.",
    stars: 5,
    date: "1 week ago",
  },
  {
    name: "Morgan ukechi",
    avatar: "/images/team3.jpg",
    text: "I had an excellent experience with Alphabuild. The team was professional, responsive, and attentive to my needs throughout the entire process. They delivered high-quality work on time and within budget. I highly recommend Alphabuild for any construction project.",
    stars: 5,
    date: "10 days ago",
  },
  {
    name: "okafor benjamin",
    avatar: "/images/team2.jpg",
    text: "I had a fantastic experience with Alphabuild. From the initial consultation to the final completion of my project, the team was professional, responsive, and attentive to every detail. They delivered high-quality work on time and within budget. I highly recommend Alphabuild for any construction needs.",
    stars: 5,
    date: "2 weeks ago",
  },
  {
    name: "chukwuemeka emeka",
    avatar: "/images/team4.jpg",
    text: "I had a great experience with Alphabuild. The team was professional, knowledgeable, and attentive to my needs. They delivered high-quality work on time and within budget. I highly recommend them for any construction project.",
    stars: 5,
    date: "3 weeks ago",
  },
  {
    name: "sandra ike",
    avatar: "/images/team5.jpg",
    text: "Alphabuild is a great company to work with. They are very professional and knowledgeable about their products. I had a great experience working with them and would highly recommend them to anyone looking for high-quality construction services.",
    stars: 5,
    date: "1 month ago",
  }
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-[#fafbfc] px-6 md:px-8">
      <div className=" mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Read reviews,
            <br />
            <span className="font-extrabold">Build with <span className="text-[#F4B400] italic">confidence.</span></span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <motion.div
            className="lg:w-1/4 flex flex-col justify-center items-center lg:items-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center lg:text-left">
              What our customers are saying
            </h3>

            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-3">
              <button
                className="custom-prev bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4B400] hover:text-white transition"
                aria-label="Previous"
              >
                <IoArrowBackOutline size={22} />
              </button>

              <button
                className="custom-next bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4B400] hover:text-white transition"
                aria-label="Next"
              >
                <IoArrowForwardOutline size={22} />
              </button>
            </div>
          </motion.div>

          {/* Swiper Column */}
          <div className="flex-1 min-w-0">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              // Add a custom class to the Swiper for easier targeting
              className="custom-swiper"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index} className="flex">
                  <motion.div
                    className="flex flex-col bg-white rounded-2xl shadow-md p-6 w-full min-h-[340px]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Quote Icon */}
                    <div className="mb-4 text-gray-300">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7.17 6A5.001 5.001 0 002 11v7h7v-7H5.24A3.002 3.002 0 017.17 6zm9 0A5.001 5.001 0 0011 11v7h7v-7h-3.76A3.002 3.002 0 0116.17 6z" />
                      </svg>
                    </div>

                    {/* Text */}
                    <p className="text-gray-800 text-sm leading-relaxed flex-1 mb-6 line-clamp-5">
                      {item.text}
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F4B400] flex-shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-sm text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <Image
                          key={i}
                          src="/icons/Star.svg"
                          alt="star"
                          width={14}
                          height={14}
                        />
                      ))}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 
              Swiper pagination bullets are rendered here by Swiper.js.
              To style them, use Tailwind or custom CSS targeting:
              .swiper-pagination-bullet and .swiper-pagination-bullet-active
            */}
            {/* <div className="swiper-pagination"></div> */}

            {/* Mobile Nav */}
            <div className="flex justify-center gap-3 mt-6 lg:hidden">
              <button
                className="custom-prev bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4B400] hover:text-white transition"
                aria-label="Previous"
              >
                <IoArrowBackOutline size={22} />
              </button>

              <button
                className="custom-next bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4B400] hover:text-white transition"
                aria-label="Next"
              >
                <IoArrowForwardOutline size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
