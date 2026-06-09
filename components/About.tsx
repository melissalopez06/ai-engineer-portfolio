"use client";

import { usePortfolio } from "@/components/PortfolioProvider";
import { ui } from "@/lib/ui-classes";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = usePortfolio();

  return (
    <section
      id="about"
      className={`scroll-mt-20 border-t py-20 sm:py-28 ${ui.sectionBorder}`}
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-heading"
          label={t.about.label}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <p className={`text-base leading-relaxed lg:col-span-3 ${ui.muted}`}>
            {t.about.summary}
          </p>

          <aside className="lg:col-span-2">
            <div className={`rounded-md border p-6 shadow-[8px_8px_0_#d8c7ac] ${ui.card}`}>
              <h3 className="font-mono text-xs font-black uppercase tracking-normal text-[#9b7ede]">
                {t.about.languagesTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {t.about.languages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
