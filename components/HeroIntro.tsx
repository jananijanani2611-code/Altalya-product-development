"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import Chatbot from "@/components/Chatbot";

export default function HeroIntro() {
  return (
    <section
      id="hero-intro"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero-premium.png"
        alt="IBISTRA Background"
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      {/* PREMIUM OVERLAYS */}
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(234,252,255,0.22))]" />

      {/* FLOATING PARTICLES */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/3 h-4 w-4 rounded-full bg-cyan-300 blur-md"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 top-1/2 h-3 w-3 rounded-full bg-white blur-sm"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* TOP LABEL */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 text-xs md:text-sm font-black tracking-[12px] text-[#163A40]"
        >
          FUTURE READY TECHNOLOGY
        </motion.p>

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.2,
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="mb-4"
        >
          <Image
  src="/images/logo.png"
  alt="IBISTRA Logo"
  width={160}
  height={160}
  priority
  unoptimized
  className="w-40 h-auto object-contain drop-shadow-[0_0_25px_rgba(26,220,237,0.55)]"
 />
        </motion.div>

        {/* MAIN TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            letterSpacing: "20px",
          }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "10px",
          }}
          transition={{ duration: 1.3 }}
          className="text-6xl md:text-[120px] font-black leading-none text-[#061A1C]"
        >
          IBISTR<span className="text-[#1ADCED]">A</span>
        </motion.h1>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-2xl text-[#21474C]"
        >
          Intelligence that builds tomorrow.
        </motion.p>

        {/* BUTTON */}
        <motion.a
          href="#home-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 35px rgba(26,220,237,0.6)",
          }}
          className="mt-10 flex items-center gap-4 rounded-2xl bg-[#1ADCED] px-12 py-5 text-sm font-black tracking-[5px] text-white shadow-[0_0_20px_rgba(26,220,237,0.35)] transition-all duration-300"
        >
          DISCOVER MORE
          <ArrowRight size={22} />
        </motion.a>
      </div>

      {/* SCROLL ICON */}
      <motion.a
        href="#home-section"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-[#1ADCED]"
      >
        <ChevronDown size={42} />
      </motion.a>
    </section>
  );
}