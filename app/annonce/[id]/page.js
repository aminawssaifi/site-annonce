import annonces from "../data/annonces";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Liste des annonces
      </h1>

      <div className="space-y-4">
        {annonces.map((annonce) => (
          <div
            key={annonce.id}
            className="border p-4 rounded shadow"
          >
            <h2 className="text-xl font-semibold">
              {annonce.titre}
            </h2>

            <p>{annonce.prix}</p>

            <Link
              href={`/annonces/${annonce.id}`}
              className="text-blue-600"
            >
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}