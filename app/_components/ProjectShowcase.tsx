import type { SoftwareProject, ResearchProject } from "@/lib/types";
import ProjectCard from "./ProjectCard";

interface SoftwareShowcaseProps {
  projects: SoftwareProject[];
  variant: "software";
}

interface ResearchShowcaseProps {
  projects: ResearchProject[];
  variant: "research";
}

type ProjectShowcaseProps = SoftwareShowcaseProps | ResearchShowcaseProps;

export default function ProjectShowcase({
  projects,
  variant,
}: ProjectShowcaseProps) {
  const sorted = [...projects].sort((a, b) => {
    const aHighlight = "highlight" in a ? a.highlight : false;
    const bHighlight = "highlight" in b ? b.highlight : false;
    return Number(bHighlight) - Number(aHighlight);
  });

  return (
    <section className="px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2">
          {sorted.map((project) => (
            <ProjectCard
              key={project.id}
              project={project as SoftwareProject & ResearchProject}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
