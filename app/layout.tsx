import type { Metadata } from "next";
import { PortfolioProvider } from "@/components/PortfolioProvider";
import { siteConfig } from "@/lib/site-config";
import { translations } from "@/lib/translations";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: translations.es.meta.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: translations.es.meta.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#f7f5ef] font-sans text-[#3e3d39] antialiased dark:bg-[#14120f] dark:text-[#f7f1e7]"
      >
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  );
}
