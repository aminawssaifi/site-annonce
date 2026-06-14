import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow">

      {/* LOGO */}
      <Link href="/" className="font-bold text-blue-600 text-lg">
        ANNONCES
      </Link>

      {/* MENU */}
      <ul className="flex gap-6 font-[var(--font-montserrat)] text-gray-700">

        <li className="hover:text-blue-600 transition">
          <Link href="/">Accueil</Link>
        </li>

        <li className="hover:text-blue-600 transition">
          <Link href="/annonces">Annonces</Link>
        </li>

        <li className="hover:text-blue-600 transition">
          <Link href="/publier">Publier</Link>
        </li>

        <li className="hover:text-blue-600 transition">
          <Link href="/inscription">Inscription</Link>
        </li>

        <li className="hover:text-blue-600 transition">
          <Link href="/contact">Contact</Link>
        </li>

      </ul>

      {/* BUTTON */}
      <Link
        href="/connexion"
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Connexion
      </Link>

    </nav>
  );
}