"use client";

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

export function Footer() {
  const { t } = usePortfolio();
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t py-10 ${ui.footer}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className={`font-semibold ${ui.heading}`}>{siteConfig.name}</p>
            <p className={`mt-1 text-sm ${ui.muted}`}>{siteConfig.title}</p>
          </div>
          <nav aria-label={t.a11y.navFooter}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navHrefs.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors hover:text-[#9b7ede] dark:hover:text-white ${ui.muted}`}
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className={`mt-8 border-t pt-8 text-center text-xs sm:text-left ${ui.statsBorder} ${ui.muted}`}>
          © {year} {siteConfig.name}. {t.footer.built}
        </p>
      </div>
    </footer>
  );
}
