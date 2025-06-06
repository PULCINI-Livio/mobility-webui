import CartButton from "./CartButton";
import MapButton from "./MapButton";
import MapFilterPanel from "./MapFilterPanel";
import UnivSelection from "./UnivSelection";
import CountryFilter from "./CountryFilter";

export default function Sidebar({
  onSelectPage,
  countries,
  selectedCountries,
  setSelectedCountries
}) {
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
    </div>
  );
}