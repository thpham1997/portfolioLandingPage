import { siteConfig } from "@/data/site-config";
import { socialLinks } from "@/data/social-links";
import { softwareProjects } from "@/data/projects-software";
import { researchProjects } from "@/data/projects-research";
import { skillCategories } from "@/data/skills";
import { experienceEntries } from "@/data/experience";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import SectionHeading from "./_components/SectionHeading";
import About from "./_components/About";
import ProjectShowcase from "./_components/ProjectShowcase";
import Skills from "./_components/Skills";
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
          id="about"
          title="About"
          subtitle="A brief overview of my background and what drives me."
        />
        <About
          paragraphs={[
            "I'm a Machine Learning Engineer and Researcher with a passion for bridging the gap between cutting-edge research and production systems. My work spans NLP, computer vision, and reinforcement learning — from publishing at top-tier venues to deploying models that serve millions of users.",
            "Currently, I focus on building robust ML infrastructure and developing efficient deep learning architectures. I believe the best ML systems come from a deep understanding of both the theory and the engineering, and I strive to bring that dual perspective to every project I work on.",
            "When I'm not training models or writing papers, I contribute to open-source ML tools, mentor aspiring researchers, and stay up to date with the rapidly evolving AI landscape.",
          ]}
        />

        <SectionHeading
          id="software"
          title="Software & Web Apps"
          subtitle="Production ML systems, tools, and full-stack applications."
        />
        <ProjectShowcase projects={softwareProjects} variant="software" />

        <SectionHeading
          id="research"
          title="Research"
          subtitle="Published work at top ML conferences and workshops."
        />
        <ProjectShowcase projects={researchProjects} variant="research" />

        <SectionHeading
          id="skills"
          title="Skills"
          subtitle="Technologies and domains I work with regularly."
        />
        <Skills categories={skillCategories} />

        <SectionHeading
          id="experience"
          title="Experience"
          subtitle="Where I've worked and studied."
        />
        <Experience entries={experienceEntries} />

        <SectionHeading
          id="contact"
          title="Contact"
          subtitle="Let's connect. I'm always open to interesting conversations."
        />
        <Contact links={socialLinks} email="thanh@example.com" />
      </main>

      <Footer />
    </>
  );
}
