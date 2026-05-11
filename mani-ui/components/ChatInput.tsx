"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Props = {
  onSend: (query: string) => void;
  disabled: boolean;
};

export default function ChatInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <div className="px-4 py-4 glass border-t border-white/5 relative z-10">
      <div className="flex items-center gap-3 max-w-3xl mx-auto">
        <div className="flex-1 glass rounded-2xl flex items-center px-4 py-2.5 gap-2 focus-within:border-purple-500/50 transition-colors">
          <input
            className="flex-1 bg-transparent text-zinc-200 text-sm outline-none placeholder-zinc-600"
            placeholder="Ask Mani anything about RSMK Technologies..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            disabled={disabled}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
        >
          <Send size={16} />
        </button>
      </div>
      <p className="text-center text-zinc-600 text-xs mt-2">
        Mani · Powered by RSMK Technologies
      </p>
    </div>
  );
}
