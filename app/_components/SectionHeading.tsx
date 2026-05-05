interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  id,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12">
      <div className="flex items-center gap-4">
        <div className="h-px w-8 bg-accent" />
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
      </div>
      {subtitle && (
        <p className="mt-3 ml-12 text-slate">{subtitle}</p>
      )}
    </div>
  );
}
