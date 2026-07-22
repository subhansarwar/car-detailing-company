"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // NOTE: front-end only — wire this up to an email/API provider
    // (e.g. Formspree, Resend, or a custom API route) to receive submissions.
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 px-8 py-16 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white"
        >
          <CheckCircle2 size={32} />
        </motion.span>
        <h3 className="mt-5 font-display text-xl font-bold text-navy-950">
          Request Received!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-navy-700/75">
          Thanks for reaching out — we typically respond within a few hours.
          We&apos;ll follow up by phone or email to confirm your quote.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required placeholder="Jane Smith" />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          required
          placeholder="(706) 555-0123"
        />
      </div>
      <Field
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="jane@email.com"
      />
      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-semibold text-navy-900"
        >
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure / Multiple services">
            Not sure / Multiple services
          </option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-semibold text-navy-900"
        >
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Property size, vehicle make/model, preferred date, gate code, etc."
          className="w-full resize-none rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-400 hover:shadow-brand-400/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 size={20} className="animate-spin" />
              Sending...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send size={18} />
              Request Free Quote
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30"
      />
    </div>
  );
}
