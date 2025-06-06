import CartButton from "./CartButton";
import MapButton from "./MapButton";
import MapFilterPanel from "./MapFilterPanel";
import UnivSelection from "./UnivSelection";

export default function Sidebar({ onSelectPage }) {
  return (
    <div class="bg-[#009bda]">
      <h1>Mobility</h1>
      <MapButton onButtonClick={() => onSelectPage("map")}/>
      <CartButton onButtonClick={() => onSelectPage("comparison")}/>
      <UnivSelection />
      <MapFilterPanel />
    </div>
  );
}