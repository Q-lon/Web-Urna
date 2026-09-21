"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { english } from "@/data/english";

type Language = "es" | "en";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "es", setLanguage: () => {} });
function readLanguage(): Language {
  const requested = new URLSearchParams(location.search).get("lang");
  if (requested === "es" || requested === "en") return requested;
  try { return localStorage.getItem("shantibond-language") === "en" ? "en" : "es"; } catch { return "es"; }
}
function subscribe(callback: () => void) {
  window.addEventListener("shantibond-language", callback);
  window.addEventListener("popstate", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("shantibond-language", callback);
    window.removeEventListener("popstate", callback);
    window.removeEventListener("storage", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, readLanguage, (): Language => "es");
  useEffect(() => {
    document.documentElement.lang = language === "es" ? "es-AR" : "en";
    document.title = language === "es" ? "ShantiBond — La conexión profunda." : "ShantiBond — A deeper connection.";
  }, [language]);
  function changeLanguage(value: Language) {
    try { localStorage.setItem("shantibond-language", value); } catch {}
    const url = new URL(location.href);
    url.searchParams.set("lang", value);
    history.replaceState(history.state, "", url);
    window.dispatchEvent(new Event("shantibond-language"));
  }
  return <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  const t = (text: string) => context.language === "en" ? english[text] ?? text : text;
  function translate<T>(value: T): T {
    if (typeof value === "string") return t(value) as T;
    if (Array.isArray(value)) return value.map(translate) as T;
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translate(item)])) as T;
    return value;
  }
  return { ...context, t, translate };
}

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  return <div className="language-toggle" data-language={language} role="group" aria-label={t("Idioma")}>
    <button type="button" lang="es" aria-label="Español" aria-pressed={language === "es"} onClick={() => setLanguage("es")}>ES</button>
    <button type="button" lang="en" aria-label="English" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
  </div>;
}

export function SkipLink() {
  const { t } = useLanguage();
  return <a className="skip-link" href="#contenido">{t("Saltar al contenido")}</a>;
}
