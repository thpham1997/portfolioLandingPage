import { siteConfig } from "@/data/site-config";
import { socialLinks } from "@/data/social-links";
import { softwareProjects } from "@/data/projects-software";
import { experienceEntries } from "@/data/experience";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import SectionHeading from "./_components/SectionHeading";
import ProjectShowcase from "./_components/ProjectShowcase";
import Experience from "./_components/Experience";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          name={siteConfig.name}
          title={siteConfig.title}
          tagline={siteConfig.tagline}
        />

        <SectionHeading
          id="projects"
          title="Projects"
          subtitle="Production AI/ML systems and full-stack applications."
        />
        <ProjectShowcase projects={softwareProjects} variant="software" />

        <SectionHeading
          id="experience"
          title="Experience"
          subtitle="Where I've worked."
        />
        <Experience entries={experienceEntries} />

        <SectionHeading
          id="contact"
          title="Contact"
          subtitle="Let's connect. I'm always open to interesting conversations."
        />
        <Contact links={socialLinks} />
      </main>

      <Footer />
    </>
  );
}
