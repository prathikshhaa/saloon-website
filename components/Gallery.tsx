"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
];

export default function Gallery() {
  return (
   <section id="gallery">
      <div className="mb-16">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c6a972] mb-4">
          Gallery
        </p>

        <h2 className="text-3xl lg:text-5xl mb-6">
          Our Beauty Work
        </h2>
      </div>

      <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-[30px]"
          >
            <img
              src={image}
              alt="Salon"
              className="h-[320px] lg:h-[500px] w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}