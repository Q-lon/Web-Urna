import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
export const metadata: Metadata = { title: "Contacto" };
export default function ContactPage() { return <main><section className="contact-page"><div className="shell contact-grid"><div className="contact-intro"><p className="eyebrow">Contacto</p><h1>Conocé más sobre nuestras urnas.</h1><p>Dejanos tu consulta. En esta etapa, el formulario funciona como una demostración visual y no envía información.</p><div className="contact-availability"><span>Canales oficiales</span><b>A confirmar</b></div></div><ContactForm /></div></section></main>; }
