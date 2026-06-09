"use client";

import { usePortfolio } from "@/components/PortfolioProvider";
import { ui } from "@/lib/ui-classes";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  const { t } = usePortfolio();

  return (
    <section
      id="education"
      className={`scroll-mt-20 border-t py-20 sm:py-28 ${ui.sectionBorder}`}
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="education-heading"
          label={t.education.label}
          title={t.education.title}
        />

        <ul className="flex flex-col gap-4">
          {t.education.items.map((item) => (
            <li
              key={`${item.institution}-${item.degree}`}
              className={`rounded-xl border p-6 ${ui.card}`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className={`text-lg font-semibold ${ui.heading}`}>
                    {item.degree}
                  </h3>
                  <p className="text-[#9b7ede]">
                    {item.institution}
                  </p>
                </div>
                <time className="mt-1 font-mono text-xs text-slate-500 sm:mt-0">
                  {item.period}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
