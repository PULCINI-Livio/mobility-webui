import MapView from "./MapView";

export default function MapPage({ universities }) {
  return (
    <div>
      <h1>Map Overview</h1>
      <MapView universities={universities} />
    </div>
  );
}
