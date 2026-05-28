"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        relative
        z-20

        mt-20

        bg-black/85
        backdrop-blur-xl

        border-t
        border-white/10
      "
    >

      <div
        className="
          max-w-[95%] lg:max-w-7xl
          mx-auto

          px-6
          lg:w-full sm:w-auto px-10

          py-16
        "
      >

        <div
          className="
            grid
            lg:grid-cols-4

            gap-6 lg:gap-14
          "
        >

          {/* LOGO */}
          <div>

            <h2
              className="
                text-white

                text-2xl lg:text-4xl

                mb-5
              "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              LUXE
            </h2>

            <p
              className="
                text-white/60

                leading-[2]

                text-sm
              "
            >
              Experience premium beauty, grooming and
              luxury salon services designed for both
              men and women.
            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3
              className="
                text-[#c8a76d]

                uppercase
                tracking-[0.18em]

                text-sm

                mb-6
              "
            >
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link
                href="/"
                className="block text-white/70 hover:text-[#c8a76d] duration-300"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="block text-white/70 hover:text-[#c8a76d] duration-300"
              >
                Services
              </Link>

              <Link
                href="/menu"
                className="block text-white/70 hover:text-[#c8a76d] duration-300"
              >
                Menu
              </Link>

              <Link
                href="/gallery/women"
                className="block text-white/70 hover:text-[#c8a76d] duration-300"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className="block text-white/70 hover:text-[#c8a76d] duration-300"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3
              className="
                text-[#c8a76d]

                uppercase
                tracking-[0.18em]

                text-sm

                mb-6
              "
            >
              Services
            </h3>

            <div className="space-y-4 text-white/70">

              <p>Hair Styling</p>
              <p>Hair Colour</p>
              <p>Bridal Makeup</p>
              <p>Beard Grooming</p>
              <p>Hair Spa</p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3
              className="
                text-[#c8a76d]

                uppercase
                tracking-[0.18em]

                text-sm

                mb-6
              "
            >
              Contact
            </h3>

            <div className="space-y-4 text-white/70">

              <p>+91 6363256821</p>

              <p>
                luxebeauty@gmail.com
              </p>

              <p>
                Mangalore, India
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-white/10

            mt-14
            pt-8

            text-center
          "
        >

          <p
            className="
              text-white/45

              text-sm

              tracking-[0.12em]
            "
          >
            © 2026 LUXE SALON — ALL RIGHTS RESERVED
          </p>

        </div>

      </div>

    </footer>
  );
}