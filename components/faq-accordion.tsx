"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "@/data/faqs";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{items.map((item, index) => {
    const expanded = open === index;
    return <div className="faq-item" key={item.question}>
      <h3>
        <button type="button" aria-expanded={expanded} aria-controls={`faq-panel-${index}`} onClick={() => setOpen(expanded ? -1 : index)}>
          <span>{item.question}</span><Plus aria-hidden="true" className={expanded ? "rotate" : ""} />
        </button>
      </h3>
      <div id={`faq-panel-${index}`} className="faq-answer" hidden={!expanded}><p>{item.answer}</p></div>
    </div>;
  })}</div>;
}
