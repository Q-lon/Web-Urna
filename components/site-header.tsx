"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const links = [
  ["Inicio", "/"],
  ["La urna", "/#la-urna"],
  ["Modelos", "/urnas"],
  ["Cómo funciona", "/como-funciona"],
  ["Preguntas frecuentes", "/preguntas-frecuentes"],
  ["Contacto", "/contacto"],
] as const;

export function BrandMark() {
  return (
    <span className="brand-mark" aria-label={`${siteConfig.brandName}, marca provisoria`}>
      <span className="brand-symbol" aria-hidden="true">u·</span>
      <span>{siteConfig.brandName}</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand-link"><BrandMark /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <Link className="button button-small desktop-cta" href="/contacto">Consultar</Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">
          <div className="shell">
            {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="button" href="/contacto" onClick={() => setOpen(false)}>Consultar</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
