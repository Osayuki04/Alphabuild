import React from "react" 
import Image from "next/image"
import logoPic from "./../../../public/icons/logo.svg"

 const Logo = ({ width , height, className, textsize = "text-xl" }) => (
  <a href="./" data-aos="fade-right" className={"flex justify-center items-center " + className}>
  <Image
    src={logoPic}
    alt="AlphaBuild"
    width={width}
    height={height}
    className={className}
  />
  <span className={`${textsize} mt-2.5 font-bold  mr-8`}>AlphaBuild</span>
  </a>
);
export default Logo