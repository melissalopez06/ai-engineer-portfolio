"use client";

import { usePortfolio, siteConfig } from "@/components/PortfolioProvider";
import { ui } from "@/lib/ui-classes";

export function Hero() {
  const { t } = usePortfolio();

  return (
    <section className="relative overflow-hidden bg-[#fbfaf6] pt-24 pb-16 sm:pt-28 sm:pb-24 dark:bg-[#171411]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[590px] sm:min-h-[640px] lg:min-h-[680px]">
          <p
            className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs ${ui.heroBadge} ${ui.muted}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#e84f52]" aria-hidden />
            {t.hero.badge}
          </p>

          <div className="relative">
            <p className="select-none text-[3.45rem] font-black uppercase leading-[0.82] tracking-normal text-black sm:text-[7.4rem] lg:text-[10.5rem] dark:text-[#fbfaf6]">
              Portfolio
            </p>
            <span className="absolute right-0 top-2 font-mono text-4xl font-black text-[#d8c7ac] sm:right-12 sm:text-6xl">
              '26
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="relative min-h-[390px] sm:min-h-[470px]">
              <div className="absolute left-2 top-4 h-[22rem] w-[17.5rem] rotate-[-5deg] border border-[#9b7ede] bg-white p-3 shadow-[0_24px_55px_rgba(155,126,222,0.22)] sm:left-10 sm:h-[28rem] sm:w-[22rem] dark:border-[#b9a7ef] dark:bg-[#201b17]">
                <div className="relative h-full overflow-hidden bg-[#d8c7ac]">
                  <img
                    src="/yo.png"
                    alt="Laura Melissa López Sierra"
                    className="h-full w-full scale-110 object-cover object-[45%_58%]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:pb-8">
              <p className="text-sm font-black uppercase tracking-normal text-[#c3b398]">
                {siteConfig.name}
              </p>
              <h1 className={`mt-3 max-w-2xl text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl ${ui.heading}`}>
                Hi, I&apos;m Laura. <span className="block text-[#9b7ede]">AI Engineer.</span>
              </h1>

              <p className="mt-4 text-xl font-semibold text-black dark:text-[#fbfaf6] sm:text-2xl">
                {siteConfig.title}
                <span className={`block text-base font-normal sm:inline sm:ml-2 ${ui.muted}`}>
                  · {t.location}
                </span>
              </p>

              <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${ui.muted}`}>
                {t.hero.subtitle}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-black px-6 text-sm font-bold text-white transition-colors hover:bg-[#9b7ede] dark:bg-[#fbfaf6] dark:text-black dark:hover:bg-[#d8c7ac]"
                >
                  {t.hero.ctaProjects}
                </a>
                <a
                  href="#contact"
                  className={`inline-flex h-12 items-center justify-center rounded-md border px-6 text-sm font-bold transition-colors ${ui.outlineBtn}`}
                >
                  {t.hero.ctaContact}
                </a>
              </div>
            </div>
          </div>
        </div>

        <dl className={`grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-3 sm:gap-8 ${ui.statsBorder}`}>
          <div>
            <dt className="font-mono text-xs font-bold uppercase tracking-normal text-[#c3b398]">
              {t.hero.stats.location}
            </dt>
            <dd className={`mt-1 text-lg font-semibold sm:text-xl ${ui.heading}`}>
              {t.location}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs font-bold uppercase tracking-normal text-[#c3b398]">
              {t.hero.stats.languages}
            </dt>
            <dd className={`mt-1 text-lg font-semibold sm:text-xl ${ui.heading}`}>
              {t.hero.stats.languagesValue}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs font-bold uppercase tracking-normal text-[#c3b398]">
              {t.hero.stats.education}
            </dt>
            <dd className={`mt-1 text-lg font-semibold sm:text-xl ${ui.heading}`}>
              {t.hero.stats.educationValue}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
