export default function Menu() {
  return (
    <section id="menu">

      <div className="mb-20">
        <p className="uppercase tracking-[0.4em] text-sm text-[#c6a972] mb-5">
          Pricing Menu
        </p>

        <h2 className="text-3xl lg:text-5xl lg:text-7xl">
          Premium Services
        </h2>
      </div>

      <div className="space-y-10">

        {[
          ["Hair Cut", "₹499"],
          ["Hair Coloring", "₹1999"],
          ["Facial Treatment", "₹1499"],
          ["Beard Styling", "₹399"],
          ["Luxury Spa", "₹2499"],
        ].map(([service, price]) => (
          <div
            key={service}
            className="flex items-center justify-between border-b border-black/10 pb-6"
          >
            <h3 className="text-2xl">
              {service}
            </h3>

            <p className="text-xl text-black/60">
              {price}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}