"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send, MoreVertical, Minus } from "lucide-react";

type Message = {
  role: "bot" | "user";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I’m your AI assistant. How can I help you explore Ibistra today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(text?: string) {
    const userText = text || input;
    if (!userText.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply || "Sorry, I couldn't answer that.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Unable to connect right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="w-[360px] rounded-[28px] bg-white/85 shadow-[0_25px_80px_rgba(26,220,237,0.25)] backdrop-blur-xl border border-cyan-100 overflow-hidden"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-cyan-100">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1ADCED] text-white font-black">
            AI
          </div>
          <div>
            <h3 className="font-bold text-[#071B1D]">Ibistra Assistant</h3>
            <p className="text-xs text-green-500">● Online now</p>
          </div>
        </div>

        <div className="flex gap-2 text-[#21474C]">
          <MoreVertical size={18} />
          <Minus size={18} />
        </div>
      </div>

      <div className="h-[300px] overflow-y-auto px-5 py-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#1ADCED] text-white"
                  : "bg-[#EAFBFF] text-[#21474C]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-sm text-[#21474C]">
            <Bot size={18} />
            Typing...
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 px-5 pb-3">
        {["Our Products", "Solutions", "Pricing"].map((item) => (
          <button
            key={item}
            onClick={() => sendMessage(item)}
            className="rounded-full border border-[#1ADCED]/40 px-3 py-1 text-xs text-[#0B859D] hover:bg-[#EAFBFF]"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 px-5 py-4 border-t border-cyan-100">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something..."
          className="flex-1 rounded-full bg-[#F3FCFF] px-4 py-3 text-sm outline-none text-[#21474C]"
        />

        <button
          onClick={() => sendMessage()}
          className="grid h-11 w-11 place-items-center rounded-full bg-[#1ADCED] text-white"
        >
          <Send size={18} />
        </button>
      </div>
    </motion.div>
  );
}