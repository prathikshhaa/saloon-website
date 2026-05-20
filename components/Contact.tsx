export default function Contact() {
  return (
    <section id="contact">
      <div className="grid lg:grid-cols-2 gap-16">

        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#c6a972] mb-4">
            Contact
          </p>

          <h2 className="text-5xl mb-8">
            Book Your Luxury Experience
          </h2>

          <div className="space-y-6 text-lg text-black/70">
            <p>+91 98765 43210</p>
            <p>luxesalon@gmail.com</p>
            <p>Mangalore, Karnataka</p>
          </div>
        </div>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-5 rounded-2xl border border-black/10 bg-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-5 rounded-2xl border border-black/10 bg-white"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full p-5 rounded-2xl border border-black/10 bg-white"
          />

          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-[#c6a972] hover:text-black">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}