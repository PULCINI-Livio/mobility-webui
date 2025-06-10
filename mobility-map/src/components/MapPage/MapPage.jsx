import MapView from "./MapView";

export default function MapPage({ universities, onAddUniv }) {
  return (
    <div>
      <MapView universities={universities} onAddUniv={onAddUniv} />
    </div>
  );
}
