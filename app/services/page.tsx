"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  GiScissors,
  GiBeard,
  GiLipstick,
  GiHairStrands,
  GiLargeDress,
} from "react-icons/gi";

import {
  FaSpa,
  FaPaintBrush,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    title: "HAIR CUT & STYLING",
    text: "From modern fades and textured cuts for men to elegant layers, blowouts and styling for women, our expert stylists create looks tailored perfectly to your personality.",
    icon: <GiScissors />,
  },

  {
    title: "HAIR COLOUR & BALAYAGE",
    text: "Luxury colouring services including balayage, highlights, global colour, grey blending and custom tones designed beautifully for both men and women.",
    icon: <FaPaintBrush />,
  },

  {
    title: "BRIDAL & GROOM MAKEOVERS",
    text: "Complete bridal and groom styling experiences with premium hairstyling, makeup artistry and luxury grooming tailored for unforgettable celebrations.",
    icon: (
      <div className="flex items-center gap-2">
        <GiLargeDress />
        <FaUserTie />
      </div>
    ),
  },

  {
    title: "BEARD & MEN'S GROOMING",
    text: "Precision beard shaping, modern grooming treatments and premium hair services crafted for the modern gentleman seeking confidence and sophistication.",
    icon: <GiBeard />,
  },

  {
    title: "SKIN, LASH & BROW BEAUTY",
    text: "Enhance your features with luxury skincare, eyelash extensions, brow shaping and beauty treatments designed for naturally flawless results.",
    icon: <GiLipstick />,
  },

  {
    title: "HAIR SPA & TREATMENTS",
    text: "Revitalize damaged hair with nourishing spa rituals, keratin treatments and deep conditioning therapies for healthy, smooth and luxurious hair.",
    icon: <GiHairStrands />,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-transparent min-h-screen overflow-x-hidden">

      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">

        <img
          src="/menwom.jpeg"
          alt="Luxury Salon"
          className="
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

      </div>

      {/* HERO */}overflow-hidden
      <section className="relative pt-[118px] h-[130px] ">

        <div
          className="
            relative
            z-20

            max-w-4xl
            mx-auto

            bg-black/72
            backdrop-blur-xl

            rounded-[40px]

            border
            border-white/10

            py-4

            shadow-none
          "
        >

          <div className="flex justify-center items-center">

            <h1
              className="
                text-white
text-[1rem] lg:text-[2rem]
                lg:text-[3.4rem]

                leading-none
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              SERVICES
            </h1>

          </div>

        </div>

      </section>

      {/* MAIN SECTION */}
      <section className="relative z-20 pb-24 -mt-[82px]">

        <div
          className="
            relative
            z-20

            max-w-4xl
            mx-auto

            bg-black/72
            backdrop-blur-xl

            rounded-[42px]

            border
            border-white/10

            px-7
            lg:px-12

            py-12

            shadow-none
          "
        >

          {/* INTRO */}
          <div
            className="
              grid
              lg:grid-cols-1 md:grid-cols-2

              gap-2 lg:gap-5 lg:gap-10
              items-center

              border-b
              border-[#3b2507]/80

              pb-14
            "
          >

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[30px]">

              <img
                src="/salon.jpg"
                alt="Salon"
                className="
                  w-full
                  h-[300px]
                  object-cover

                  hover:scale-110

                  duration-700
                "
              />

            </div>

            {/* TEXT */}
            <div>

              <p
                className="
                  text-[#c8a76d]

                  uppercase
                  tracking-[0.35em]

                  text-[11px]
                  mb-5
                "
              >
                Luxury Salon Experience
              </p>

              <h2
                className="
                  text-white

                  text-[1.6rem]
                  lg:text-[2.6rem]

                  leading-[1.1]

                  mb-6
                "
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                BEAUTY THAT
                <br />
                FEELS LUXURIOUS
              </h2>

              <div className="w-20 h-[2px] bg-[#5c3b0c] mb-7" />

              <p
                className="
                  text-white/75

                  text-[0.98rem]
                  lg:text-[1.04rem]

                  leading-[2]
                "
              >
                Experience elevated beauty and grooming
                designed around elegance, confidence and
                sophistication for both men and women.
              </p>

            </div>

          </div>

          {/* CONSULTATION */}
          <div
            className="
              text-center

              py-16

              border-b
              border-[#3b2507]/80
            "
          >

            <h2
              className="
                text-white
                text-2xl lg:text-4xl
                mb-8
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              CONSULTATION
            </h2>

            <p
              className="
                text-white/80

                max-w-3xl
                mx-auto

                text-[1rem]
                lg:text-[1.1rem]

                leading-[2]
              "
            >
              Let’s create a personalized beauty and
              grooming experience 
              <br />tailored perfectly
              around your style, personality and vision.
            </p>
<Link href="/book">
  

            <button
              className="
                mt-10

                bg-[#c8a76d]
                text-white

                px-8
                py-4

                rounded-full

                uppercase
                tracking-[0.18em]

                text-sm
                font-semibold

                hover:bg-white
                hover:text-black

                hover:scale-105

                duration-300
              "
            >
              BOOK NOW
            </button>
</Link>
          </div>

          {/* WHAT WE DO */}
          <div className="py-16">

            <h2
              className="
                text-center
                text-[#c8a76d]

                text-3xl lg:text-5xl
                mb-16
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              What We Do
            </h2>

            {/* SERVICES */}
            <div className="space-y-10">

              {services.map((service, index) => (
                <div
                  key={index}
                  className="
                    group

                    bg-black/70
                    backdrop-blur-xl

                    rounded-[38px]

                    border
                    border-white/10

                    p-8
                    lg:p-10

                    hover:bg-black/85

                    hover:-translate-y-2
                    hover:scale-[1.015]

                    hover:border-[#c8a76d]/30

                    duration-500

                    shadow-none
                  "
                >

                  <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* ICON */}
                    <div
                      className="
                        flex
                        items-center
                        justify-center

                        w-[120px]
                        h-[120px]

                        rounded-[32px]

                        bg-[#c8a76d]/5

                        border
                        border-[#c8a76d]/20

                        text-[#c8a76d]

                        text-[3.7rem]

                        group-hover:scale-110
                        group-hover:rotate-3

                        duration-500

                        shadow-none

                        shrink-0
                      "
                    >
                      {service.icon}
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">

                      <h3
                        className="
                          text-white

                          text-[1.8rem]
                          lg:text-[2.4rem]

                          leading-tight

                          mb-5
                        "
                        style={{
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        {service.title}
                      </h3>

                      <div className="w-20 h-[2px] bg-[#5c3b0c] mb-6" />

                      <p
                        className="
                          text-white/75

                          text-[0.98rem]
                          lg:text-[1.04rem]

                          leading-[2]

                          max-w-[760px]
                        "
                      >
                        {service.text}
                      </p>

                      <Link href="/contact">

                        <button
                          className="
                            mt-8

                            bg-[#c8a76d]
                            text-white

                            px-7
                            py-3

                            rounded-full

                            uppercase
                            tracking-[0.18em]

                            text-xs
                            font-semibold

                            hover:bg-white
                            hover:text-black

                            hover:scale-105

                            duration-300
                          "
                        >
                          READ MORE
                        </button>

                      </Link>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      
      
<Footer />
    </main>
  );
}