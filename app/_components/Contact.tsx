import type { SocialLink } from "@/lib/types";
import ContactLink from "./ContactLink";

interface ContactProps {
  links: SocialLink[];
  email: string;
}

export default function Contact({ links, email }: ContactProps) {
  return (
    <section className="px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <ContactLink key={link.label} link={link} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate">
          Or email me directly at{" "}
          <a
            href={`mailto:${email}`}
            className="text-accent hover:underline"
          >
            {email}
          </a>
        </p>
      </div>
    </section>
  );
}
