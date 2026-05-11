"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import QuickLinks from "./QuickLinks";
import ManiHeader from "./ManiHeader";
import { chatWithMani, Message } from "@/lib/api";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (query: string) => {
    if (!started) setStarted(true);

    const userMessage: Message = { role: "user", content: query };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const data = await chatWithMani(query, messages);
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, something went wrong: ${message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen relative z-10">
      <ManiHeader />

      <div className="flex-1 overflow-y-auto py-6">
        <AnimatePresence>
          {!started ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center h-full gap-8 px-4"
            >
              {/* Hero */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-5 shadow-2xl shadow-purple-500/30">
                  M
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Hi, I&apos;m Mani
                </h2>
                <p className="text-zinc-400 text-base max-w-md mx-auto leading-relaxed">
                  The official AI assistant of RSMK Technologies. Ask me
                  anything about our projects, ecosystem, or vision.
                </p>
              </div>

              {/* Quick links */}
              <QuickLinks onSelect={handleSend} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto"
            >
              {messages.map((msg, i) => (
                <ChatMessage key={i} role={msg.role} content={msg.content} />
              ))}
              {loading && <TypingIndicator />}
              <div ref={bottomRef} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
}
