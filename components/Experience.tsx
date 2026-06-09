"use client";

import { usePortfolio } from "@/components/PortfolioProvider";
import { ui } from "@/lib/ui-classes";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { t } = usePortfolio();

  return (
    <section
      id="experience"
      className={`scroll-mt-20 border-t py-20 sm:py-28 ${ui.sectionBorder} ${ui.sectionAlt}`}
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="experience-heading"
          label={t.experience.label}
          title={t.experience.title}
        />

        <ol className={`relative border-l pl-6 sm:pl-8 ${ui.timeline}`}>
          {t.experience.items.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative pb-10 last:pb-0">
              <span
                className={`absolute -left-[25px] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[33px] ${ui.timelineDot}`}
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className={`text-lg font-semibold ${ui.heading}`}>
                    {job.role}
                  </h3>
                  <p className="font-semibold text-[#9b7ede]">{job.company}</p>
                </div>
                <time className="mt-1 max-w-xs font-mono text-xs text-slate-500 sm:mt-0 sm:text-right">
                  {job.period}
                </time>
              </div>
              <ul className={`mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed sm:text-base ${ui.muted}`}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {job.skills.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-sm px-2.5 py-1 font-mono text-xs ${ui.tag}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
