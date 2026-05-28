"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function AboutSection() {
  return (
    <section className="relative bg-white overflow-hidden py-8 lg:py-10">

      {/* BACKGROUND WOMAN IMAGE */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <img
          src="/change-woman.png"
          alt="Luxury Beauty"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-auto w-[55%] lg:w-[45%] max-h-[95vh] object-cover object-left opacity-100"
        />
        <div className="absolute inset-0 bg-white/12" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[95%] lg:max-w-7xl mx-auto px-6 lg:px-16">

        <div className="flex justify-end items-center min-h-[260px] sm:h-[340px] lg:h-[430px]">

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-[720px]"
            style={{ willChange: "transform, opacity" }}
          >

            {/* SMALL TEXT */}
            <p
              className="
                text-[#c8a76d]
                tracking-[0.28em]
                uppercase
                text-[11px]
                sm:text-xs
                mb-4
              "
            >
              Luxury Salon Experience
            </p>

            {/* HEADING */}
            <h2
              className="
                text-black
                font-semibold
                leading-[1]

                text-[2.5rem]
                sm:text-[3rem]
                lg:text-[4rem]
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              TIME FOR A CHANGE?
            </h2>

            {/* GOLD LINE */}
            <div className="w-24 h-[2px] bg-[#c8a76d] mt-5 mb-8" />

            {/* DESCRIPTION */}
            <p
              className="
                text-black/85
                text-[1rem]
                md:text-[1.08rem]
                leading-[2.1]
                tracking-[0.01em]
                text-left
              "
              style={{
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Discover a luxurious beauty and self-care experience
designed to enhance your confidence and style. From
precision hair styling to premium grooming and skincare,
our salon delivers personalized services tailored to your
unique personality. Whether you’re refreshing your look
or preparing for a special occasion, our expert team is
dedicated to making you look and feel your absolute best.
            </p>

            {/* BUTTON */}
<Link href="/book">
 

            <button
              className="
                mt-10
                bg-[#c8a76d]
                text-white

                px-8
                py-4

                tracking-[0.16em]
                text-sm
                font-semibold

                hover:bg-black
                duration-300
              "
            >
              BOOK NOW
            </button>
</Link>
          </motion.div>

        </div>

      </div>

    </section>
  );
}