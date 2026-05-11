import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start mb-6 px-4"
    >
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#d4af37] flex items-center justify-center text-white text-xs font-bold mr-3 mt-1 flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-white/20">
        M
      </div>
      <div className="bg-[#0c0c0e] border border-[#d4af37]/20 rounded-3xl rounded-bl-sm px-5 py-4 flex items-center gap-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] h-[52px]">
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#b08ef6] animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </motion.div>
  );
}
