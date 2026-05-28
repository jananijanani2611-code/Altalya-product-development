const steps = [
  "Discover",
  "Strategy",
  "Design",
  "Develop",
  "Test",
  "Deploy",
  "Support",
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-[#f8ffff]">
      <div className="mb-14">
        <p className="text-[#1ADCED] tracking-[8px] text-sm font-bold">
          OUR PROCESS
        </p>
        <h2 className="text-5xl font-black mt-4 max-w-3xl">
          A Proven Process to Build{" "}
          <span className="text-[#1ADCED]">Exceptional Products</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-4">
        {steps.map((step, index) => (
          <div key={step} className="card p-5 text-center">
            <div className="w-12 h-12 mx-auto rounded-full primary-gradient text-white grid place-items-center font-bold">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="font-black mt-5">{step}</h3>
            <p className="text-sm text-[#21474C] mt-3">
              We ensure quality, clarity, and progress at every stage.
            </p>
          </div>
        ))}
      </div>

      <div className="primary-gradient mt-12 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center text-white">
        <h3 className="text-3xl font-black">Ready to Start Your Project?</h3>
        <a href="#contact" className="bg-white text-[#0B859D] px-8 py-4 rounded-xl font-bold mt-5 md:mt-0">
          Start Your Project →
        </a>
      </div>
    </section>
  );
}