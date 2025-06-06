import React, { useState } from "react";

const MapFilterPanel = () => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  const handleReset = () => {
    setCategory("");
    setStatus("");
    setSort("");
  };

  return (
    <div className="p-4 border rounded-md w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold">Filtres</h2>

      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded">
        <option value="">Catégorie</option>
        <option value="books">Livres</option>
        <option value="movies">Films</option>
        <option value="music">Musique</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border rounded">
        <option value="">Statut</option>
        <option value="active">Actif</option>
        <option value="archived">Archivé</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)} className="w-full p-2 border rounded">
        <option value="">Trier par</option>
        <option value="date">Date</option>
        <option value="name">Nom</option>
      </select>

      <button onClick={handleReset} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Réinitialiser
      </button>
    </div>
  );
};

export default MapFilterPanel;
