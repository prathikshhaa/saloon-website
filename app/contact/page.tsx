"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSendMessage = () => {

    const text = `
✨ LUXE SALON CONTACT ✨

Name: ${form.name}

Email: ${form.email}

Phone: ${form.phone}

Message:
${form.message}
    `;

    const whatsappUrl =
      `https://wa.me/916363256821?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-black min-h-screen overflow-hidden">

      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">

        <img
          src="/women.png"
          alt="Contact Background"
          className="
            absolute
            inset-0

            w-full
            h-full

            object-cover

            object-center
          "
        />

        <div className="absolute inset-0 bg-black/70" />

      </div>

      {/* HERO */}
      <section className="relative z-20 mt-30 pt-[130px]">

        <div
          className="
            max-w-4xl
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

              text-[2.3rem]
              lg:text-[4rem]
            "
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            CONTACT US
          </h1>

        </div>

      </section>

      {/* CONTACT CARD */}
      <section className="relative z-20 py-16">

        <div
          className="
            max-w-5xl
            mx-auto

            bg-black/72
            backdrop-blur-xl

            rounded-[42px]

            border
            border-white/10

            p-10
            lg:p-14

            shadow-[0_25px_80px_rgba(0,0,0,0.5)]
          "
        >

          <div
            className="
              grid
              lg:grid-cols-2

              gap-14
            "
          >

            {/* LEFT */}
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
                Luxury Beauty Experience
              </p>

              <h2
                className="
                  text-white

                  text-[2rem]
                  lg:text-[3rem]

                  leading-[1.1]

                  mb-6
                "
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Let's Create
                <br />
                Your Perfect Look
              </h2>

              <div className="w-20 h-[2px] bg-[#5c3b0c] mb-7" />

              <p
                className="
                  text-white/75

                  leading-[2]

                  text-[1rem]
                "
              >
                Book appointments, ask questions or
                connect with our luxury beauty team.
                We’re here to help you experience
                premium salon care and grooming.
              </p>

              <div className="mt-10 space-y-5">

                <div>
                  <p className="text-[#c8a76d] uppercase text-sm mb-1">
                    Phone
                  </p>

                  <p className="text-white/80">
                    +91 6363256821
                  </p>
                </div>

                <div>
                  <p className="text-[#c8a76d] uppercase text-sm mb-1">
                    Email
                  </p>

                  <p className="text-white/80">
                    luxebeauty@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-[#c8a76d] uppercase text-sm mb-1">
                    Location
                  </p>

                  <p className="text-white/80">
                    Mangalore, India
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="space-y-6">

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="
                  w-full

                  bg-white/5

                  border
                  border-white/10

                  rounded-[20px]

                  px-6
                  py-3

                  text-white

                  outline-none

                  focus:border-[#c8a76d]

                  duration-300
                "
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="
                  w-full

                  bg-white/5

                  border
                  border-white/10

                  rounded-[20px]

                  px-6
                  py-3

                  text-white

                  outline-none

                  focus:border-[#c8a76d]

                  duration-300
                "
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="
                  w-full

                  bg-white/5

                  border
                  border-white/10

                  rounded-[20px]

                  px-6
                  py-3

                  text-white

                  outline-none

                  focus:border-[#c8a76d]

                  duration-300
                "
              />

              {/* MESSAGE */}
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="
                  w-full

                  bg-white/5

                  border
                  border-white/10

                  rounded-[20px]

                  px-6
                  py-3

                  text-white

                  outline-none

                  resize-none

                  focus:border-[#c8a76d]

                  duration-300
                "
              />

              {/* BUTTON */}
              <button
                onClick={handleSendMessage}
                className="
                  w-full

                  bg-[#c8a76d]
                  text-white

                  py-3

                  rounded-[20px]

                  uppercase
                  tracking-[0.18em]

                  text-sm
                  font-semibold

                  hover:bg-white
                  hover:text-black

                  hover:scale-[1.02]

                  active:scale-[0.98]

                  duration-300
                "
              >
                SEND MESSAGE
              </button>

            </div>

          </div>

        </div>

      </section>
<Footer />
    </main>
  );
}