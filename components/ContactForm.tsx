"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const initial = { name: "", business: "", phone: "", email: "", details: "" };

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setForm(initial);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={input}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">Business Name</label>
          <input
            required
            value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
            className={input}
            placeholder="What's your business called?"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">Phone</label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={input}
            placeholder="(404) 555-0123"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={input}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy">Tell me about your business</label>
        <textarea
          required
          rows={4}
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
          className={input}
          placeholder="What you do, where you're based, and what you'd like your site to do."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-xl active:translate-y-px disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto sm:min-w-[240px]"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            Get My Free Demo <Send className="h-4 w-4" />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          Got it! I&apos;ll be in touch within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          Something went wrong. Please call or text (404) 487-8839.
        </p>
      )}
    </form>
  );
}
