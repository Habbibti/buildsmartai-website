"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Bot } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Bot className="w-6 h-6 text-purple-500" />
          <span className="gradient-text">BuildSmart AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/contact" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition-colors font-medium">
            Get Started
          </Link>
        </div>

        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d15] border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm">
          <Link href="/#services" onClick={() => setOpen(false)} className="text-white/70 hover:text-white">Services</Link>
          <Link href="/#how-it-works" onClick={() => setOpen(false)} className="text-white/70 hover:text-white">How It Works</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-white/70 hover:text-white">Contact</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="bg-purple-600 text-white px-4 py-2 rounded-lg text-center font-medium">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
