"use client";

import { useState } from "react";
import { usePortfolio, siteConfig } from "@/components/PortfolioProvider";
import { ui } from "@/lib/ui-classes";

const navHrefs = [
  { href: "#about", key: "about" as const },
  { href: "#skills", key: "skills" as const },
  { href: "#projects", key: "projects" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#education", key: "education" as const },
  { href: "#certifications", key: "certifications" as const },
  { href: "#contact", key: "contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale, theme, toggleTheme } = usePortfolio();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md ${ui.header}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className={`shrink-0 font-mono text-sm font-semibold tracking-tight ${ui.logo}`}
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-[#e84f52]">.</span>ai
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label={t.a11y.navMain}
        >
          {navHrefs.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${ui.navLink}`}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex rounded-lg border border-slate-200 p-0.5 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={`rounded-md px-2 py-1 font-mono text-xs transition-colors ${
                locale === "es"
                  ? "bg-black text-white dark:bg-[#fbfaf6] dark:text-black"
                  : ui.iconBtn
              }`}
              aria-label={t.a11y.langEs}
              aria-pressed={locale === "es"}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-md px-2 py-1 font-mono text-xs transition-colors ${
                locale === "en"
                  ? "bg-black text-white dark:bg-[#fbfaf6] dark:text-black"
                  : ui.iconBtn
              }`}
              aria-label={t.a11y.langEn}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className={`rounded-lg p-2 ${ui.iconBtn}`}
            aria-label={theme === "dark" ? t.a11y.themeLight : t.a11y.themeDark}
          >
            {theme === "dark" ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-md bg-black px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-[#9b7ede] sm:px-4 md:inline-block dark:bg-[#fbfaf6] dark:text-black dark:hover:bg-[#d8c7ac]"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            className={`inline-flex rounded-lg p-2 lg:hidden ${ui.iconBtn}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className={`border-t px-4 py-4 lg:hidden ${ui.mobileMenu}`}
          aria-label={t.a11y.navMobile}
        >
          <ul className="flex flex-col gap-1">
            {navHrefs.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-lg px-3 py-2.5 text-base ${ui.mobileLink}`}
                  onClick={() => setOpen(false)}
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block rounded-md bg-black px-3 py-2.5 text-center font-bold text-white dark:bg-[#fbfaf6] dark:text-black"
                onClick={() => setOpen(false)}
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
