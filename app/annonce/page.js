import annonces from "../data/annonces";
import CardAnnonce from "../components/CardAnnonce";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">
        Liste des annonces
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {annonces.map((annonce) => (
          <CardAnnonce key={annonce.id} annonce={annonce} />
        ))}
      </div>

    </div>
  );
}