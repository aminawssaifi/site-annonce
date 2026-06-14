import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-100 border-b">

      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Annonces Tunisie
        </Link>

        {/* NAV ACTIONS */}
        <nav className="flex items-center gap-4 text-sm">

          <Link href="/" className="hover:text-blue-600 transition">
            Accueil
          </Link>

          <Link href="/annonces" className="hover:text-blue-600 transition">
            Annonces
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          <Link
            href="/ajouter"
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            + Publier
          </Link>

        </nav>

      </div>

      {/* SUBTITLE */}
      <p className="text-center text-gray-600 text-sm pb-3">
        Trouvez, achetez et vendez facilement en Tunisie
      </p>

    </header>
  );
}