"use client";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import { shantiBond as sourceBrand } from "@/data/shantibond";
import { EditorialConcepts } from "@/components/editorial-accordions";
import { SectionAlignment } from "@/components/section-alignment";
import { ProductStory, BrandExpansion } from "@/components/client-story";
import { PartnerContact } from "@/components/partner-contact";

export default function Home() {
  const { t, translate } = useLanguage();
  const brand = translate(sourceBrand);
  return <main className="home-main editorial-home">
    <SectionAlignment />
    <section id="inicio" className="hero">
      <div className="hero-image"><Image src="/images/lifestyle/shanti-diffused-hero.png" alt={t("Representación del memorial ShantiBond sobre mármol, con luz cálida y fondo difuminado")} fill priority sizes="100vw" className="cover" /><div className="hero-scrim" /></div>
      <div className="shell hero-content"><div className="hero-copy"><Image className="hero-brand" src="/images/brand/shantibond-logo-original.png" alt="ShantiBond" width={156} height={118} priority /><h1>{brand.claim}</h1><p>{brand.description}</p><div className="button-row"><a href="#producto" className="button button-light">{t("Conocer el Producto")}</a><a href="#contacto" className="button button-ghost-light">{t("Ser socio")}</a></div></div></div>
    </section>
    <section id="producto" className="section showcase-section"><div className="shell product-video-layout">
      <div className="product-heading"><div><p className="eyebrow">{t("Producto")}</p><h2 className="display-title">{t("El producto")}</h2></div><p>{t("Una urna memorial de madera noble con pantalla audiovisual integrada, pensada para durar generaciones y para fabricarse bajo un mismo estándar en cualquier mercado.")}</p></div>
      <div className="product-video-body"><figure className="product-video-frame"><div className="video-placeholder" aria-hidden="true"><span className="video-placeholder-symbol">▷</span></div><figcaption className="video-preview-note">{t("Acá va el video en esta sección y vemos cómo se acompaña.")}</figcaption></figure>
      <div className="product-materials"><p className="eyebrow">{t("Materiales y forma")}</p><h3>{t("Madera noble, calidez artesanal")}</h3><p>{t("Trabajamos con maderas nobles seleccionadas por su calidez y durabilidad. Cada licenciatario fabrica localmente a partir de la ficha técnica y el estándar mínimo de calidad de la marca, lo que garantiza una misma experiencia allí donde ShantiBond esté presente.")}</p><a href="#contacto" className="text-link">{t("Conocer más")} <span aria-hidden="true">↗</span></a></div></div>
    </div></section>
    <ProductStory />
    <section id="licencia" className="section intro-section"><div className="shell editorial-grid intro-grid"><div><p className="eyebrow">{t("Expansión territorial")}</p><h2 className="display-title">{brand.business.title}</h2><p className="lead">{brand.business.description}</p></div></div></section>
    <section id="alianzas" className="section display-section"><div className="shell display-grid"><figure className="wide-image"><Image src="/images/products/shanti-editorial-detail.png" alt={t("Detalle de la placa Shanti y la madera barnizada; representación generada")} fill sizes="(max-width: 980px) 92vw, 56vw" className="cover" /></figure><div className="display-copy"><p className="eyebrow">{t("La alianza")}</p><h2>{t("Lo que aporta ShantiBond")}</h2><EditorialConcepts items={brand.business.brandContributions} /></div></div></section>
    <section id="socio" className="section design-story"><div className="shell design-story-grid partner-grid"><div className="design-story-copy"><p className="eyebrow eyebrow-light">{t("Un socio local por mercado")}</p><h2>{t("Lo que aporta el socio licenciatario")}</h2><div className="partner-signature desktop-detail"><p>{t("TERRITORIO / SOCIO LOCAL")}<br />{t("Una presencia propia.")}<br />{t("Una identidad compartida.")}</p></div></div><ul className="brand-contributions partner-cards">{brand.business.partnerContributions.map((item) => <li key={item}><span>{item}</span></li>)}</ul></div></section>
    <section id="proceso" className="section steps-section"><div className="shell"><div className="section-heading"><p className="eyebrow">{t("El proceso")}</p><h2>{brand.process.title}</h2></div><div className="steps-grid alliance-steps">{brand.process.steps.map((step, i) => <article key={step.title} className="step-card"><span className="step-number" aria-hidden="true">0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>
    <section id="fundadores" className="section philosophy-section"><div className="founder-image desktop-detail" aria-hidden="true" /><div className="shell philosophy-inner founders-copy"><p className="eyebrow">{t("Socios fundadores")}</p><h2 className="display-title">{brand.founders.title}</h2><p className="lead">{brand.founders.description}</p></div></section>
    <BrandExpansion />
    <section id="contacto" className="cta-section"><div className="shell cta-inner"><div className="cta-copy"><p className="eyebrow eyebrow-light">{t("Contacto")}</p><h2>{t("Conversemos.")}</h2><p>{t("Atendemos consultas de mayoristas, distribuidores, cadenas del sector funerario y veterinario, y grandes clientes interesados en un territorio de licencia exclusiva.")}</p><div className="client-contact-links"><a href="mailto:info@shantibond.com"><small>Email</small>{brand.contact.email}</a><a href="https://wa.me/5491161157358" target="_blank" rel="noreferrer"><small>{t("Teléfono / WhatsApp")}</small>{brand.contact.phone}</a></div><p className="client-caption">{t("Antes de escribirnos: contanos tu tipo de negocio, territorio y capacidad de fabricación o distribución.")}</p></div><PartnerContact /></div></section>
  </main>;
}
