import MapView from "./MapView";

export default function MapPage({ universities, onAddUniv, popupFields }) {
  return (
    <div>
      <MapView universities={universities} onAddUniv={onAddUniv} popupFields={popupFields} />
    </div>
  );
}
