import Image from "next/image";

export default function CardAnnonce({ title, price, image }) {
  return (
    <div className="w-full sm:w-64 border rounded-lg p-4 shadow hover:shadow-xl transition bg-white">

      {/* IMAGE */}
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* TITLE */}
      <h2 className="text-lg font-bold mt-3">
        {title}
      </h2>

      {/* PRICE */}
      <p className="text-blue-600 font-semibold mt-1">
        {price} DT
      </p>

      {/* BUTTON */}
      <button className="mt-3 w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-red-600 transition">
        Voir détails
      </button>

    </div>
  );
}