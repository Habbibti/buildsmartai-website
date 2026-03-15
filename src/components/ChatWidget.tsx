"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = { role: "user" | "assistant"; text: string };

const DEMO_RESPONSES: Record<string, string> = {
  default: "Great question! BuildSmart AI specializes in custom AI solutions for local businesses. We can build you a chatbot like this one, automate your phone calls with AI voice, or create a stunning website. Want to learn more?",
  chatbot: "Our AI chatbots handle customer inquiries 24/7, capture leads automatically, answer FAQs, and even book appointments — all without you lifting a finger. Most clients see a 40% reduction in support time within the first month.",
  voice: "Our AI Voice Response system answers your business phone calls, qualifies leads, books appointments, and escalates urgent issues to you — all with a natural-sounding AI voice. Perfect for dental offices, law firms, and home service businesses.",
  website: "We build fast, modern websites with AI built right in. Your site will capture leads, engage visitors with a chatbot, and look stunning on any device. Starting from a single landing page to full business portals.",
  price: "Pricing depends on your specific needs, but we offer flexible monthly plans starting at affordable rates. Let's chat about what you need — reach out via our contact form and we'll get you a custom quote within 24 hours!",
  contact: "You can reach us through the Contact page above, or just tell me what you need right here and I'll make sure the team follows up with you!",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("chatbot") || lower.includes("chat")) return DEMO_RESPONSES.chatbot;
  if (lower.includes("voice") || lower.includes("phone") || lower.includes("call")) return DEMO_RESPONSES.voice;
  if (lower.includes("website") || lower.includes("web") || lower.includes("site")) return DEMO_RESPONSES.website;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) return DEMO_RESPONSES.price;
  if (lower.includes("contact") || lower.includes("reach") || lower.includes("talk")) return DEMO_RESPONSES.contact;
  return DEMO_RESPONSES.default;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "👋 Hi! I'm the BuildSmart AI demo bot. Ask me about our services — chatbots, voice automation, or web development!" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: "assistant", text: getResponse(userMsg) }]);
    }, 1000 + Math.random() * 500);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-500 text-white rounded-full p-4 shadow-lg shadow-purple-900/40 transition-all hover:scale-110"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 border border-white/10 flex flex-col bg-[#0d0d15]">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-700 to-blue-700 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">BuildSmart AI</p>
              <p className="text-white/70 text-xs">Demo Bot · Always Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`rounded-2xl px-3 py-2 text-sm max-w-[80%] ${
                  m.role === "user"
                    ? "bg-purple-600 text-white rounded-br-sm"
                    : "bg-white/10 text-white/90 rounded-bl-sm"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-white/50">
                  typing...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/5 flex gap-2">
            <input
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-purple-500 transition-colors"
              placeholder="Ask me anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
            />
            <button
              onClick={send}
              className="bg-purple-600 hover:bg-purple-500 text-white rounded-lg p-2 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
