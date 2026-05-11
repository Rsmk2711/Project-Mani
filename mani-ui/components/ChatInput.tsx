"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

type Props = {
  onSend: (query: string) => void;
  disabled: boolean;
};

export default function ChatInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [disabled]);

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <div className="px-4 pb-6 pt-4 bg-gradient-to-t from-[#050507] via-[#050507]/90 to-transparent relative z-10">
      <div className="max-w-3xl mx-auto relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0050ff] to-[#38c8f1] rounded-3xl blur opacity-[0.1] group-focus-within:opacity-30 transition duration-500"></div>
        <div className="relative flex items-center gap-3 bg-[#0a0a0c] border border-[#38c8f1]/20 rounded-3xl px-2 py-2 shadow-2xl transition-all">
          <input
            ref={inputRef}
            className="flex-1 bg-transparent text-[#f8f8f8] text-sm md:text-base px-4 py-2 outline-none placeholder-[#71717a] w-full"
            placeholder="Ask Mani anything about RSMK..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            disabled={disabled}
          />
          <button
            onClick={handleSend}
            disabled={disabled || !value.trim()}
            className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-br from-[#0050ff] to-[#38c8f1] flex items-center justify-center text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,200,241,0.4)] disabled:opacity-30 disabled:hover:shadow-none disabled:cursor-not-allowed flex-shrink-0 group/btn"
          >
            <Send size={18} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
      <p className="text-center text-[#71717a] text-[10px] tracking-widest mt-4 uppercase font-medium">
        Powered by RSMK Technologies
      </p>
    </div>
  );
}
