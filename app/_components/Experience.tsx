import type { ExperienceEntry } from "@/lib/types";
import ExperienceItem from "./ExperienceItem";

interface ExperienceProps {
  entries: ExperienceEntry[];
}

export default function Experience({ entries }: ExperienceProps) {
  return (
    <section className="px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        {entries.map((entry) => (
          <ExperienceItem key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
