interface HeroProps {
  name: string;
  title: string;
  tagline: string;
}

export default function Hero({ name, title, tagline }: HeroProps) {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-4 py-24 md:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent-dim/20 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-accent-dim/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm text-accent md:text-base">
          Hello, I&apos;m
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
          {name}
        </h1>
        <p className="mb-3 text-xl text-slate-light md:text-2xl">{title}</p>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate md:text-xl">
          {tagline}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#software"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-accent px-8 text-sm font-semibold text-navy transition-colors hover:bg-accent/90 sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-navy-lighter px-8 text-sm font-semibold text-slate-light transition-colors hover:border-slate hover:text-white sm:w-auto"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
