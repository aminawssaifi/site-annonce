import annonces from "../data/annonces";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Liste des annonces</h1>

      {annonces.map((a) => (
        <div key={a.id} style={{ margin: "10px", padding: "10px", border: "1px solid black" }}>
          <h2>{a.titre}</h2>
          <p>{a.prix}</p>
          <p>{a.description}</p>
        </div>
      ))}
    </div>
  );
}