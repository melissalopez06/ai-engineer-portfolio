"use client";

import { PLACEHOLDER } from "@/lib/site-config";
import { usePortfolio } from "@/components/PortfolioProvider";
import { ui } from "@/lib/ui-classes";
import { SectionHeading } from "./SectionHeading";

function isPlaceholder(text: string) {
  return text.includes(PLACEHOLDER);
}

export function Certifications() {
  const { t } = usePortfolio();

  return (
    <section
      id="certifications"
      className={`scroll-mt-20 border-t py-20 sm:py-28 ${ui.sectionBorder} ${ui.sectionAlt}`}
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="certifications-heading"
          label={t.certifications.label}
          title={t.certifications.title}
          description={t.certifications.description}
        />

        <ul className="flex flex-col gap-4">
          {t.certifications.items.map((cert, index) => (
            <li
              key={index}
              className={`rounded-md border p-6 ${
                isPlaceholder(cert.name)
                  ? "border-dashed border-amber-400/50 bg-amber-50/50 dark:bg-amber-950/20"
                  : ui.card
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  isPlaceholder(cert.name)
                    ? "font-mono text-sm text-amber-700 dark:text-amber-400"
                    : ui.heading
                }`}
              >
                {cert.name}
              </h3>
              <p className={`mt-1 text-sm ${ui.muted}`}>{cert.issuer}</p>
              <p className="mt-1 font-mono text-xs text-slate-500">{cert.date}</p>
              {"url" in cert ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-md bg-black px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#9b7ede] dark:bg-[#fbfaf6] dark:text-black dark:hover:bg-[#d8c7ac]"
                >
                  {cert.cta}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
