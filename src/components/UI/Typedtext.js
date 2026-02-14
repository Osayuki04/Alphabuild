"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingText({
  words = ["Build faster.", "Ship smarter.", "Scale better."],
  typeSpeed = 60,
  backSpeed = 40,
  loop = true,
  className = "text-xl font-bold",
}) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: words,
      typeSpeed,
      backSpeed,
      loop,
    });

    return () => typed.destroy();
  }, [words, typeSpeed, backSpeed, loop]);

  return <span ref={el} className={className} />;
}
