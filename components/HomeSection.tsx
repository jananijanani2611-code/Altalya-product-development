"use client";

import { motion } from "framer-motion";
import Chatbot from "./Chatbot";
import {
  Box,
  Users,
  Globe,
  Award,
  ShieldCheck,
  Cloud,
  Headphones,
  BarChart3,
  Lock,
  Bot,
  Workflow,
} from "lucide-react";

const stats = [
  { icon: Box, number: "50+", label: "Products Delivered" },
  { icon: Users, number: "30K+", label: "Active Users" },
  { icon: Globe, number: "100+", label: "Businesses Served" },
  { icon: Award, number: "99.9%", label: "Uptime & Reliability" },
];

const products = [
  {
    title: "Ibistra Analytics",
    desc: "AI-powered analytics platform that turns data into actionable business insights.",
    icon: BarChart3,
  },
  {
    title: "Ibistra Automate",
    desc: "Smart automation platform to streamline workflows and eliminate repetitive tasks.",
    icon: Workflow,
  },
  {
    title: "Ibistra Secure",
    desc: "Advanced security solution to protect your applications and sensitive data.",
    icon: Lock,
  },
  {
    title: "Ibistra Engage",
    desc: "Customer engagement platform to connect, support, and grow your customer base.",
    icon: Bot,
  },
];

const why = [
  {
    icon: Bot,
    title: "AI-Powered",
    desc: "Intelligent solutions built with advanced AI and ML technologies.",
  },
  {
    icon: Workflow,
    title: "Scalable",
    desc: "Products designed to grow with your business effortlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    desc: "Enterprise-grade security to keep your data safe and compliant.",
  },
  {
    icon: Cloud,
    title: "Cloud-Ready",
    desc: "Deploy and scale anywhere with cloud infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    desc: "Make smarter decisions with real-time analytics and reports.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our team is always here to help you succeed.",
  },
];

export default function HomeSection() {
  return (
    <section
      id="home-section"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#effcff] to-[#dff8fa] px-[7%] py-24"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#1ADCED]/20 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-[#0B859D]/20 blur-[130px]" />

      {/* HERO AREA */}
      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 text-sm font-black tracking-[9px] text-[#1ADCED]">
            FUTURE READY TECHNOLOGY
          </p>

          <h1 className="text-6xl font-black leading-none tracking-[8px] text-[#091D1D] md:text-8xl">
            IBISTR<span className="text-[#1ADCED]">A</span>
          </h1>

          <h2 className="mt-8 max-w-xl text-4xl font-black leading-tight text-[#091D1D]">
            Intelligence that{" "}
            <span className="text-[#1ADCED]">builds tomorrow.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#21474C]">
            We build AI-powered products and digital solutions that automate
            workflows, unlock insights, and accelerate business growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href="#about"
              className="rounded-xl bg-[#1ADCED] px-8 py-4 font-bold text-white shadow-[0_15px_40px_rgba(26,220,237,0.35)] transition hover:-translate-y-1 hover:bg-[#0B859D]"
            >
              Discover More →
            </a>

            <a
              href="#products"
              className="rounded-xl border border-[#1ADCED] px-8 py-4 font-bold text-[#0B859D] transition hover:-translate-y-1 hover:bg-[#1ADCED] hover:text-white"
            >
              Explore Products →
            </a>
          </div>
        </motion.div>

        {/* REAL CHATBOT */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <Chatbot />
        </motion.div>
      </div>

      {/* STATS */}
      <motion.div
        className="relative mt-16 grid gap-6 rounded-3xl border border-[#1ADCED]/20 bg-white/85 p-7 shadow-[0_20px_60px_rgba(26,220,237,0.12)] md:grid-cols-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-4"
          >
            <item.icon className="text-[#1ADCED]" size={38} />
            <div>
              <h3 className="text-3xl font-black text-[#091D1D]">
                {item.number}
              </h3>
              <p className="text-sm font-semibold text-[#21474C]">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* PRODUCTS */}
      <div className="relative mt-20">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-black tracking-[8px] text-[#1ADCED]">
              OUR PRODUCTS
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#091D1D]">
              Built to Solve Real-World Problems
            </h2>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="rounded-3xl border border-[#1ADCED]/20 bg-white p-6 shadow-[0_18px_45px_rgba(26,220,237,0.1)]"
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 grid h-24 place-items-center rounded-2xl bg-gradient-to-br from-[#1ADCED] to-[#21474C] text-white">
                <product.icon size={42} />
              </div>

              <h3 className="text-xl font-black text-[#091D1D]">
                {product.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#21474C]">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHY */}
      <div className="relative mt-20">
        <p className="mb-8 text-sm font-black tracking-[8px] text-[#1ADCED]">
          WHY IBISTRA?
        </p>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          {why.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-[#E8FAFC] text-[#1ADCED]">
                <item.icon size={32} />
              </div>

              <h3 className="font-black text-[#091D1D]">{item.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-[#21474C]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}