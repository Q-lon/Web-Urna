"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site.config";

type State = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) nextErrors.name = "Ingresá tu nombre.";
    if (!String(data.get("lastName") || "").trim()) nextErrors.lastName = "Ingresá tu apellido.";
    const email = String(data.get("email") || "");
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Ingresá un email válido.";
    if (!String(data.get("message") || "").trim()) nextErrors.message = "Contanos brevemente tu consulta.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { setState("error"); return; }
    setState("loading");
    if (siteConfig.formEndpoint) {
      try {
        const response = await fetch(siteConfig.formEndpoint, { method: "POST", body: data });
        if (!response.ok) throw new Error("request failed");
        setState("success"); form.reset();
      } catch { setState("error"); }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 650));
      setState("success"); form.reset();
    }
  }

  const field = (name: string, label: string, type = "text", required = false) => <label className="field">
    <span>{label}{required && <span aria-hidden="true"> *</span>}</span>
    <input name={name} type={type} required={required} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} />
    {errors[name] && <small id={`${name}-error`} role="alert">{errors[name]}</small>}
  </label>;

  if (state === "success") return <div className="form-success" role="status"><span aria-hidden="true">✓</span><h2>Consulta registrada en modo demo.</h2><p>El formulario no envió datos porque todavía no existe un destino configurado. La experiencia final quedará conectada cuando el cliente confirme el canal de contacto.</p><button type="button" className="text-link" onClick={() => setState("idle")}>Enviar otra consulta</button></div>;

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-demo-note">Modo prototipo · el envío está simulado</div>
    <div className="field-grid">{field("name", "Nombre", "text", true)}{field("lastName", "Apellido", "text", true)}</div>
    <div className="field-grid">{field("email", "Email", "email", true)}{field("phone", "Teléfono", "tel")}</div>
    {field("petName", "Nombre de la mascota (opcional)")}
    <label className="field"><span>Mensaje *</span><textarea name="message" rows={5} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <small id="message-error" role="alert">{errors.message}</small>}</label>
    <button className="button" type="submit" disabled={state === "loading"}>{state === "loading" ? "Enviando…" : "Enviar consulta"}</button>
    {state === "error" && Object.keys(errors).length === 0 && <p className="form-error" role="alert">No pudimos procesar la consulta. Intentá nuevamente.</p>}
  </form>;
}
