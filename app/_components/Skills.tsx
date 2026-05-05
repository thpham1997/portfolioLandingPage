import type { SkillCategory } from "@/lib/types";
import SkillBadge from "./SkillBadge";

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <section className="px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.category}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
