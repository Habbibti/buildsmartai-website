import Link from "next/link";
import { Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Bot className="w-5 h-5 text-purple-500" />
          <span className="gradient-text">BuildSmart AI</span>
        </div>
        <div className="flex gap-6 text-sm text-white/50">
          <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <p className="text-white/30 text-sm">© 2026 BuildSmart AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
