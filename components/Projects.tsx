"use client";

import { usePortfolio } from "@/components/PortfolioProvider";
import { ui } from "@/lib/ui-classes";
import { SectionHeading } from "./SectionHeading";

const projectColors = ["#9b7ede", "#d8c7ac", "#b6c986", "#e84f52", "#b9a7ef"];

export function Projects() {
  const { t } = usePortfolio();

  return (
    <section
      id="projects"
      className={`scroll-mt-20 border-t py-20 sm:py-28 ${ui.sectionBorder}`}
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="projects-heading"
          label={t.projects.label}
          title={t.projects.title}
          description={t.projects.description}
        />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, index) => (
            <li
              key={project.title}
              className={`group overflow-hidden rounded-md border ${ui.projectCard}`}
            >
              <div
                className="flex min-h-64 flex-col justify-between p-6 text-white"
                style={{ backgroundColor: projectColors[index % projectColors.length] }}
              >
                <div className="h-24 w-24 rotate-[-8deg] border border-white/70 bg-white/20 p-3 shadow-[0_16px_35px_rgba(0,0,0,0.12)]">
                  <div className="h-full bg-white/90" />
                </div>
                <span className="self-end text-[8rem] font-black leading-[0.75] tracking-normal text-white sm:text-[9rem]">
                  {index + 1}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="p-5">
                  <div className="flex flex-col gap-1">
                    <p className="font-mono text-xs font-black uppercase tracking-normal text-[#c3b398]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className={`text-xl font-black sm:text-2xl ${ui.heading}`}>
                    {project.title}
                    </h3>
                    {project.tagline ? (
                      <p className="font-mono text-xs text-[#5f5b52] dark:text-[#d6c8b8]">
                        {project.tagline}
                      </p>
                    ) : null}
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${ui.muted}`}>
                    {project.description}
                  </p>
                  {project.tech.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className={`rounded-sm px-2.5 py-1 font-mono text-xs ${ui.tag}`}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {project.highlights.length > 0 ? (
                    <ul className={`mt-5 space-y-1.5 border-t pt-5 ${ui.statsBorder}`}>
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-sm text-[#3e3d39] dark:text-[#f7f1e7]"
                        >
                          <span className="text-[#b6c986]" aria-hidden>
                            ✓
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
