import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", display: "swap", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans-custom", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Urnas digitales para mascotas — Prototipo", template: "%s | Urna Digital" },
  description: "Prototipo de urnas físicas para mascotas con display integrado, pensado para acompañar sus recuerdos con imágenes.",
  openGraph: { title: "Sus recuerdos, siempre presentes.", description: "Una urna física con display integrado para acompañar el recuerdo con imágenes.", type: "website", locale: "es_AR" },
  robots: { index: false, follow: false },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${serif.variable} ${sans.variable}`}><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><div id="contenido">{children}</div><SiteFooter /></body>
    </html>
  );
}
