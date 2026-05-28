"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = {
  HAIRSTYLES: [
    "/hg1.jpg",
    "/hg2.jpg",
    "/hg3.jpg",
    "/hg4.jpg",
    "/hg5.jpg",
    "/hg6.jpg",
  ],

  EYELASH: [
    "/l1.jpg",
    "/l2.jpg",
    "/l3.jpg",
    "/l4.jpg",
    "/l5.jpg",
    "/l6.jpg",
  ],

  EYEBROWS: [
    "/e1.jpg",
    "/e2.jpg",
    "/e3.jpg",
    "/e4.jpg",
    "/e5.jpg",
    "/e6.jpg",
  ],
};

export default function WomenGalleryPage() {

  const [active, setActive] = useState("HAIRSTYLES");

  return (
    <main className="bg-black min-h-screen overflow-x-hidden">

      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">

        <img
          src="/women.png"
          alt="Women Background"
          className="
            absolute
            inset-0

            w-full
            h-full

            object-cover

            object-[85%_center]
          "
        />

        <div className="absolute inset-0 bg-black/60" />

      </div>

      {/* HERO */}
      <section className="relative z-30 mt-30 pt-[115px]">

        <div
          className="
            max-w-[95%] lg:max-w-4xl
            mx-auto

            bg-black/75
            backdrop-blur-xl

            rounded-[40px]

            border
            border-white/10

            py-3

            text-center
          "
        >

          <h1
            className="
              text-white

              text-[2.2rem]
              lg:text-[3.8rem]

              leading-none
            "
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            WOMEN'S GALLERY
          </h1>

        </div>

      </section>

      {/* CATEGORY TABS */}
      <section className="relative z-20 pt-2">

        <div
          className="
           max-w-[95%] lg:max-w-6xl
            mx-auto

            flex
            flex-wrap

            gap-15

            px-6

            mb-2
          "
        >

          {Object.keys(categories).map((category) => (

            <button
              key={category}
              onClick={() => setActive(category)}
              className="
                relative

                text-white

                text-[1.2rem]
                lg:text-[1rem] lg:text-[2rem]

                font-semibold

                tracking-[0.08em]

                pb-4

                duration-300
              "
            >

              {category}

              {active === category && (
                <div
                  className="
                    absolute
                    left-0
                    bottom-0

                    w-full
                    h-[3px]

                    bg-[#c8a76d]

                    rounded-full
                  "
                />
              )}

            </button>

          ))}

        </div>

      </section>

      {/* GALLERY */}
      <section className="relative z-20 -mt-8 pb-16">

        <div
          className="
            max-w-[95%] lg:max-w-7xl
            mx-auto

            grid
            grid-cols-1
            sm:grid-cols-1 md:grid-cols-2
            lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

            gap-15

            px-6
          "
        >

          {categories[active as keyof typeof categories].map(
            (image, index) => (

              <div
                key={index}
                className="
                  group

                  relative

                  overflow-hidden

                  rounded-[38px]

                  bg-black/65
                  backdrop-blur-xl

                  border
                  border-white/10

                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]

                  hover:-translate-y-3
                  hover:scale-[1.02]

                  duration-500
                "
              >

                <div className="overflow-hidden">

                  <img
                    src={image}
                    alt="Gallery"
                    className="
                      w-full
                      h-[260px] sm:h-[340px] lg:h-[430px]

                      object-cover

                      group-hover:scale-110

                      duration-700
                    "
                  />

                </div>

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0

                    p-6
                  "
                >

                  <h3
                    className="
                      text-white

                      text-2xl

                      mb-2
                    "
                    style={{
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    Luxury Beauty
                  </h3>

                  <p
                    className="
                      text-white/70

                      text-sm

                      tracking-[0.15em]
                      uppercase
                    "
                  >
                    Premium Salon Experience
                  </p>

                </div>

              </div>
            )
          )}

        </div>

      </section>

      <Footer />

    </main>
  );
}