import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import Papa from 'papaparse';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';

import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const universities = [
  { name: 'Univ A', lat: 48.85, lng: 2.35, language: "french" , famousFor: "baguette", rating: "★★★☆☆"},
  { name: 'Univ B', lat: 50.1, lng: 8.6, language: "german" , famousFor: "kartoffel", rating: "★★★☆☆" },
  { name: 'Univ C', lat: 47.5, lng: 19.05, language: "hungarian" , famousFor: "viktor", rating: "★★☆☆☆" },
];

function ClusterMarkers() {
  const map = useMap();

  useEffect(() => {
    const markers = L.markerClusterGroup();

    universities.forEach((u) => {
      const marker = L.marker([u.lat, u.lng]).bindPopup(`
        <strong>${u.name}</strong>
        <div>• Language : ${u.language}</div>
        <div>• famous for : ${u.famousFor}</div>
        <div>• rating : ${u.rating}</div>
        `);
      markers.addLayer(marker);
    });

    map.addLayer(markers);

    return () => {
      map.removeLayer(markers);
    };
  }, [map]);

  return null;
}

export default function MapView() {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <MapContainer center={[48.85, 2.35]} zoom={4} scrollWheelZoom={true} className="h-full w-full">
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url='https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}.png'
        />
        <ClusterMarkers />
      </MapContainer>
    </div>
  );
}