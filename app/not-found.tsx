import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <p className="mb-2 font-mono text-sm text-accent">404</p>
        <h1 className="mb-4 text-3xl font-bold text-white">Page not found</h1>
        <p className="mb-8 text-slate">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-sm font-semibold text-navy transition-colors hover:bg-accent/90"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
