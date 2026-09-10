import type { Metadata } from "next";
import { ProductGrid, SectionHeading, CTASection } from "@/components/ui";
import { products } from "@/data/products";
export const metadata: Metadata = { title: "Modelos de urnas" };
export default function UrnasPage() { return <main><section className="page-hero"><div className="shell"><p className="eyebrow">Colección provisoria</p><h1>Urnas pensadas para convivir con tus recuerdos.</h1><p>Una primera exploración visual de formas y proporciones. Los modelos, materiales y características todavía están en etapa de definición.</p></div></section><section className="section"><div className="shell"><SectionHeading title="Modelos conceptuales"><p>Cada imagen es una representación provisoria y reemplazable.</p></SectionHeading><ProductGrid products={products} /></div></section><CTASection /></main>; }
