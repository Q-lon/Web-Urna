"use client";
import { useLanguage } from "@/components/language-provider";
/* Native section anchors use the shared SectionAlignment scroll controller. */
/* eslint-disable @next/next/no-html-link-for-pages */
import { shantiBond as sourceBrand } from "@/data/shantibond";
import { BrandMark } from "./site-header";
export function SiteFooter() {
  const { t, translate } = useLanguage();
  const brand = translate(sourceBrand);
 return <footer className="site-footer"><div className="shell footer-top"><nav className="footer-secondary" aria-label={t("Navegación secundaria")}><a href="/#producto">{t("Producto")}</a><a href="/#licencia">{t("Licencia")}</a><a href="/#contacto">{t("Contacto")}</a></nav><BrandMark /><div><p>{brand.footer.claim}</p></div></div><div className="shell footer-bottom"><span>{brand.footer.copyright}</span><span>{brand.footer.registration}</span></div></footer>;
}
