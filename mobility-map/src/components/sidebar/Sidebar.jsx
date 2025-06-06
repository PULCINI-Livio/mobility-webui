import CartButton from "./CartButton";
import MapButton from "./MapButton";
import MapFilterPanel from "./MapFilterPanel";
import UnivSelection from "./UnivSelection";
import CountryFilter from "./CountryFilter";
import CityFilter from "./CityFilter";

export default function Sidebar({
  onSelectPage,
  countries,
  selectedCountries,
  setSelectedCountries,
  cities,
  selectedCities,
  setSelectedCities,
}) {
  const handleResetFilters = () => {
    setSelectedCountries([]);
    setSelectedCities([]);
  };
  return (
    <div className="bg-[#009bda]">
      <h1>Mobility</h1>
      <MapButton onButtonClick={() => onSelectPage("map")} />
      <CartButton onButtonClick={() => onSelectPage("comparison")} />
      <UnivSelection />
      <MapFilterPanel />
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
  );
}