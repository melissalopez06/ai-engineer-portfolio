/** Datos de contacto del CV. Completa los campos marcados con PLACEHOLDER. */
export const PLACEHOLDER = "[COMPLETAR]";

export const siteConfig = {
  name: "Laura Melissa López Sierra",
  title: "AI Engineer",
  location: "Cali, Colombia",
  email: "laura.melissa.lopez@correounivalle.edu.co",
  phone: "+57 310-880-84-45",
  linkedin: "https://www.linkedin.com/in/lauramelissalopez/",
  github: "https://github.com/melissalopez06",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
} as const;

export function isConfiguredUrl(value: string): boolean {
  return value.startsWith("http://") || value.startsWith("https://");
}
