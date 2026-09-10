import type { Metadata } from "next";
import { FAQAccordion } from "@/components/faq-accordion";
import { faqs } from "@/data/faqs";
import { CTASection } from "@/components/ui";
export const metadata: Metadata = { title: "Preguntas frecuentes" };
export default function FAQPage() { return <main><section className="page-hero"><div className="shell"><p className="eyebrow">Preguntas frecuentes</p><h1>Respuestas claras, a medida que el producto toma forma.</h1><p>Este prototipo evita anticipar especificaciones que todavía no fueron confirmadas.</p></div></section><section className="section"><div className="shell faq-page-grid"><div><h2>Todo lo que está en definición.</h2><p>Actualizaremos estas respuestas con información precisa para cada modelo.</p></div><FAQAccordion items={faqs} /></div></section><CTASection /></main>; }
