export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="rounded-md bg-navy-lighter px-3 py-1.5 font-mono text-sm text-slate-light">
      {skill}
    </span>
  );
}
