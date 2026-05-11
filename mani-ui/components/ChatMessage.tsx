"use client";

import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0050ff] to-[#38c8f1] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(56,200,241,0.2)] border border-white/20 overflow-hidden mr-3 mt-0.5">
          <Image src="/rsmk.svg" alt="RSMK Logo" width={34} height={34} className="object-contain brightness-0 invert" />
        </div>
      )}
      <div
        className={`max-w-[85%] md:max-w-[75%] rounded-3xl px-5 py-4 text-[15px] leading-relaxed shadow-sm ${
          isUser
            ? "bg-gradient-to-br from-[#0050ff] to-[#0038cc] text-white rounded-br-sm border-none shadow-[0_0_15px_rgba(0,80,255,0.3)]"
            : "bg-[#0c0c0e] border border-[#38c8f1]/20 text-[#f4f4f5] rounded-bl-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
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
