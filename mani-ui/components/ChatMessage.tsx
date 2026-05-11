"use client";

import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

type Props = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({ role, content }: Props) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-6 px-4 w-full`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#d4af37] flex items-center justify-center text-white text-xs font-bold mr-3 mt-1 flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-white/20">
          M
        </div>
      )}
      <div
        className={`max-w-[85%] md:max-w-[75%] rounded-3xl px-5 py-4 text-[15px] leading-relaxed shadow-sm ${
          isUser
            ? "bg-gradient-to-br from-[#f8f8f8] to-[#e4e4e7] text-zinc-900 rounded-br-sm border border-white"
            : "bg-[#0c0c0e] border border-[#d4af37]/20 text-[#f4f4f5] rounded-bl-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap font-medium">{content}</p>
        ) : (
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  );
}
