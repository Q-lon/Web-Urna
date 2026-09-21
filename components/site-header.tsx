"use client";
import { useLanguage, LanguageToggle } from "@/components/language-provider";
/* Native anchors are intercepted by SectionAlignment to animate the full-page scroll. */
/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";
import { shantiBond } from "@/data/shantibond";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const links = [
  ["Inicio", "/#inicio"],
  ["Producto", "/#producto"],
  ["Quiénes somos", "/#origen"],
  ["Licencia", "/#licencia"],
  ["Alianzas", "/#alianzas"],
  ["Proceso", "/#proceso"],
] as const;

export function BrandMark({ showName = true }: { showName?: boolean }) {
  return (
    <span className="brand-mark" aria-label={siteConfig.brandName}>
      <Image src={shantiBond.logo.original} width={58} height={44} alt="" className="shanti-logo" />
      {showName && <span>{siteConfig.brandName}</span>}
    </span>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [darkSurface, setDarkSurface] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    const desktop = matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 18);
      const sections = [...document.querySelectorAll<HTMLElement>(".home-main > section")];
      const headerBox = menuButton.current?.getBoundingClientRect();
      const headerMiddle = headerBox && headerBox.height > 0 ? headerBox.top + headerBox.height / 2 : 44;
      const behindHeader = sections.find(section => { const box = section.getBoundingClientRect(); return box.top <= headerMiddle && box.bottom > headerMiddle; });
      setDarkSurface(["modulo", "alianzas", "socio", "fundadores"].includes(behindHeader?.id ?? ""));
      const current = sections.find(section => { const box = section.getBoundingClientRect(); return box.top <= innerHeight * .45 && box.bottom > innerHeight * .45; });
      const groups: Record<string, string> = { socio: "alianzas", fundadores: "proceso", expansion: "licencia", modulo: "producto", origen: "origen" };
      if (current) setActive(groups[current.id] ?? current.id);
    };
    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : "at-top"} ${pathname === "/" ? "over-hero" : "over-light"} ${open ? "menu-open" : ""} ${darkSurface ? "on-dark-surface" : ""}`}>
      <div className="shell header-inner">
        <a href="/#inicio" className="brand-link" aria-label={t("ShantiBond — Inicio")}><BrandMark showName={false} /></a>
        <nav className="desktop-nav" aria-label={t("Navegación principal")}>
          {links.map(([label, href]) => <a key={label} href={href} aria-current={href === `/#${active}` ? "location" : undefined}>{t(label)}</a>)}
          <a className="button button-small nav-consult" href="/#contacto" aria-current={active === "contacto" ? "location" : undefined}>{t("Ser socio")}</a>
        </nav>
        <LanguageToggle />
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-label={open ? t("Cerrar menú") : t("Abrir menú")}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label={t("Navegación móvil")}>
          <div className="shell">
            {links.map(([label, href]) => <a key={label} href={href} aria-current={href === `/#${active}` ? "location" : undefined} onClick={() => setOpen(false)}>{t(label)}</a>)}
            <a className="button" href="/#contacto" onClick={() => setOpen(false)}>{t("Ser socio")}</a>
            <LanguageToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
