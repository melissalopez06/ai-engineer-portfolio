"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { siteConfig } from "@/lib/site-config";
import {
  translations,
  type Locale,
  type Translation,
} from "@/lib/translations";

type Theme = "light" | "dark";

type PortfolioContextValue = {
  locale: Locale;
  theme: Theme;
  t: Translation;
  setLocale: (locale: Locale) => void;
  toggleTheme: () => void;
};

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

const LOCALE_KEY = "portfolio-locale";
const THEME_KEY = "portfolio-theme";

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_KEY) as Locale | null;
    if (storedLocale === "es" || storedLocale === "en") {
      setLocaleState(storedLocale);
    }
    setTheme("light");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(LOCALE_KEY, locale);
    localStorage.setItem(THEME_KEY, theme);
  }, [locale, theme, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      theme,
      t: translations[locale],
      setLocale,
      toggleTheme,
    }),
    [locale, theme, setLocale, toggleTheme],
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return ctx;
}

export { siteConfig };
