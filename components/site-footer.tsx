import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { BrandMark } from "./site-header";

export function SiteFooter() {
  const contact = [siteConfig.email, siteConfig.phone, siteConfig.instagram, siteConfig.address].filter(Boolean);
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <BrandMark />
          <p className="footer-note">Prototipo visual. Marca, producto y contenido sujetos a validación.</p>
        </div>
        <div className="footer-links" aria-label="Enlaces del pie">
          <Link href="/">Inicio</Link><Link href="/#la-urna">La urna</Link><Link href="/urnas">Modelos</Link>
          <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link><Link href="/contacto">Contacto</Link>
        </div>
        <div className="footer-contact">
          <p className="footer-label">Contacto</p>
          {contact.length ? contact.map((item) => <span key={item}>{item}</span>) : <span>Datos a confirmar</span>}
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.brandName}</span>
        <div><span>Privacidad</span><span>Términos</span><span>Cookies</span></div>
      </div>
    </footer>
  );
}
