import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import Papa from 'papaparse';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';

import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

function ClusterMarkers({ universities }) {
  const map = useMap();

  useEffect(() => {
    if (!universities.length) return;

    const markers = L.markerClusterGroup();

    universities.forEach((u) => {
      const marker = L.marker([u.latitude, u.longitude]).bindPopup(
        `<strong>${u.university}</strong><br/>internationalStudents : ${u.internationalStudents}`
      );
      markers.addLayer(marker);
    });

    map.addLayer(markers);

    return () => {
      map.removeLayer(markers);
    };
  }, [universities, map]);

  return null;
}

export default function MapWithCSV() {
  const [universities, setUniversities] = useState([]);

  
  useEffect(() => {
    Papa.parse('/universities.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data
          .map(u => ({
            ...u,
            lat: parseFloat(u.latitude),
            lng: parseFloat(u.longitude),
          }))
          .filter(u => !isNaN(u.latitude) && !isNaN(u.longitude)); // filtre les lignes invalides
        setUniversities(data);
      },
      error: (error) => {
        console.error('Erreur lecture CSV :', error);
      }
    });
  }, []);

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <MapContainer center={[48.85, 2.35]} zoom={4} scrollWheelZoom className="h-full w-full">
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url='https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}.png'
        />
        <ClusterMarkers universities={universities} />
      </MapContainer>
    </div>
  );
}