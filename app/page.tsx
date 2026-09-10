import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MoveRight } from "lucide-react";
import { content } from "@/data/content";
import { faqs } from "@/data/faqs";
import { products } from "@/data/products";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection, ProductGrid, SectionHeading, VideoSection } from "@/components/ui";

export default function Home() {
  return <main>
    <section className="hero">
      <div className="hero-image"><Image src="/images/lifestyle/hero-urn-provisional.png" alt="Representación provisoria de una urna para mascotas con display integrado en un ambiente sereno" fill priority sizes="100vw" className="cover" /><div className="hero-scrim" /></div>
      <div className="shell hero-content"><div className="hero-copy"><p className="eyebrow eyebrow-light">{content.hero.eyebrow}</p><h1>{content.hero.title}</h1><p>{content.hero.description}</p><div className="button-row"><Link href="#la-urna" className="button button-light">Conocer la urna</Link><Link href="/como-funciona" className="button button-ghost-light">Cómo funciona <MoveRight aria-hidden="true" /></Link></div></div><a className="scroll-cue" href="#la-urna"><ArrowDown aria-hidden="true" /><span>Descubrir</span></a></div>
      <span className="image-note">Visualización provisoria del producto</span>
    </section>

    <section id="la-urna" className="section intro-section"><div className="shell editorial-grid"><p className="eyebrow">El concepto</p><div><h2 className="display-title">{content.intro.title}</h2><p className="lead">{content.intro.body}</p></div><div className="concept-equation" aria-label="Urna más display más imágenes"><span>Urna física</span><b aria-hidden="true">+</b><span>Display integrado</span><b aria-hidden="true">+</b><span>Recuerdos visuales</span></div></div></section>

    <section className="section showcase-section"><div className="shell showcase-grid"><div className="showcase-sticky"><p className="eyebrow">El objeto</p><h2 className="display-title">Diseño que guarda una historia.</h2><p>Una presencia serena para el hogar. La pantalla forma parte de la urna: acompaña al objeto sin convertirlo en un dispositivo.</p><div className="feature-list"><span>Diseño</span><span>Recuerdo</span><span>Pantalla integrada</span><span>Personalización</span></div><Link href="/urnas" className="text-link">Conocer los modelos <span aria-hidden="true">↗</span></Link></div><figure className="showcase-image"><Image src="/images/products/urn-studio-provisional.png" alt="Vista conceptual frontal de una urna con display integrado" fill sizes="(max-width: 800px) 92vw, 50vw" className="cover" /><figcaption>Concepto visual · producto sujeto a definición</figcaption></figure></div></section>

    <section className="section display-section"><div className="shell display-grid"><figure className="wide-image"><Image src="/images/lifestyle/urn-home-provisional.png" alt="Representación de una urna con pantalla integrada mostrando una mascota" fill sizes="(max-width: 800px) 100vw, 56vw" className="cover" /></figure><div className="display-copy"><p className="eyebrow">El display</p><h2>Imágenes que también forman parte del recuerdo.</h2><p>La urna incorpora un display integrado pensado para acompañar el objeto físico con fotografías y momentos compartidos.</p><span className="pending-label">Características técnicas próximamente</span></div></div></section>

    <section className="section steps-section"><div className="shell"><SectionHeading eyebrow="Cómo funciona" title="Tres gestos simples para darle un lugar a su historia." /><div className="steps-grid">{content.steps.map(([number, title, description]) => <article key={number} className="step-card"><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><p className="validation-note">Proceso conceptual pendiente de validación con el cliente.</p></div></section>

    <section className="section models-section"><div className="shell"><SectionHeading eyebrow="Colección provisoria" title="Formas para una presencia íntima y personal."><p>Estos modelos son demostrativos. No representan materiales, medidas ni disponibilidad definitivos.</p></SectionHeading><ProductGrid products={products} /><div className="center-action"><Link href="/urnas" className="button button-outline">Ver todos los modelos</Link></div></div></section>

    <section className="section design-story"><div className="shell design-story-grid"><div className="design-story-copy"><p className="eyebrow eyebrow-light">Diseño para habitar</p><h2>Pensada para formar parte de tu espacio.</h2><p>Un objeto que conserva un recuerdo sin esconderlo. Su lenguaje sereno busca integrarse a la vida cotidiana con respeto y naturalidad.</p></div><div className="design-story-line"><span>01</span><p>Primero, un objeto de diseño.</p></div><div className="design-story-line"><span>02</span><p>Luego, una presencia visual.</p></div></div></section>

    <section className="section personalization-section"><div className="shell editorial-grid"><p className="eyebrow">Personalización</p><div><h2 className="display-title">Un recuerdo tan singular como su historia.</h2><p className="lead">Estamos explorando distintas maneras de hacer cada pieza personal. Las opciones finales todavía no están confirmadas.</p></div><div className="personalization-list">{content.personalization.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><span aria-hidden="true">—</span></div>)}</div></div></section>

    <VideoSection />

    <section className="section philosophy-section"><div className="shell philosophy-inner"><p className="eyebrow">Nuestra mirada</p><blockquote>“Las imágenes, los gestos y los momentos compartidos construyen una historia. Esta urna busca darle a ese recuerdo un lugar físico y visual.”</blockquote></div></section>
    <section className="section faq-preview"><div className="shell faq-grid"><SectionHeading eyebrow="Preguntas frecuentes" title="Lo que sabemos hasta ahora."><p>Las respuestas técnicas se completarán cuando cada modelo sea validado.</p><Link className="text-link" href="/preguntas-frecuentes">Ver todas las preguntas <span aria-hidden="true">↗</span></Link></SectionHeading><FAQAccordion items={faqs.slice(0, 5)} /></div></section>
    <CTASection />
  </main>;
}
