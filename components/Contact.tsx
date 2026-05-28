"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  User,
  FileText,
  Pencil,
  Send,
  MessageCircle,
  Headphones,
  Navigation,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#f3fdff] to-[#e6fbff] px-[6%] py-24"
    >
      <div className="absolute left-8 top-80 grid grid-cols-4 gap-4 opacity-40">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-[#1ADCED]" />
        ))}
      </div>

      <div className="absolute right-24 top-28 grid grid-cols-6 gap-4 opacity-40">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-[#0B859D]" />
        ))}
      </div>

      {/* TOP HERO */}
      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 flex items-center gap-5 text-sm font-black tracking-[6px] text-[#0B859D]">
            CONTACT US <span className="h-[1px] w-20 bg-[#1ADCED]" />
          </p>

          <h2 className="text-5xl font-black leading-tight text-[#091D1D] md:text-6xl">
            We’re Here to{" "}
            <span className="text-[#1ADCED]">Help</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5b6b70]">
            Have a question, project idea, or just want to say hello? Fill out
            the form and our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mx-auto hidden h-72 w-96 items-center justify-center lg:flex"
        >
          <div className="absolute h-64 w-64 rounded-full bg-[#1ADCED]/15" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative grid h-36 w-52 place-items-center rounded-3xl bg-gradient-to-br from-[#1ADCED] to-[#0B859D] shadow-[0_25px_70px_rgba(26,220,237,0.35)]"
          >
            <div className="absolute -top-10 grid h-24 w-40 place-items-center rounded-2xl bg-white shadow-xl">
              <div className="text-center">
                <div className="mx-auto mb-2 text-[#1ADCED]">
                  <Mail size={34} />
                </div>
                <p className="text-sm font-black tracking-[4px] text-[#091D1D]">
                  IBISTRA
                </p>
              </div>
            </div>
          </motion.div>

          <div className="absolute left-8 top-16 grid h-16 w-16 place-items-center rounded-full bg-white text-[#1ADCED] shadow-xl">
            <Send size={28} />
          </div>
          <div className="absolute right-10 top-8 grid h-16 w-16 place-items-center rounded-full bg-white text-[#1ADCED] shadow-xl">
            <Phone size={28} />
          </div>
          <div className="absolute right-4 bottom-10 grid h-16 w-16 place-items-center rounded-full bg-white text-[#1ADCED] shadow-xl">
            <MessageCircle size={28} />
          </div>
        </motion.div>
      </div>

      {/* MAIN CONTACT CARDS */}
      <div className="relative z-10 mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#C4DBDB] bg-white/85 p-8 shadow-[0_25px_70px_rgba(26,220,237,0.12)] backdrop-blur-xl"
        >
          <div className="mb-8 flex items-center gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#E8FAFC] text-[#1ADCED]">
              <Mail size={34} />
            </div>
            <div>
              <p className="text-sm font-black tracking-[6px] text-[#1ADCED]">
                SEND US EMAIL
              </p>
              <h3 className="mt-2 text-3xl font-black text-[#091D1D]">
                Feel free to write
              </h3>
            </div>
          </div>

          <form className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex items-center gap-4 rounded-xl border border-[#C4DBDB] bg-white px-5 py-4">
                <User size={20} className="text-[#738281]" />
                <input className="w-full bg-transparent outline-none" placeholder="Enter Name" />
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-[#C4DBDB] bg-white px-5 py-4">
                <Mail size={20} className="text-[#738281]" />
                <input className="w-full bg-transparent outline-none" placeholder="Enter Email" />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex items-center gap-4 rounded-xl border border-[#C4DBDB] bg-white px-5 py-4">
                <FileText size={20} className="text-[#738281]" />
                <input className="w-full bg-transparent outline-none" placeholder="Enter Subject" />
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-[#C4DBDB] bg-white px-5 py-4">
                <Phone size={20} className="text-[#738281]" />
                <input className="w-full bg-transparent outline-none" placeholder="Enter Phone" />
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-[#C4DBDB] bg-white px-5 py-4">
              <Pencil size={20} className="mt-1 text-[#738281]" />
              <textarea
                className="min-h-36 w-full resize-none bg-transparent outline-none"
                placeholder="Enter Message"
              />
            </div>

            <div className="flex flex-wrap gap-5 pt-2">
              <button
                type="button"
                className="rounded-xl bg-[#1ADCED] px-10 py-4 font-black tracking-[2px] text-white shadow-[0_15px_40px_rgba(26,220,237,0.35)] transition hover:-translate-y-1 hover:bg-[#0B859D]"
              >
                SEND MESSAGE
              </button>

              <button
                type="reset"
                className="rounded-xl border border-[#1ADCED] px-10 py-4 font-black tracking-[2px] text-[#0B859D] transition hover:bg-[#1ADCED] hover:text-white"
              >
                RESET
              </button>
            </div>
          </form>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#C4DBDB] bg-white/85 p-8 shadow-[0_25px_70px_rgba(26,220,237,0.12)] backdrop-blur-xl"
        >
          <div className="mb-8 flex items-center gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#E8FAFC] text-[#1ADCED]">
              <Headphones size={34} />
            </div>
            <div>
              <p className="text-sm font-black tracking-[6px] text-[#1ADCED]">
                NEED ANY HELP?
              </p>
              <h3 className="mt-2 text-3xl font-black text-[#091D1D]">
                Get in touch with us
              </h3>
            </div>
          </div>

          <p className="mb-8 max-w-xl leading-relaxed text-[#5b6b70]">
            We offer a free consultation, so there&apos;s no risk in getting in
            touch. Simply fill out the form and we&apos;ll be in touch shortly.
          </p>

          {[
            {
              icon: Phone,
              title: "Have any question?",
              value: "+91 75600 56003",
            },
            {
              icon: Mail,
              title: "Write email",
              value: "systems@altalya.com",
            },
            {
              icon: MapPin,
              title: "Visit anytime",
              value: "Refer map for location",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-6 border-t border-[#C4DBDB] py-6 first:border-t-0"
            >
              <div className="grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-[#1ADCED] to-[#0B859D] text-white shadow-lg">
                <item.icon size={30} />
              </div>
              <div>
                <h4 className="font-black text-[#091D1D]">{item.title}</h4>
                <p className="mt-2 text-lg font-bold text-[#0B859D]">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM INFO BAR */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mt-8 grid gap-6 rounded-3xl border border-[#C4DBDB] bg-white/85 p-7 shadow-[0_20px_65px_rgba(26,220,237,0.12)] backdrop-blur-xl lg:grid-cols-3"
      >
        <div className="flex items-center gap-5 border-[#C4DBDB] lg:border-r">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[#E8FAFC] text-[#1ADCED]">
            <Phone size={32} />
          </div>
          <div>
            <p className="text-[#738281]">Call or Whatsapp us</p>
            <h4 className="text-xl font-black text-[#0B859D]">
              +91 75600 56003
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-5 border-[#C4DBDB] lg:border-r">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[#E8FAFC] text-[#1ADCED]">
            <Mail size={32} />
          </div>
          <div>
            <p className="text-[#738281]">Send Email</p>
            <h4 className="text-xl font-black text-[#0B859D]">
              systems@altalya.com
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[#E8FAFC] text-[#1ADCED]">
            <Navigation size={32} />
          </div>
          <div>
            <p className="text-[#738281]">
              1/1135-H2, Dharapuram Main Rd, opp. to Meenakshi Hospital
            </p>
            <h4 className="text-lg font-black text-[#0B859D]">
              K Chettipalayam, Tiruppur, Tamil Nadu 641608
            </h4>
          </div>
        </div>
      </motion.div>
    </section>
  );
}