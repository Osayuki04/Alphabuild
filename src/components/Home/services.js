"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";
import {
  MdHomeWork,
  MdOutlineDesignServices,
  MdBuild,
  MdBusiness,
  MdAutorenew,
  MdAssignmentTurnedIn,
} from "react-icons/md";

const services = [
  {
    title: "Residential",
    desc: "Comfortable, Modern Homes Thoughtfully Designed And Expertly Built With Quality Materials, Careful Planning, And Attention To Every Detail, So You Can Enjoy Lasting Comfort And Peace Of Mind.",
    icon: <MdHomeWork className="text-yellow-400" size={44} />,
  },
  {
    title: "Interior Designs",
    desc: "Beautiful, Functional Interior Designs Thoughtfully Created Around Our Customers' Style, Blending Comfort, Elegance, And Personality To Transform Every Space Into A Place You'll Love To Live And Work In.",
    icon: <MdOutlineDesignServices className="text-yellow-400" size={44} />,
  },
  {
    title: "Structural Repair",
    desc: "Reliable Structural Repair Services Designed To Strengthen, Stabilize, And Protect Your Building, Restoring Its Integrity And Ensuring Long-Lasting Safety, Durability, And Peace Of Mind.",
    icon: <MdBuild className="text-yellow-400" size={44} />,
  },
  {
    title: "Commercial",
    desc: "Professional Commercial Construction Services Tailored To Your Business Needs, Delivering High-Quality, Efficient, And Cost-Effective Solutions That Help Your Business Grow And Succeed.",
    icon: <MdBusiness className="text-yellow-400" size={44} />,
  },
  {
    title: "Renovation",
    desc: "Expert Renovation Services That Breathe New Life Into Your Space, Combining Quality Craftsmanship, Innovative Design, And Attention To Detail To Create A Beautiful, Functional Environment You'll Love.",
    icon: <MdAutorenew className="text-yellow-400" size={44} />,
  },
  {
    title: "Project Management",
    desc: "Comprehensive Project Management Services That Ensure Your Construction Project Stays On Track, On Budget, And Meets Your Expectations Through Expert Planning, Coordination, And Communication.",
    icon: <MdAssignmentTurnedIn className="text-yellow-400" size={44} />,
  },
];

export default function Services() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-10 px-2 mt-20 md:px-16 bg-[#fafbfc]">
      <div className="mx-auto">
        <h2
          className="text-2xl md:text-4xl font-bold mb-2 mx-3 text-gray-900"
          style={{ lineHeight: 1.1 }}
        >
          We Provide <span className="text-[#F4B400] italic">Services</span>
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 mx-3 max-w-2xl">
          From Planning To Completion. We Deliver Reliable, High-Quality
          Construction Solutions Built To Last.
        </p>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          navigation={{
            nextEl: ".services-swiper-next",
            prevEl: ".services-swiper-prev",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mb-8 max-md:mx-4"
          ref={swiperRef}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: false },
            780: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={service.title}>
              <div
                className={`flex flex-col items-start justify-between h-full p-6 rounded-2xl transition-all duration-300 select-none bg-white ${
                  activeIndex === idx
                    ? "shadow-2xl border-2 border-yellow-400 ring-2 ring-yellow-300/40"
                    : "border border-transparent"
                }`}
                style={{ minHeight: "320px" }}
              >
                <div className="mb-4">{service.icon}</div>
                <h4
                  className="font-bold text-lg md:text-xl mb-2 text-gray-900"
                  style={{ lineHeight: 1.15 }}
                >
                  {service.title}
                </h4>
                <p
                  className="text-xs md:text-sm text-gray-700 mb-6"
                  style={{ lineHeight: 1.4 }}
                >
                  {service.desc}
                </p>
                <Link href="/Services" className="w-full">
                <button
                  className={`flex space-between items-center w-full gap-2 px-5 py-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 border-2 cur focus:outline-none ${
                    activeIndex === idx
                      ? "bg-yellow-400 border-yellow-400 text-gray-900 shadow-lg"
                      : "bg-white border-yellow-400 text-gray-900 hover:bg-yellow-50"
                  }`}
                  style={{
                    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                  }}
                >
                 Learn More
                  <IoArrowForwardOutline size={20} className="" />
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <div className="flex justify-center gap-6">
          <button
            className="services-swiper-prev bg-white max-xl:text-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow max-xl:bg-[#F4B400] hover:bg-[#F4B400] hover:text-white transition"
            aria-label="Previous"
          >
            <IoArrowBackOutline size={22} />
          </button>
          <button
            className="services-swiper-next max-xl:bg-[#F4B400] max-xl:text-white bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#F4B400] hover:text-white transition"
            aria-label="Next"
          >
            <IoArrowForwardOutline size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
