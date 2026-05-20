"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
export default function BookPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = () => {

    const text = `
✨ LUXE SALON BOOKING ✨

Name: ${form.name}

Phone: ${form.phone}

Service: ${form.service}

Date: ${form.date}

Time: ${form.time}

Message: ${form.message}
`;

    const url = `https://wa.me/916363256821?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <main className="bg-black min-h-screen overflow-hidden">

      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">

        <img
          src="/women.png"
          alt="Luxury Salon"
          className="
            absolute
            inset-0

            w-full
            h-full

            object-cover

            object-center
          "
        />

        <div className="absolute inset-0 bg-black/75" />

      </div>

      {/* HERO */}
      <section className="relative z-20 mt-30 pt-[135px]">

        <div
          className="
            max-w-5xl
            mx-auto

            bg-black/75
            backdrop-blur-xl

            rounded-[42px]

            border
            border-white/10

            py-6

            text-center
          "
        >

          <h1
            className="
              text-white

              text-[2.5rem]
              lg:text-[4.5rem]

              leading-none
            "
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            BOOK NOW
          </h1>

        </div>

      </section>

      {/* FORM */}
      <section className="relative z-20 py-14">

        <div
          className="
            max-w-5xl
            mx-auto

            bg-black/70
            backdrop-blur-xl

            rounded-[42px]

            border
            border-white/10

            p-8
            lg:p-14

            shadow-[0_25px_80px_rgba(0,0,0,0.5)]
          "
        >

          <div className="grid lg:grid-cols-2 gap-14">

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
                Luxury Appointment
              </p>

              <h2
                className="
                  text-white

                  text-[2rem]
                  lg:text-[3.2rem]

                  leading-[1.1]

                  mb-6
                "
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Reserve Your
                <br />
                Salon Experience
              </h2>

              <div className="w-20 h-[2px] bg-[#5c3b0c] mb-7" />

              <p
                className="
                  text-white/75

                  leading-[2]

                  text-[1rem]
                "
              >
                Schedule your luxury salon appointment
                with our expert beauty and grooming team.
                Choose your preferred service, time and
                experience premium care tailored just for you.
              </p>

              <img
                src="/salon.jpg"
                alt="Salon"
                className="
                  mt-10

                  w-full
                  h-[320px]

                  object-cover

                  rounded-[30px]

                  border
                  border-white/10
                "
              />

            </div>

            {/* RIGHT */}
            <div className="space-y-6">

              {/* NAME */}
              <input
                type="text"
                placeholder="Full Name"
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
                  py-5

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
                  py-5

                  text-white

                  outline-none

                  focus:border-[#c8a76d]

                  duration-300
                "
              />

             {/* SERVICE */}
<div className="relative">

  <select
    value={form.service}
    onChange={(e) =>
      setForm({ ...form, service: e.target.value })
    }
    className="
      w-full

      appearance-none

      bg-[#111111]/90

      border
      border-[#c8a76d]/30

      rounded-[20px]

      px-6
      py-5

      text-white

      outline-none

      focus:border-[#c8a76d]
      focus:ring-2
      focus:ring-[#c8a76d]/20

      duration-300

      shadow-[0_10px_30px_rgba(0,0,0,0.35)]
    "
  >

    <option
      value=""
      className="bg-[#111111] text-white"
    >
      Select Service
    </option>

    <option
      value="Hair Cut & Styling"
      className="bg-[#111111]"
    >
      Hair Cut & Styling
    </option>

    <option
      value="Hair Colour"
      className="bg-[#111111]"
    >
      Hair Colour
    </option>

    <option
      value="Hair Spa"
      className="bg-[#111111]"
    >
      Hair Spa
    </option>

    <option
      value="Bridal Makeup"
      className="bg-[#111111]"
    >
      Bridal Makeup
    </option>

    <option
      value="Beard Grooming"
      className="bg-[#111111]"
    >
      Beard Grooming
    </option>

    <option
      value="Eyelash Extensions"
      className="bg-[#111111]"
    >
      Eyelash Extensions
    </option>

    <option
      value="Eyebrow Shaping"
      className="bg-[#111111]"
    >
      Eyebrow Shaping
    </option>

  </select>

  {/* CUSTOM ARROW */}
  <div
    className="
      absolute
      right-6
      top-1/2
      -translate-y-1/2

      pointer-events-none

      text-[#c8a76d]

      text-lg
    "
  >
    ▼
  </div>

</div>

            {/* DATE */}
<div className="relative">

  <input
    type="date"
    value={form.date}
    onChange={(e) =>
      setForm({ ...form, date: e.target.value })
    }
    className="
      w-full

      bg-[#111111]/90

      border
      border-[#c8a76d]/30

      rounded-[20px]

      px-6
      py-5

      text-white

      outline-none

      focus:border-[#c8a76d]
      focus:ring-2
      focus:ring-[#c8a76d]/20

      duration-300

      shadow-[0_10px_30px_rgba(0,0,0,0.35)]

      [color-scheme:dark]
    "
  />

</div>
{/* TIME */}
<div className="relative">

  <input
    type="time"
    value={form.time}
    onChange={(e) =>
      setForm({ ...form, time: e.target.value })
    }
    className="
      w-full

      bg-[#111111]/90

      border
      border-[#c8a76d]/30

      rounded-[20px]

      px-6
      py-5

      text-white

      outline-none

      focus:border-[#c8a76d]
      focus:ring-2
      focus:ring-[#c8a76d]/20

      duration-300

      shadow-[0_10px_30px_rgba(0,0,0,0.35)]

      [color-scheme:dark]
    "
  />

</div>

              {/* MESSAGE */}
              <textarea
                placeholder="Additional Notes"
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
                  py-5

                  text-white

                  outline-none

                  resize-none

                  focus:border-[#c8a76d]

                  duration-300
                "
              />

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                className="
                  w-full

                  bg-[#c8a76d]
                  text-white

                  py-5

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
                CONFIRM BOOKING
              </button>

            </div>

          </div>

        </div>

      </section>
<Footer />
    </main>
  );
}