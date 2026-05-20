"use client";

export default function Services() {
  return (
    <section id="services">

      <div className="mb-24">
        <p className="uppercase tracking-[0.4em] text-sm text-[#c6a972] mb-5">
          Services
        </p>

        <h2 className="text-5xl lg:text-7xl leading-tight max-w-4xl">
          Crafted grooming and beauty experiences for modern lifestyles.
        </h2>
      </div>

      <div className="space-y-32">

        {/* SERVICE 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186"
            alt="Hair Styling"
            className="rounded-[40px] h-[650px] w-full object-cover"
          />

          <div>
            <p className="text-[#c6a972] uppercase tracking-[0.3em] mb-6">
              Hair Styling
            </p>

            <h3 className="text-5xl mb-8">
              Precision cuts and luxury styling.
            </h3>

            <p className="text-black/60 text-lg leading-relaxed mb-10">
              From modern fades to elegant styling,
              our artists create looks tailored to your personality.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-[#c6a972] hover:text-black">
              Explore More
            </button>
          </div>

        </div>

        {/* SERVICE 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-[#c6a972] uppercase tracking-[0.3em] mb-6">
              Skin & Beauty
            </p>

            <h3 className="text-5xl mb-8">
              Rejuvenation designed for confidence.
            </h3>

            <p className="text-black/60 text-lg leading-relaxed mb-10">
              Experience facials, skincare and beauty treatments
              using premium products and expert techniques.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-[#c6a972] hover:text-black">
              Explore More
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="Beauty"
            className="rounded-[40px] h-[650px] w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}