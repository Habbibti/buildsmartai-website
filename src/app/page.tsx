import Link from "next/link";
import { Bot, Globe, Mic, ArrowRight, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

const services = [
  {
    icon: Bot,
    title: "AI-Driven Chatbots",
    description: "Deploy a 24/7 AI assistant on your website that answers questions, captures leads, and books appointments — automatically.",
    features: ["Lead capture & qualification", "FAQ automation", "Appointment booking", "CRM integration"],
    color: "from-purple-600/20 to-purple-600/5",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Mic,
    title: "AI Voice Response",
    description: "Never miss a call again. Our AI voice system answers your business phone, qualifies leads, and routes urgent calls to you.",
    features: ["24/7 phone coverage", "Natural-sounding AI voice", "Lead qualification", "Smart call routing"],
    color: "from-blue-600/20 to-blue-600/5",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Globe,
    title: "Custom Web Development",
    description: "Modern, fast websites built with AI capabilities baked in — not bolted on. Convert visitors into paying customers.",
    features: ["AI-powered chatbot", "Mobile-first design", "SEO optimized", "Fast & secure"],
    color: "from-cyan-600/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
];

const steps = [
  { number: "01", title: "Tell Us Your Needs", description: "We learn about your business, your customers, and the problems you want to solve." },
  { number: "02", title: "We Build Your Solution", description: "Our team designs and builds a custom AI solution tailored to your specific industry." },
  { number: "03", title: "Go Live & Grow", description: "Launch your AI tools and watch your business run smarter — even while you sleep." },
];

const stats = [
  { value: "24/7", label: "Always Available" },
  { value: "< 48h", label: "Response Time" },
  { value: "40%", label: "Avg. Time Saved" },
  { value: "100%", label: "Custom Built" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 text-purple-400 text-sm mb-8">
            <Zap className="w-4 h-4" />
            AI-Powered Business Automation
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Make Your Business{" "}
            <span className="gradient-text">Smarter With AI</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Custom AI chatbots, voice automation, and web development for local businesses.
            Stop losing leads. Start working smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 glow"
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#services"
              className="border border-white/10 hover:border-white/30 text-white/80 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              See Our Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold gradient-text">{s.value}</p>
                <p className="text-white/40 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything Your Business <span className="gradient-text">Needs</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Three core solutions designed specifically for local businesses ready to compete with the big guys.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-6 bg-gradient-to-b ${s.color} border ${s.border} hover:scale-[1.02] transition-transform`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4`}>
                <s.icon className={`w-6 h-6 ${s.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm mb-4">{s.description}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple <span className="gradient-text">3-Step Process</span>
            </h2>
            <p className="text-white/50 text-lg">From idea to live AI solution in days, not months.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4 opacity-40">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-600/10 to-transparent p-12">
          <div className="flex justify-center mb-6">
            <Shield className="w-12 h-12 text-purple-400" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Ready to Work Smarter?</h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
            Join local businesses already automating their operations with BuildSmart AI.
            Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" />
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <ChatWidget />
    </>
  );
}
