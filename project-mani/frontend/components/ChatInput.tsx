import { useState } from "react";

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
    <div className="flex gap-2 p-4 border-t border-zinc-700 bg-zinc-900">
      <input
        className="flex-1 bg-zinc-800 text-zinc-100 rounded-xl px-4 py-2 text-sm outline-none placeholder-zinc-500"
        placeholder="Ask Mani anything..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        disabled={disabled}
      />
      <button
        onClick={handleSend}
        disabled={disabled}
        className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
      >
        {disabled ? "..." : "Send"}
      </button>
    </div>
  );
}
