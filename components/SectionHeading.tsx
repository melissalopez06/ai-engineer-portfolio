import { ui } from "@/lib/ui-classes";

type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl sm:mb-12">
      <p
        id={id}
        className="mb-2 font-mono text-xs font-black uppercase tracking-normal text-[#c3b398]"
      >
        {label}
      </p>
      <h2 className={`text-3xl font-black tracking-normal sm:text-5xl ${ui.heading}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base leading-relaxed ${ui.muted}`}>
          {description}
        </p>
      )}
    </div>
  );
}
