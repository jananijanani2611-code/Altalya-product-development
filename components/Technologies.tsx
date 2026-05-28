"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Infinity,
  Brain,
  Wrench,
  Layers,
} from "lucide-react";

const techCards = [
  {
    title: "Frontend",
    desc: "Building responsive and interactive user interfaces.",
    icon: Code2,
    logos: ["HTML5", "CSS3", "JS", "TS", "React"],
    bg: "from-[#c4dbdb] to-[#738281]",
  },
  {
    title: "Backend",
    desc: "Robust server-side development for scalable applications.",
    icon: Server,
    logos: ["Node", ".NET", "PHP", "Java"],
    bg: "from-[#1ADCED] to-[#0B859D]",
  },
  {
    title: "Mobile",
    desc: "Cross-platform and native mobile solutions for iOS & Android.",
    icon: Smartphone,
    logos: ["Flutter", "React", "Kotlin", "Swift"],
    bg: "from-[#738281] to-[#21474C]",
  },
  {
    title: "Database",
    desc: "Reliable and high-performance data storage solutions.",
    icon: Database,
    logos: ["MySQL", "Postgres", "MongoDB", "Firebase"],
    bg: "from-[#0B859D] to-[#21474C]",
  },
  {
    title: "Cloud",
    desc: "Scalable cloud infrastructure for modern businesses.",
    icon: Cloud,
    logos: ["AWS", "Azure", "GCP"],
    bg: "from-[#0B859D] to-[#21474C]",
  },
  {
    title: "DevOps",
    desc: "Automating delivery with CI/CD and infrastructure as code.",
    icon: Infinity,
    logos: ["Docker", "K8s", "Jenkins", "GitLab"],
    bg: "from-[#21474C] to-[#091D1D]",
  },
  {
    title: "AI / ML",
    desc: "Intelligent models and data-driven solutions for real impact.",
    icon: Brain,
    logos: ["Python", "TensorFlow", "PyTorch", "Scikit"],
    bg: "from-[#21474C] to-[#091D1D]",
  },
  {
    title: "Tools & Others",
    desc: "Powerful tools to streamline development and collaboration.",
    icon: Wrench,
    logos: ["GitHub", "Slack", "Figma", "VS Code"],
    bg: "from-[#091D1D] to-[#21474C]",
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#f3fdff] to-[#e8fbff] px-[6%] py-24"
    >
      {/* background decorations */}
      <div className="absolute left-0 top-28 grid grid-cols-8 gap-4 opacity-30">
        {Array.from({ length: 48 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-[#0B859D]" />
        ))}
      </div>

      <div className="absolute right-12 top-20 h-64 w-64 rounded-full border border-[#C4DBDB]" />
      <div className="absolute right-20 top-28 h-48 w-48 rounded-full border border-[#C4DBDB]" />
      <div className="absolute right-28 top-36 h-32 w-32 rounded-full border border-[#C4DBDB]" />

      {/* heading */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-5 flex items-center justify-center gap-8 text-sm font-black tracking-[10px] text-[#0B859D]">
          <span className="h-[1px] w-16 bg-[#1ADCED]" />
          OUR TECHNOLOGIES
          <span className="h-[1px] w-16 bg-[#1ADCED]" />
        </p>

        <h2 className="text-5xl font-black leading-tight text-[#091D1D] md:text-6xl">
          Modern Technologies,
          <br />
          <span className="text-[#0B859D]">Smarter Solutions</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5b6b70]">
          We leverage cutting-edge technologies and industry best practices to
          build secure, scalable, and future-ready digital solutions.
        </p>
      </div>

      {/* cards */}
      <div className="relative z-10 mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {techCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`min-h-[260px] rounded-2xl bg-gradient-to-br ${card.bg} p-7 text-white shadow-[0_24px_60px_rgba(9,29,29,0.16)]`}
          >
            <div className="mb-6 flex items-center gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/80 text-[#0B859D] shadow-lg backdrop-blur-md">
                <card.icon size={34} />
              </div>

              <div>
                <h3 className="text-2xl font-black">{card.title}</h3>
                <div className="mt-3 h-[1px] w-24 bg-white/45" />
              </div>
            </div>

            <div className="mb-7 flex flex-wrap items-center gap-4">
              {card.logos.map((logo) => (
                <span
                  key={logo}
                  className="rounded-xl bg-white/16 px-3 py-2 text-sm font-black tracking-wide text-white backdrop-blur-md"
                >
                  {logo}
                </span>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-white/95">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mt-8 grid items-center gap-8 rounded-2xl border border-[#C4DBDB] bg-white/80 p-8 shadow-[0_20px_70px_rgba(26,220,237,0.12)] backdrop-blur-xl lg:grid-cols-[0.8fr_1.4fr_0.8fr]"
      >
        <div className="flex justify-center">
          <div className="relative grid h-32 w-32 place-items-center rounded-3xl bg-gradient-to-br from-[#1ADCED] to-[#0B859D] text-white shadow-[0_20px_50px_rgba(26,220,237,0.35)]">
            <Layers size={58} />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black text-[#091D1D]">
            Built with the Best. Delivered with Excellence.
          </h3>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#5b6b70]">
            We choose the right technologies to deliver secure, scalable, and
            high-performing solutions tailored to your business needs.
          </p>
        </div>

        <a
          href="#contact"
          className="justify-self-center rounded-xl bg-[#1ADCED] px-10 py-4 font-black text-white shadow-[0_15px_40px_rgba(26,220,237,0.35)] transition hover:-translate-y-1 hover:bg-[#0B859D]"
        >
          Let’s Build Together →
        </a>
      </motion.div>
    </section>
  );
}