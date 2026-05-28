"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
const cutting = [
  ["Women's Wash/Cut/Style", "â‚¹2500"],
  ["Men's Cut", "â‚¹1200"],
  ["Children's Cut", "â‚¹900"],
  ["Women's Wash And Style", "â‚¹1800"],
  ["Formal Style", "â‚¹3500"],
  ["Hair Treatments", "â‚¹1500"],
];

const colouring = [
  ["Colour Retouch", "â‚¹4500"],
  ["Partial Foil", "â‚¹6500"],
  ["Full Foil", "â‚¹9000"],
];

const waxing = [
  ["Facial Waxing & Threading", "â‚¹700"],
  ["Eyebrow", "â‚¹300"],
  ["Lip & Chin", "â‚¹450"],
  ["Threading", "â‚¹500"],
  ["Eyelash Extensions", "â‚¹4500"],
  ["Powder & Ombre Brows", "â‚¹6500"],
];

export default function MenuPage() {
  return (
    <main className="bg-transparent min-h-screen overflow-x-hidden">

      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">

     <img
  src="/menu.png"
  alt="Luxury Beauty"
  className="
    absolute
    inset-0

    w-full
    h-full

    object-cover

    object-[100%_center]
  "
/>

        <div className="absolute inset-0 bg-black/35" />

      </div>

      {/* HERO */}
      <section className="relative pt-[118px] pb-6 overflow-hidden">

        <div
          className="
            relative
            z-20

            max-w-[95%] lg:max-w-4xl
            mx-auto

            bg-black/75
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

                text-[2rem]
                sm:text-[3rem]
                lg:text-[3.8rem]

                leading-none
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              MENU
            </h1>

          </div>

        </div>

      </section>

      {/* MAIN */}
      <section className="relative z-20 pb-24 -mt-[82px]">

        <div
          className="
            relative
            z-20

            max-w-[95%] lg:max-w-4xl
            mx-auto

            bg-black/72
            backdrop-blur-xl

            rounded-[42px]

            border
            border-white/10

            px-8
            lg:px-5 lg:px-14

            py-14

            shadow-none
          "
        >

          {/* HEADER */}
          <div className="mb-16">

            <h2
              className="
                text-white

                text-3xl lg:text-5xl
                mb-6
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              SERVICE MENU
            </h2>

            <div className="flex items-center gap-3 mb-10">

              <div className="w-44 h-[2px] bg-[#c8a76d]" />

              <div className="text-[#c8a76d] text-xl">âœ¦</div>

            </div>

            <h3
              className="
                text-[#c8a76d]

                text-[1rem] lg:text-[1rem] lg:text-[2rem]
                lg:text-[3rem]

                leading-tight

                mb-8
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Healthy Hair Services
              <br />
              For All Hair Types
            </h3>

            <p
              className="
                text-white/80

                text-[1rem]
                lg:text-[1.08rem]

                leading-[2]

                max-w-[95%] lg:max-w-5xl
              "
            >
              Experience luxury hair and beauty services
              tailored to your style. From elegant cuts and
              premium colouring to beauty treatments and
              grooming, our salon delivers sophistication,
              confidence and self-care in every experience.
            </p>

          </div>

          {/* CUTTING */}
          <div className="mb-20">

            <h2
              className="
                text-white

                text-2xl lg:text-4xl
                mb-10
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              CUTTING
            </h2>

            <div className="space-y-7">

              {cutting.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-5

                    text-white

                    hover:translate-x-2

                    duration-300
                  "
                >

                  <span
                    className="
                      uppercase

                      tracking-[0.15em]

                      text-[1rem]
                      lg:text-[1.15rem]

                      break-words
                    "
                  >
                    {item[0]}
                  </span>

                  <div className="flex-1 border-b border-[#5c3b0c]" />

                  <span
                    className="
                      text-[#ffffff]

                      tracking-[0.12em]

                      text-[1rem]
                      lg:text-[1.2rem]

                      break-words
                    "
                  >
                    {item[1]}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* COLOURING */}
          <div className="mb-20">

            <h2
              className="
                text-white

                text-2xl lg:text-4xl
                mb-10
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              COLOURING
            </h2>

            <div className="space-y-7">

              {colouring.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2 lg:gap-2 lg:gap-5

                    text-white

                    hover:translate-x-2

                    duration-300
                  "
                >

                  <span
                    className="
                      uppercase

                      tracking-[0.15em]

                      text-[1rem]
                      lg:text-[1.15rem]

                      break-words
                    "
                  >
                    {item[0]}
                  </span>

                  <div className="flex-1 border-b border-[#5c3b0c]" />

                  <span
                    className="
                      tracking-[0.12em]

                      text-[1rem]
                      lg:text-[1.2rem]

                      break-words
                    "
                  >
                    {item[1]}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* WAXING */}
          <div className="mb-16">

            <h2
              className="
                text-white

                text-2xl lg:text-4xl
                mb-10
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              BEAUTY & WAXING
            </h2>

            <div className="space-y-7">

              {waxing.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2 lg:gap-5

                    text-white

                    hover:translate-x-2

                    duration-300
                  "
                >

                  <span
                    className="
                      uppercase

                      tracking-[0.15em]

                      text-[1rem]
                      lg:text-[1.15rem]

                      break-words
                    "
                  >
                    {item[0]}
                  </span>

                  <div className="flex-1 border-b border-[#5c3b0c]" />

                  <span
                    className="
                      tracking-[0.12em]

                      text-[1rem]
                      lg:text-[1.2rem]

                      break-words
                    "
                  >
                    {item[1]}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* NOTE */}
          <p
            className="
              text-white/75

              leading-[2]

              text-sm
              lg:text-base

              mb-12
            "
          >
            * Prices may vary according to level of stylist.
            Chemical services do not include cut & style.
            Kindly provide 24-hour cancellation notice.
          </p>

          {/* BUTTON */}
          <div className="flex justify-center">
<Link href="/book">
  <button
              className="
                bg-[#c8a76d]
                text-white

                w-full sm:w-auto px-10
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

        </div>

      </section>
<Footer />
    </main>
  );
}
