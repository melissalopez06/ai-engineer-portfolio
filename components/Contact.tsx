"use client";

import { usePortfolio, siteConfig } from "@/components/PortfolioProvider";
import { isConfiguredUrl, PLACEHOLDER } from "@/lib/site-config";
import { ui } from "@/lib/ui-classes";
import { SectionHeading } from "./SectionHeading";

function ContactCard({
  label,
  value,
  href,
  placeholder,
}: {
  label: string;
  value: string;
  href?: string;
  placeholder?: string;
}) {
  const display = href ? value : (placeholder ?? value);
  const isPlaceholder = display.includes(PLACEHOLDER);
  const className = `flex items-start gap-4 rounded-xl border p-5 ${
    isPlaceholder
      ? "border-dashed border-amber-400/50 bg-amber-50/50 dark:bg-amber-950/20"
      : `${ui.card} ${href ? ui.cardHover : ""}`
  }`;

  const inner = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#9b7ede] text-white">
        <span className="text-sm font-bold" aria-hidden>
          @
        </span>
      </span>
      <div>
        <p className={`text-sm ${ui.muted}`}>{label}</p>
        <p
          className={`break-all font-medium ${
            isPlaceholder
              ? "font-mono text-xs text-amber-700 dark:text-amber-400"
              : ui.heading
          }`}
        >
          {display}
        </p>
      </div>
    </>
  );

  if (href && !isPlaceholder) {
    return (
      <a href={href} className={`group transition-colors ${className}`}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

export function Contact() {
  const { t } = usePortfolio();
  const usesFormspree = Boolean(siteConfig.formspreeId);
  const linkedinOk = isConfiguredUrl(siteConfig.linkedin);
  const githubOk = isConfiguredUrl(siteConfig.github);

  return (
    <section
      id="contact"
      className={`scroll-mt-20 border-t py-20 sm:py-28 ${ui.sectionBorder}`}
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <ContactCard
              label={t.contact.email}
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactCard
              label={t.contact.phone}
              value={siteConfig.phone}
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              label={t.contact.linkedin}
              value={siteConfig.linkedin}
              href={linkedinOk ? siteConfig.linkedin : undefined}
              placeholder={t.contact.linkedinPlaceholder}
            />
            <ContactCard
              label={t.contact.github}
              value={siteConfig.github}
              href={githubOk ? siteConfig.github : undefined}
              placeholder={t.contact.githubPlaceholder}
            />
          </div>

          <form
            className={`rounded-2xl border p-6 sm:p-8 ${ui.card}`}
            action={
              usesFormspree
                ? `https://formspree.io/f/${siteConfig.formspreeId}`
                : `mailto:${siteConfig.email}`
            }
            method={usesFormspree ? "POST" : "get"}
          >
            <p className={`mb-6 text-sm ${ui.muted}`}>
              {t.contact.formNote}{" "}
              <code
                className={`rounded px-1.5 py-0.5 font-mono text-xs text-[#9b7ede] ${ui.code}`}
              >
                {t.contact.formNoteFile}
              </code>
            </p>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`mb-1.5 block text-sm font-medium ${ui.heading}`}
                >
                  {t.contact.nameLabel}
                </label>
                <input
                  id="name"
                  name={usesFormspree ? "name" : "subject"}
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className={`w-full rounded-md border px-4 py-2.5 focus:border-black focus:outline-none focus:ring-1 focus:ring-black ${ui.input}`}
                />
              </div>
              {usesFormspree ? (
                <div>
                  <label
                    htmlFor="email"
                    className={`mb-1.5 block text-sm font-medium ${ui.heading}`}
                  >
                    {t.contact.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={siteConfig.email}
                    className={`w-full rounded-md border px-4 py-2.5 focus:border-black focus:outline-none focus:ring-1 focus:ring-black ${ui.input}`}
                  />
                </div>
              ) : null}
              <div>
                <label
                  htmlFor="message"
                  className={`mb-1.5 block text-sm font-medium ${ui.heading}`}
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name={usesFormspree ? "message" : "body"}
                  rows={4}
                  required
                  placeholder={t.contact.messagePlaceholder}
                  className={`w-full resize-y rounded-md border px-4 py-2.5 focus:border-black focus:outline-none focus:ring-1 focus:ring-black ${ui.input}`}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-black py-3 text-sm font-bold text-white transition-colors hover:bg-[#9b7ede] sm:w-auto sm:px-8 dark:bg-[#fbfaf6] dark:text-black dark:hover:bg-[#d8c7ac]"
              >
                {usesFormspree ? t.contact.submit : t.contact.submitMailto}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
