"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { label: "What is RSMK Technologies?", icon: "🏢" },
  { label: "Tell me about BudgetBuddy", icon: "💰" },
  { label: "What is SFMD?", icon: "🔥" },
  { label: "Show me all projects", icon: "🚀" },
  { label: "Who built Mani?", icon: "🧠" },
  { label: "What is ColorOhm?", icon: "🔌" },
];

type Props = {
  onSelect: (query: string) => void;
};

export default function QuickLinks({ onSelect }: Props) {
  return (
    <div className="w-full max-w-2xl px-4 mt-6 flex flex-col items-center">
      <p className="text-center text-[#71717a] text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
        Suggested Inquiries
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        {quickLinks.map((link, i) => (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 + 0.3 }}
            key={link.label}
            onClick={() => onSelect(link.label)}
            className="group relative overflow-hidden rounded-2xl bg-[#0c0c0e]/80 border border-white/[0.04] p-4 text-left transition-all duration-300 hover:bg-[#121214] hover:border-[#38c8f1]/40 hover:shadow-[0_0_20px_rgba(56,200,241,0.1)] flex items-center gap-3 w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0050ff]/0 via-[#0050ff]/0 to-[#38c8f1]/0 group-hover:from-[#0050ff]/5 group-hover:to-[#38c8f1]/5 transition-all duration-500"></div>
            <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#38c8f1]/30 transition-all duration-300">
              <span className="text-sm">{link.icon}</span>
            </div>
            <span className="text-sm text-[#d4d4d8] group-hover:text-white transition-colors">
              {link.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
