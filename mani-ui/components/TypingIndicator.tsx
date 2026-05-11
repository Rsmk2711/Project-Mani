import { motion } from "framer-motion";
import Image from "next/image";

export default function TypingIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start mb-6 px-4"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0050ff] to-[#38c8f1] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(56,200,241,0.2)] border border-white/20 overflow-hidden mr-3 mt-0.5">
        <Image src="/rsmk.svg" alt="RSMK Logo" width={34} height={34} className="object-contain brightness-0 invert" />
      </div>
      <div className="bg-[#0c0c0e] border border-[#38c8f1]/20 rounded-3xl rounded-bl-sm px-5 py-4 flex items-center gap-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] h-[56px]">
        <span
          className="w-2 h-2 rounded-full bg-[#0050ff] animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="w-2 h-2 rounded-full bg-[#1c8cf8] animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="w-2 h-2 rounded-full bg-[#38c8f1] animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </motion.div>
  );
}
