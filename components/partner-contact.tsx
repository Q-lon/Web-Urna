"use client";
import { useLanguage } from "@/components/language-provider";

import { useState, type FormEvent } from "react";

export function PartnerContact() {
  const { t } = useLanguage();
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `${t('Nombre y apellido')}: ${data.get('nombre')}\n${t('Empresa')}: ${data.get('empresa')}\n${t('País / territorio')}: ${data.get('territorio')}\n${t('Tipo de negocio')}: ${data.get('tipo')}\n\n${data.get('mensaje')}`;
    window.location.href = `mailto:info@shantibond.com?subject=${encodeURIComponent(t('Consulta de licencia') + ' — ' + data.get('empresa'))}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <form className="partner-contact-form" onSubmit={submit}>
    <label>{t("Nombre y apellido")}<input name="nombre" autoComplete="name" placeholder={t("Tu nombre")} required /></label>
    <label>{t("Empresa")}<input name="empresa" autoComplete="organization" placeholder={t("Nombre de tu empresa")} required /></label>
    <label>{t("País / territorio de interés")}<input name="territorio" placeholder={t("Tu país o región")} required /></label>
    <label>{t("Tipo de negocio")}<select name="tipo"><option>{t("Mayorista / Distribuidor")}</option><option>{t("Crematorio / Cementerio de mascotas")}</option><option>{t("Clínica / Cadena veterinaria")}</option><option>{t("Aseguradora de mascotas")}</option><option>{t("Cliente institucional")}</option><option>{t("Otro")}</option></select></label>
    <label className="form-wide">{t("Mensaje")}<textarea name="mensaje" rows={3} required placeholder={t("Contanos sobre tu empresa, tu mercado y tu capacidad de fabricación o distribución.")} /></label>
    <button className="button button-light form-wide" type="submit">{t("Consultar")}</button>
    {prepared && <p className="form-note form-wide" role="status">{t("Revisá y enviá la consulta desde tu aplicación de correo.")}</p>}
  </form>;
}
