"use client";
import { useLanguage } from "@/components/language-provider";
export function ProductStory() {
  const { t } = useLanguage();
  return <>
    <section id="modulo" className="section client-module"><div className="shell client-story-grid">
      <div><p className="eyebrow">{t("Módulo audiovisual")}</p><h2>{t("Una pantalla,")}<br />{t("no una plataforma.")}</h2><p className="client-lead">{t("Fotos y video por USB. Reproducción en loop, sin internet, aplicaciones, cuentas ni recolección de datos.")}</p></div>
      <div className="client-details"><article><span>{t("PRIVACIDAD")}</span><h3>{t("Simple. Privada. Propia.")}</h3><p>{t("La cavidad interna de las cenizas nunca se toca ni se interviene.")}</p></article><article><span>{t("MANTENIMIENTO")}</span><h3>{t("Servicio desde el frente.")}</h3><p>{t("El panel con acrílico se retira por el frente.")}</p></article><article><span>{t("CONTINUIDAD")}</span><h3>{t("Un módulo intercambiable.")}</h3><p>{t("Un componente genérico con estándar técnico definido por la licencia, sin depender de un proveedor único.")}</p></article></div>
    </div></section>
    <section id="origen" className="section client-origin"><div className="shell client-story-grid about-grid">
      <div><h2>{t("Quiénes somos")}</h2><p className="client-lead">{t("Un grupo de profesionales y emprendedores ligados al mundo animal, construyendo una forma más humana de acompañar la pérdida de una mascota.")}</p></div>
      <div className="about-origin"><p className="eyebrow">{t("NUESTRO ORIGEN")}</p><h3>{t("De dónde viene ShantiBond")}</h3><p>{t("Somos un grupo de profesionales y emprendedores ligados al mundo animal. El crecimiento exponencial del negocio veterinario (en especial en el área de aftercare) nos hizo pensar en cómo trabajar una contención más humana para quien atraviesa la pérdida de un ser querido.")}</p><p>{t("Que la urna fuera un objeto distinto en su vida, no un trámite más, sino parte de un duelo acompañado. De ahí surge el concepto de ShantiBond.")}</p></div>
    </div></section>
  </>;
}

export function BrandExpansion() {
  const { t } = useLanguage();
  return <section id="expansion" className="section client-expansion"><div className="shell client-story-grid"><div><p className="eyebrow">{t("Expansión territorial")}</p><h2>{t("Una marca protegida.")}<br />{t("Nuevos mercados.")}</h2><p className="client-lead">{t("La protección de marca y diseño es la base de cada acuerdo. Evaluamos nuevos países y regiones: si operás donde aún no estamos presentes, queremos conocerte primero.")}</p><p>{t("Según la información de ShantiBond, en la mayoría de los mercados en desarrollo no existe hoy una urna audiovisual equivalente.")}</p></div><div className="client-details"><article><span>ARGENTINA</span><h3>{t("Marca y diseño industrial registrados.")}</h3></article><article><span>{t("UNIÓN EUROPEA")}</span><h3>{t("Diseño industrial registrado.")}</h3><p>{t("Marca en fase final de registro.")}</p></article><article><span>{t("EXCLUSIVIDAD")}</span><h3>{t("Un socio. Un mercado propio.")}</h3><p>{t("ShantiBond aporta marca, diseño y calidad; el socio, fabricación, certificación, distribución y capital.")}</p></article></div></div></section>;
}
