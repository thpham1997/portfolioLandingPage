import type { SocialLink } from "@/lib/types";
import ContactLink from "./ContactLink";

interface ContactProps {
  links: SocialLink[];
}

export default function Contact({ links }: ContactProps) {
  return (
    <section className="px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {links.map((link) => (
            <ContactLink key={link.label} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}
