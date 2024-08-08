import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-mt-4">
      <h1 className="font-semibold text-3x1">
        This page could not be found :('
      </h1>
      <Link
        href="/"
        className="inline-block px-6 py-3 text-lg bg-accent-500 text-primary-800"
      >
        Go back home
      </Link>
    </main>
  );
}
