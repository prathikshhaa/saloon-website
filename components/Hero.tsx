"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/women.png",
    title: "ELEVATE YOUR STYLE",
    subtitle: "Luxury beauty, grooming and self-care experiences crafted for modern lifestyles.",
    align: "left",
  },
  {
    image: "/men.png",
    title: "MODERN GROOMING & BEAUTY",
    subtitle: "Premium styling, skincare and grooming designed for confidence and elegance.",
    align: "right",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-black sm:min-h-[95vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ willChange: "opacity, transform" }}
        >
          <motion.img
            src={slides[current].image}
            alt="Salon"
            className={`w-full h-full object-cover ${
              current === 0 ? "object-[88%_center]" : "object-[12%_center]"
            }`}
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "easeOut" }}
          />

          <div className="absolute inset-0 bg-black/15" />
          {current === 0 ? (
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-transparent" />
          )}
        </motion.div>
      </AnimatePresence>

      <div className={`relative z-10 flex h-full items-center ${
        slides[current].align === "right" ? "justify-end" : "justify-start"
      }`}>
        <div className={`mx-auto max-w-[95%] px-4 py-20 sm:px-6 sm:py-24 md:max-w-3xl ${
          slides[current].align === "right" ? "text-right" : "text-left"
        }`}>
          <motion.p
            key={`small-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[#d8b67a] text-base sm:text-lg tracking-wide mb-4 sm:mb-6"
          >
            Luxury • Confidence • Self Care
          </motion.p>

          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white font-bold leading-[1.02] text-[2.4rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]"
          >
            {slides[current].title}
          </motion.h1>

          <motion.p
            key={`subtitle-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className={`text-white/90 text-base sm:text-lg mt-6 leading-relaxed max-w-2xl ${
              slides[current].align === "right" ? "ml-auto" : ""
            }`}
          >
            {slides[current].subtitle}
          </motion.p>

          <motion.div
            key={`buttons-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className={`flex flex-wrap items-center gap-4 mt-8 ${
              slides[current].align === "right" ? "justify-end" : ""
            }`}
          >
            <a href="/services">
              <button className="bg-[#c8a76d] text-white px-6 py-3 tracking-[0.18em] text-sm font-semibold hover:bg-white hover:text-black duration-300">
                LEARN MORE
              </button>
            </a>
            <a href="tel:+919876543210" className="text-[#e1be85] text-sm sm:text-base tracking-[0.12em] font-semibold hover:text-white duration-300">
              CALL US (987) 654-3210
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[4px] rounded-full transition-all duration-500 ${
              current === index ? "w-12 bg-[#d8b67a]" : "w-7 bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
