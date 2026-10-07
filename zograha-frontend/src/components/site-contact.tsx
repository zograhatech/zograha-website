"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { api } from "@/lib/zograha-api";
import type { CompanySettings } from "@/types/api";

type SettingsState =
  | { status: "loading"; settings: null; retry: () => void }
  | { status: "error"; settings: null; retry: () => void }
  | { status: "ready"; settings: CompanySettings; retry: () => void };

const SettingsContext = createContext<SettingsState | null>(null);

export function SiteContactProvider({ children }: { children: ReactNode }) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<{ attempt: number; settings?: CompanySettings } | null>(null);

  useEffect(() => {
    let active = true;
    api.settings().then((settings) => {
      if (active) setResult({ attempt, settings });
    }).catch(() => {
      if (active) setResult({ attempt });
    });
    return () => { active = false; };
  }, [attempt]);

  const retry = () => setAttempt((current) => current + 1);
  const state: SettingsState = result?.attempt !== attempt
    ? { status: "loading", settings: null, retry }
    : result.settings
      ? { status: "ready", settings: result.settings, retry }
      : { status: "error", settings: null, retry };

  return <SettingsContext.Provider value={state}>{children}</SettingsContext.Provider>;
}

export function useSiteSettings() {
  const state = useContext(SettingsContext);
  if (!state) throw new Error("useSiteSettings must be used within SiteContactProvider");
  return state;
}

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
  youtube: "YouTube",
};

export function safePublicHref(value: string | null | undefined, protocols: string[]) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return protocols.includes(url.protocol) ? value : null;
  } catch {
    return null;
  }
}

export function SiteContactLinks() {
  const state = useSiteSettings();
  if (state.status === "loading") return null;
  if (state.status === "error") return <div className="footer-settings-error" role="status">Contact links unavailable. <button className="settings-retry" type="button" onClick={state.retry}>Retry</button></div>;
  const { settings } = state;
  const whatsapp = safePublicHref(settings.links.whatsapp, ["https:"]);
  const call = safePublicHref(settings.links.call, ["tel:"]);
  const email = safePublicHref(settings.links.email, ["mailto:"]);
  const maps = safePublicHref(settings.googleMapsEmbedUrl, ["https:"]);

  return (
    <div className="footer-public-links">
      {whatsapp ? <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a> : null}
      {call ? <a href={call}>Call</a> : null}
      {email ? <a href={email}>Email</a> : null}
      {maps ? <a href={maps} target="_blank" rel="noreferrer">Google Maps</a> : null}
      {Object.entries(settings.social).map(([key, href]) => (
        safePublicHref(href, ["https:", "http:"]) ? <a href={href} key={key} target="_blank" rel="noreferrer">{socialLabels[key] ?? key}</a> : null
      ))}
    </div>
  );
}

export function HomeContactSummary() {
  const state = useSiteSettings();
  if (state.status === "loading") return <p role="status">Loading contact information…</p>;
  if (state.status === "error") return <p role="alert">Contact information unavailable. <button className="settings-retry" type="button" onClick={state.retry}>Retry</button></p>;
  const { settings } = state;
  const whatsapp = safePublicHref(settings.links.whatsapp, ["https:"]);
  const call = safePublicHref(settings.links.call, ["tel:"]);
  const email = safePublicHref(settings.links.email, ["mailto:"]);
  const maps = safePublicHref(settings.googleMapsEmbedUrl, ["https:"]);
  return (
    <div className="home-contact-details">
      <span>{settings.address}</span>
      {call ? <a href={call}>{settings.phone}</a> : null}
      {email ? <a href={email}>{settings.email}</a> : null}
      {whatsapp ? <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a> : null}
      {maps ? <a href={maps} target="_blank" rel="noreferrer">Google Maps <span aria-hidden="true">↗</span></a> : null}
    </div>
  );
}