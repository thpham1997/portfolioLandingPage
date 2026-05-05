import type { ExperienceEntry } from "@/lib/types";

export default function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[7px] top-2 h-full w-px bg-navy-lighter last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-accent bg-navy">
        {!entry.endDate && (
          <div className="absolute inset-1 rounded-full bg-accent" />
        )}
      </div>

      <div>
        <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-white">{entry.role}</h3>
          <span className="font-mono text-xs text-accent">{entry.type === "education" ? "EDU" : "WORK"}</span>
        </div>
        <p className="mb-1 text-sm text-slate-light">
          {entry.organization} — {entry.location}
        </p>
        <p className="mb-3 font-mono text-xs text-slate">
          {formatDate(entry.startDate)} —{" "}
          {entry.endDate ? formatDate(entry.endDate) : "Present"}
        </p>
        <p className="text-sm leading-relaxed text-slate">{entry.description}</p>
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}
