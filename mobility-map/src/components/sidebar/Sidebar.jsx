import CartButton from "./CartButton";
import MapButton from "./MapButton";
import UnivSelection from "./UnivSelection";
import CountryFilter from "./CountryFilter";
import CityFilter from "./CityFilter";
import { useState } from "react";

export default function Sidebar({
  onSelectPage,
  countries,
  selectedCountries,
  setSelectedCountries,
  cities,
  selectedCities,
  setSelectedCities,
  selectedUnivs,
  setSelectedUnivs,
  reorderUnivs
}) {
  const [activePage, setActivePage] = useState("map");

  const handleSelect = (page) => {
    setActivePage(page);
    onSelectPage(page);
  };
  const handleResetFilters = () => {
    setSelectedCountries([]);
    setSelectedCities([]);
  };
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <div className="bg-[#009bda] px-[2vh]">
      <h1 className="text-[#000000] text-lg font-bold mb-4">Mobility</h1>
      <MapButton
        onButtonClick={() => handleSelect("map")}
        active={activePage === "map"}
      />
      <CartButton
        onButtonClick={() => handleSelect("comparison")}
        active={activePage === "comparison"}
      />
      <UnivSelection
        selectedUnivs={selectedUnivs}
        setSelectedUnivs={setSelectedUnivs}
        reorderUnivs={reorderUnivs}
      />
      {filtersOpen && (
        <div className="space-y-2 mt-2">
          <CountryFilter
            countries={countries}
            selected={selectedCountries}
            onChange={setSelectedCountries}
          />
          <CityFilter
            cities={cities}
            selected={selectedCities}
            onChange={setSelectedCities}
          />
          <button
            onClick={handleResetFilters}
            className="mt-2 px-3 py-1 bg-white text-[#009bda] rounded hover:bg-gray-100"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
      <button
        onClick={() => setFiltersOpen(prev => !prev)}
        className="text-white underline"
      >
        {filtersOpen ? "Masquer les filtres" : "Afficher les filtres"}
      </button>

    </div>
  );
}