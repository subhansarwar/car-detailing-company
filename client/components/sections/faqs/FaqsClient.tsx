"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccordionItem } from "@/components/ui/Accordion";
import type { FaqItem } from "@/lib/site";

export default function FaqsClient({ faqs }: { faqs: FaqItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(faqs.map((f) => f.category)))],
    [faqs]
  );
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? faqs : faqs.filter((f) => f.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              active === cat
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                : "border border-navy-900/12 text-navy-800 hover:border-brand-300 hover:text-brand-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((faq) => (
            <motion.div
              key={faq.question}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <AccordionItem question={faq.question}>{faq.answer}</AccordionItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
