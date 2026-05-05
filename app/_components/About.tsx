interface AboutProps {
  paragraphs: string[];
  profileImage?: string;
}

export default function About({ paragraphs, profileImage }: AboutProps) {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          {profileImage && (
            <div className="shrink-0">
              <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-navy-lighter">
                <img
                  src={profileImage}
                  alt="Thanh Pham"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="max-w-prose space-y-4">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-slate-light"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
