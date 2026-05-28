"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#hero-intro" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-10">
        
        {/* Logo */}
        <motion.a
          href="#hero-intro"
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-4"
        >
          <Image
            src="/images/logo.png"
            alt="IBISTRA Logo"
            width={48}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />

          <span className="text-[30px] font-semibold tracking-[8px] text-[#0B1E23]">
            IBISTRA
          </span>
        </motion.a>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              className={`relative text-[15px] font-medium tracking-wide transition-colors ${
                item.name === "Home"
                  ? "text-[#1ADCED]"
                  : "text-[#0B1E23] hover:text-[#1ADCED]"
              }`}
            >
              {item.name}

              {item.name === "Home" && (
                <span className="absolute left-0 -bottom-3 h-[2px] w-full bg-[#1ADCED]" />
              )}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:flex items-center gap-3 rounded-full border border-[#9FEFFF] bg-white/60 px-8 py-4 text-[15px] font-medium text-[#0B1E23] backdrop-blur-md shadow-[0_8px_30px_rgba(26,220,237,0.12)] hover:border-[#1ADCED]"
        >
          Get in Touch
          <ArrowRight size={18} className="text-[#1ADCED]" />
        </motion.a>
      </div>
    </motion.header>
  );
}