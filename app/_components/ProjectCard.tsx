import type { SoftwareProject, ResearchProject } from "@/lib/types";
import { ExternalLink, Code2, FileText, Code } from "lucide-react";

type ProjectCardProps =
  | { project: SoftwareProject; variant: "software" }
  | { project: ResearchProject; variant: "research" };

export default function ProjectCard({ project, variant }: ProjectCardProps) {
  return (
    <article className="group rounded-lg border border-navy-lighter bg-navy-light/50 p-6 transition-shadow hover:shadow-md">
      {variant === "software" && (
        <SoftwareCard project={project as SoftwareProject} />
      )}
      {variant === "research" && (
        <ResearchCard project={project as ResearchProject} />
      )}
    </article>
  );
}

function SoftwareCard({ project }: { project: SoftwareProject }) {
  return (
    <>
      <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-slate">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-navy-lighter px-2 py-1 font-mono text-xs text-accent"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-light hover:text-accent transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-light hover:text-accent transition-colors"
          >
            <Code2 className="h-4 w-4" />
            Code
          </a>
        )}
      </div>
    </>
  );
}

function ResearchCard({ project }: { project: ResearchProject }) {
  return (
    <>
      <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
      <p className="mb-2 font-mono text-xs text-accent">
        {project.authors}
        {project.venue && (
          <span className="ml-2 text-slate">— {project.venue}</span>
        )}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-slate">
        {project.abstract}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent-dim px-3 py-0.5 font-mono text-xs text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm">
        {project.paperUrl && (
          <a
            href={project.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-light hover:text-accent transition-colors"
          >
            <FileText className="h-4 w-4" />
            Paper
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-light hover:text-accent transition-colors"
          >
            <Code className="h-4 w-4" />
            Code
          </a>
        )}
      </div>
    </>
  );
}
