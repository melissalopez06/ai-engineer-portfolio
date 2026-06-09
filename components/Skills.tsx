"use client";

import { usePortfolio } from "@/components/PortfolioProvider";
import { ui } from "@/lib/ui-classes";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const { t } = usePortfolio();

  return (
    <section
      id="skills"
      className={`scroll-mt-20 border-t py-20 sm:py-28 ${ui.sectionBorder} ${ui.sectionAlt}`}
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="skills-heading"
          label={t.skills.label}
          title={t.skills.title}
          description={t.skills.description}
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {t.skills.items.map((skill, index) => (
            <li
              key={skill.name}
              className={`group rounded-md border p-5 transition-colors ${ui.card} ${ui.cardHover}`}
            >
              <span className="mb-5 block h-3 w-12 rounded-full" style={{ backgroundColor: ["#9b7ede", "#d8c7ac", "#b6c986", "#e84f52"][index % 4] }} />
              <h3 className={`text-lg font-black transition-colors group-hover:text-[#9b7ede] ${ui.heading}`}>
                {skill.name}
              </h3>
              {skill.description ? (
                <p className={`mt-2 text-sm leading-relaxed ${ui.muted}`}>
                  {skill.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
