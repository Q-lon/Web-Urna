import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Product } from "@/data/products";
import { siteConfig } from "@/config/site.config";

export function SectionHeading({ eyebrow, title, children, align = "left" }: { eyebrow?: string; title: string; children?: ReactNode; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {children && <div className="section-copy">{children}</div>}
  </div>;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/urnas/${product.slug}`} className="product-image-wrap">
        <Image src={product.images[0]} alt={`Vista de ${product.name}`} fill sizes="(max-width: 760px) 92vw, 45vw" className="cover" />
      </Link>
      <div className="product-card-copy">
        <div><h3>{product.name}</h3><p>{product.description}</p></div>
        <Link className="text-link" href={`/urnas/${product.slug}`}>Ver modelo <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>;
}

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="shell cta-inner">
        <div className="cta-copy">
          <h2>¿Querés conocer más sobre nuestras urnas?</h2>
          <p>Contactanos para conocer los modelos, opciones y características disponibles.</p>
        </div>
        <Link className="button button-light cta-button" href="/contacto">Hacer una consulta</Link>
      </div>
    </section>
  );
}

export function VideoSection() {
  return (
    <section className="section video-section"><div className="shell">
      <SectionHeading eyebrow="El recuerdo" title="Una historia que permanece."><p>Imágenes y momentos compartidos encuentran un lugar junto a la memoria.</p></SectionHeading>
      {siteConfig.videoUrl ? (
        <video className="video-player" src={siteConfig.videoUrl} poster={siteConfig.videoPoster} controls playsInline muted preload="metadata">Tu navegador no puede reproducir este video.</video>
      ) : (
        <div className="video-placeholder"><Image src={siteConfig.videoPoster} alt="Una urna integrada en un ambiente cálido del hogar" fill sizes="92vw" className="cover" /></div>
      )}
    </div></section>
  );
}
