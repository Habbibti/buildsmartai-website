"use client";
import { useState } from "react";
import { Send, CheckCircle, Mail, MessageSquare, Building } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-white/50 text-lg">
            Tell us about your business. We&apos;ll respond within 24 hours with a custom plan.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 rounded-2xl border border-green-500/20 bg-green-500/5">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Message Received!</h2>
            <p className="text-white/50">We&apos;ll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/10 bg-white/3 p-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-white/60 mb-2">Your Name *</label>
                <input
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Email Address *</label>
                <input
                  required
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@yourbusiness.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">
                <Building className="inline w-4 h-4 mr-1" />Business Name
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Your Business Name"
                value={form.business}
                onChange={e => setForm({ ...form, business: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">
                <MessageSquare className="inline w-4 h-4 mr-1" />What do you need? *
              </label>
              <textarea
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Tell us about your business and what you're looking to automate or improve..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            <p className="text-center text-white/30 text-sm flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              We typically respond within 24 hours
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
