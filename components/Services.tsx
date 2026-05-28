const services = [
  "Product Development",
  "Custom Software Development",
  "Web Application Development",
  "AI Integration",
  "Cloud Solutions",
  "UI/UX Design",
  "QA & Testing",
  "Maintenance & Support",
];

export default function Services() {
  return (
    <section id="services" className="section-padding gradient-bg">
      <div className="mb-12">
        <p className="text-[#1ADCED] tracking-[8px] text-sm font-bold">
          OUR SERVICES
        </p>
        <h2 className="text-5xl font-black mt-4 max-w-3xl">
          End-to-End Solutions to Accelerate{" "}
          <span className="text-[#1ADCED]">Your Business</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service} className="card p-6 hover:-translate-y-2 transition">
            <div className="w-14 h-14 rounded-2xl primary-gradient text-white grid place-items-center text-2xl mb-5">
              ✦
            </div>
            <h3 className="text-xl font-black">{service}</h3>
            <p className="text-[#21474C] mt-3 text-sm leading-relaxed">
              We deliver reliable, scalable, and future-ready digital solutions
              tailored to your business needs.
            </p>
            <p className="mt-5 text-[#1ADCED] font-bold">Learn More →</p>
          </div>
        ))}
      </div>
    </section>
  );
}