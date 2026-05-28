"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Hair Styling",
    image: "/service1.jpg",
  },
  {
    title: "Makeup Art",
    image: "/service2.jpg",
  },
  {
    title: "Bridal Services",
    image: "/service3.jpg",
  },
  {
    title: "Hair Spa",
    image: "/service4.jpg",
  },
  {
    title: "Beard Styling",
    image: "/men1.jpg",
  },
  {
    title: "Hair Cut",
    image: "/men2.jpg",
  },
  {
    title: "Face Grooming",
    image: "/men3.jpg",
  },
  {
    title: "Premium Styling",
    image: "/men4.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-black py-20 overflow-hidden"
    >

      {/* TOP HEADING */}
      <div className="text-center mb-16">

        <p
          className="
            text-[#c8a76d]
            uppercase
            tracking-[0.3em]
            text-sm
            mb-4
          "
        >
          Our Service
        </p>

        <h2
          className="
            text-white
            text-[2.5rem]
            sm:text-[3rem]
            font-semibold
          "
          style={{
            fontFamily: "Playfair Display, serif",
          }}
        >
          WHAT WE DO
        </h2>

      </div>

      {/* SLIDER */}
      <div className="max-w-[95%] lg:max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={1200}
          spaceBetween={28}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="servicesSwiper"
        >

          {services.map((service, index) => (
            <SwiperSlide key={index}>

              <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: index * 0.08,
  }}
  viewport={{ once: true }}
  className="
    group
    relative
    overflow-hidden
    cursor-pointer
  "
>

  {/* IMAGE */}
  <div className="overflow-hidden">

    <img
      src={service.image}
      alt={service.title}
      className="
        w-full
        h-[260px] sm:h-[340px] lg:h-[430px]
        object-cover

        transition-all
        duration-700

        group-hover:scale-110
      "
    />

  </div>

  {/* DARK OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-black/20

      group-hover:bg-black/55
      duration-500
    "
  />

  {/* CONTENT */}
  <div
    className="
      absolute
      inset-0
      flex
      flex-col
      justify-end
      p-5
    "
  >

    {/* TITLE */}
    <div
      className="
        bg-black/90
        px-5
        py-4

        transform
        duration-500

        group-hover:-translate-y-6
      "
    >

      <h3
        className="
          text-white
          uppercase
          tracking-wide
          text-lg
          font-medium
          leading-snug
        "
      >
        {service.title}
      </h3>

    </div>

    {/* READ MORE */}
    <div
      className="
        absolute
        inset-0

        flex
        items-center
        justify-center

        opacity-0
        group-hover:opacity-100

        duration-500
      "
    >

      <button
        className="
          border
          border-white

          text-white

          px-7
          py-3

          text-sm
          tracking-[0.18em]
          uppercase
          font-medium

          hover:bg-white
          hover:text-black

          duration-300
        "
      >
        Read More
      </button>

    </div>

  </div>

</motion.div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-14">

        <a href="/services">
  <button
    className="
      mt-10

      bg-[#c8a76d]
      text-white

      w-full sm:w-auto px-10
      py-4

      tracking-[0.18em]
      text-sm
      font-semibold

      hover:bg-white
      hover:text-black

      duration-300
    "
  >
    LEARN MORE
  </button>
</a>
      </div>

    </section>
  );
}