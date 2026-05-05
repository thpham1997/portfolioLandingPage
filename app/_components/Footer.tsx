export default function Footer() {
  return (
    <footer className="border-t border-navy-lighter/50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl text-center text-sm text-slate">
        <p>
          &copy; {new Date().getFullYear()} Thanh Pham. Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Next.js
          </a>
          {" "}and{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
