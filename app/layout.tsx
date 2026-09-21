import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import "./polish.css";
import "./editorial.css";
import "./motion-polish.css";
import "./final-polish.css";
import "./responsive.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageMotion } from "@/components/page-motion";
import { LanguageProvider, SkipLink } from "@/components/language-provider";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", display: "swap", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans-custom", display: "swap" });

export const metadata: Metadata = {
  title: { default: "ShantiBond — La conexión profunda.", template: "%s | ShantiBond" },
  description: "Licencia de marca exclusiva para el nuevo memorial audiovisual de mascotas.",
  openGraph: { title: "ShantiBond — La conexión profunda.", description: "Licencia de marca exclusiva para el nuevo memorial audiovisual de mascotas.", type: "website", locale: "es_AR" },
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
      <body className={`${serif.variable} ${sans.variable}`}><LanguageProvider><SkipLink /><SiteHeader /><div id="contenido">{children}</div><SiteFooter /><PageMotion /></LanguageProvider></body>
    </html>
  );
}
