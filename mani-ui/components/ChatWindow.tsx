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
    <div className="flex flex-col h-[100dvh] relative z-10 w-full">
      <ManiHeader />

      <div className="flex-1 overflow-y-auto scroll-smooth w-full">
        <div className="max-w-3xl mx-auto w-full min-h-full flex flex-col pt-8 pb-32">
          <AnimatePresence mode="wait">
            {!started ? (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center justify-center flex-1 gap-6 px-4"
              >
                {/* Hero */}
                <div className="text-center relative w-full flex flex-col items-center">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#d4af37]/10 blur-[50px] rounded-full pointer-events-none"></div>
                  <div className="relative w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#8b5cf6] to-[#d4af37] flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-[0_0_40px_rgba(212,175,55,0.2)] border border-white/20">
                    M
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e8ff] to-[#d4af37] mb-4 tracking-tight text-center">
                    Hi, I&apos;m Mani
                  </h2>
                  <p className="text-[#a1a1aa] text-base md:text-lg max-w-lg mx-auto leading-relaxed text-center">
                    The official AI assistant of RSMK Technologies. Ask me
                    anything about our projects, ecosystem, or vision.
                  </p>
                </div>

                {/* Quick links */}
                <div className="w-full mt-2 flex justify-center">
                  <QuickLinks onSelect={handleSend} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col flex-1 w-full"
              >
                {messages.map((msg, i) => (
                  <ChatMessage key={i} role={msg.role} content={msg.content} />
                ))}
                {loading && <TypingIndicator />}
                <div ref={bottomRef} className="h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full">
        <ChatInput onSend={handleSend} disabled={loading} />
      </div>
    </div>
  );
}
