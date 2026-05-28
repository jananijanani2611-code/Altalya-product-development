"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Cloud,
  Headphones,
  Target,
  Eye,
  Gem,
  Boxes,
  Globe,
} from "lucide-react";

const stats = [
  { number: "50+", label: "Products Delivered", icon: Boxes },
  { number: "30K+", label: "Active Users", icon: Globe },
  { number: "100+", label: "Businesses Served", icon: BrainCircuit },
  { number: "99.9%", label: "Uptime & Reliability", icon: ShieldCheck },
];

const values = [
  {
    title: "Our Mission",
    icon: Target,
    desc: "To build innovative and intelligent products that automate workflows, enable data-driven decisions, and create real-world impact.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    desc: "To become a global leader in product innovation by empowering businesses with AI-driven technology solutions.",
  },
  {
    title: "Our Values",
    icon: Gem,
    desc: "Innovation First • Customer Success • Integrity • Continuous Improvement",
  },
];

const why = [
  { icon: BrainCircuit, title: "AI-Powered" },
  { icon: BarChart3, title: "Scalable" },
  { icon: ShieldCheck, title: "Secure" },
  { icon: Cloud, title: "Cloud-Ready" },
  { icon: Globe, title: "Real-Time Insights" },
  { icon: Headphones, title: "24/7 Support" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f7fdff] py-24 px-6 md:px-20"
    >
      {/* Top Intro */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#1ADCED] uppercase tracking-[6px] text-sm font-bold mb-6">
            ABOUT US
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight text-[#091d1d]">
            Building Intelligent
            <br />
            Products for a
            <span className="text-[#1ADCED]"> Smarter Tomorrow</span>
          </h2>

          <p className="mt-8 text-lg text-[#21474C] leading-relaxed">
            Ibistra is a product-based technology company committed to creating
            AI-powered digital solutions that automate processes, unlock
            insights, and accelerate business growth.
          </p>

          <p className="mt-6 text-[#21474C] leading-relaxed">
            We combine innovation, design, and engineering to build products
            that are not only powerful but also simple, secure, and scalable.
          </p>

          <button className="mt-10 bg-[#1ADCED] hover:bg-[#0B859D] transition px-8 py-4 rounded-xl text-white font-bold flex items-center gap-3 shadow-xl">
            Our Journey <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/images/about-ai.png"
            alt="AI"
            width={700}
            height={700}
            className="rounded-3xl"
          />

          <div className="absolute inset-0 bg-[#1ADCED]/10 rounded-3xl blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-4 gap-6 mt-20 bg-white rounded-3xl p-10 shadow-xl"
      >
        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#e9fbfd] flex items-center justify-center">
                <Icon className="text-[#1ADCED]" size={28} />
              </div>

              <h3 className="text-3xl font-black mt-4">{item.number}</h3>
              <p className="text-[#21474C] mt-2">{item.label}</p>
            </div>
          );
        })}
      </motion.div>

      {/* Story */}
      <div className="grid md:grid-cols-2 gap-16 mt-28 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#1ADCED] uppercase tracking-[6px] text-sm font-bold mb-6">
            OUR STORY
          </p>

          <h3 className="text-5xl font-black leading-tight text-[#091d1d]">
            Driven by Innovation.
            <br />
            Guided by Purpose.
          </h3>

          <p className="mt-8 text-[#21474C] leading-relaxed">
            Ibistra was founded with a simple belief — technology should solve
            real problems and create meaningful impact.
          </p>

          <p className="mt-6 text-[#21474C] leading-relaxed">
            From day one, our mission has been to build intelligent products
            that help businesses automate, analyze, and grow in the digital age.
          </p>

          <button className="mt-10 border border-[#1ADCED] px-8 py-4 rounded-xl text-[#1ADCED] font-bold hover:bg-[#1ADCED] hover:text-white transition">
            More About Us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/images/building.png"
            alt="Building"
            width={700}
            height={500}
            className="rounded-3xl shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-xl">
            <h4 className="font-black text-lg">A Team of Innovators</h4>
            <p className="text-[#21474C]">
              Engineers, designers, and problem-solvers building the future.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mission Vision */}
      <div className="grid md:grid-cols-3 gap-8 mt-24">
        {values.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#e9fbfd] flex items-center justify-center">
                <Icon className="text-[#1ADCED]" size={30} />
              </div>

              <h4 className="text-2xl font-black mt-6">{item.title}</h4>

              <p className="text-[#21474C] mt-5 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Why */}
      <div className="mt-24">
        <p className="text-[#1ADCED] uppercase tracking-[6px] text-sm font-bold mb-10">
          WHY IBISTRA?
        </p>

        <div className="grid md:grid-cols-6 gap-8">
          {why.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#e9fbfd] flex items-center justify-center">
                  <Icon className="text-[#1ADCED]" size={28} />
                </div>

                <h5 className="mt-4 font-bold text-[#091d1d]">{item.title}</h5>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}