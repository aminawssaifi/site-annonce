import CardAnnonce from "../components/cardAnnonce";

export default function Page() {
  return (
    <main className="flex gap-4 flex-wrap p-6">
      
      <CardAnnonce
        title="Appartement S+2"
        price="120 000 TND"
        image="/house.jpg"
      />

      <CardAnnonce
        title="Voiture Golf 7"
        price="45 000 TND"
        image="/car.jpg"
      />

    </main>
  );
}