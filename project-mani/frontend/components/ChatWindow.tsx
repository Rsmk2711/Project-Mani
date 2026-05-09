"use client";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { queryMani } from "../lib/api";

type Message = {
  role: "user" | "mani";
  text: string;
  intent?: string;
  model?: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "mani", text: "Hey! I'm Mani 🧠 — your AI orchestrator. Ask me anything." },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (query: string) => {
    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setLoading(true);

    try {
      const data = await queryMani(query);
      const responseText = data.response?.[0]?.generated_text || "No response from model.";
      setMessages((prev) => [
        ...prev,
        { role: "mani", text: responseText, intent: data.intent, model: data.model },
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: "mani", text: `Error: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-900">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-zinc-700">
        <span className="text-xl font-bold text-white">Project Mani</span>
        <span className="text-xs text-zinc-500 ml-1">by RSMK Technologies</span>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {messages.map((msg, i) => (
          <ChatMessage key={i} {...msg} />
        ))}
        {loading && (
          <div className="text-zinc-500 text-sm mb-4">Mani is thinking...</div>
        )}
        <div ref={bottomRef} />
      </div>
      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
}
