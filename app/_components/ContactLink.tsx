import { Code2, Briefcase, GraduationCap, Mail, LucideIcon } from "lucide-react";
import type { SocialLink } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  github: Code2,
  linkedin: Briefcase,
  "graduation-cap": GraduationCap,
  mail: Mail,
};

export default function ContactLink({ link }: { link: SocialLink }) {
  const Icon = iconMap[link.icon] ?? ExternalLinkFallback;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg border border-navy-lighter bg-navy-light/50 px-6 py-4 text-slate-light transition-all hover:border-accent hover:text-white"
    >
      <Icon className="h-5 w-5 text-accent" />
      <span className="text-sm font-medium">{link.label}</span>
    </a>
  );
}

function ExternalLinkFallback() {
  return <div className="h-5 w-5" />;
}
