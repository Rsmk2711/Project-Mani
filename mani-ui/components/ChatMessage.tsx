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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 px-4`}
    >
      {!isUser && (
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold mr-2 mt-1 flex-shrink-0 shadow-md shadow-purple-500/20">
          M
        </div>
      )}
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm ${
          isUser
            ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-br-none shadow-lg shadow-purple-500/20"
            : "glass text-zinc-200 rounded-bl-none"
        }`}
      >
        {isUser ? (
          <p className="leading-relaxed">{content}</p>
        ) : (
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  );
}
