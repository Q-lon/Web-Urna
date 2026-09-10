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

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="product-card">
      <Link href={`/urnas/${product.slug}`} className="product-image-wrap">
        <Image src={product.images[0]} alt={`Representación provisoria de ${product.name}`} fill sizes="(max-width: 760px) 92vw, 45vw" className="cover" />
        <span className="prototype-badge">Imagen provisoria</span>
      </Link>
      <div className="product-card-copy">
        <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
        <div><h3>{product.name}</h3><p>{product.description}</p></div>
        <Link className="text-link" href={`/urnas/${product.slug}`}>Ver modelo <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return <div className="product-grid">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>;
}

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="shell cta-inner">
        <p className="eyebrow">Estamos para acompañarte</p>
        <h2>Conocé más sobre nuestras urnas.</h2>
        <p>Consultanos para recibir novedades cuando los modelos y sus características sean confirmados.</p>
        <Link className="button button-light" href="/contacto">Hacer una consulta</Link>
      </div>
    </section>
  );
}

export function VideoSection() {
  return (
    <section className="section video-section"><div className="shell">
      <SectionHeading eyebrow="Próximamente" title="Una historia que permanece."><p>Este espacio recibirá el video promocional de la marca.</p></SectionHeading>
      {siteConfig.videoUrl ? (
        <video className="video-player" src={siteConfig.videoUrl} poster={siteConfig.videoPoster} controls playsInline muted preload="metadata">Tu navegador no puede reproducir este video.</video>
      ) : (
        <div className="video-placeholder"><Image src={siteConfig.videoPoster} alt="Poster provisorio del futuro video promocional" fill sizes="92vw" className="cover" /><span className="video-icon" aria-hidden="true">▶</span><p>Video en preparación</p></div>
      )}
    </div></section>
  );
}
