import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10 py-8">

      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* TITLE */}
        <p className="text-gray-700 font-semibold mb-3">
          ANNONCES TUNISIE © 2026
        </p>

        {/* CONTACT */}
        <Link
          href="/contact"
          className="text-blue-600 hover:underline"
        >
          Contactez-nous
        </Link>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-600">
          
          <a
            href="#"
            className="hover:text-blue-600 transition"
          >
            Facebook
          </a>

          <a
            href="#"
            className="hover:text-blue-600 transition"
          >
            Instagram
          </a>

          <a
            href="#"
            className="hover:text-blue-600 transition"
          >
            Twitter
          </a>

        </div>

      </div>

    </footer>
  );
}