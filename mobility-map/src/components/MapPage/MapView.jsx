import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import L from 'leaflet';
import 'leaflet.markercluster';

function ClusterMarkers({ universities }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !universities || universities.length === 0) return;

    const markerGroup = L.markerClusterGroup();

    universities.forEach(u => {
      if (!u.latitude || !u.longitude) return;

      const marker = L.marker([u.latitude, u.longitude]).bindPopup(`
        <strong>${u.university}</strong><br />
        internationalStudents: ${u.internationalStudents || '-'}<br />
        Pays: ${u.country || '-'}<br />
        Ville: ${u.country || '-'}
      `);

      markerGroup.addLayer(marker);
    });

    map.addLayer(markerGroup);

    return () => {
      map.removeLayer(markerGroup);
    };
  }, [map, universities]);

  return null;
}

export default function MapView({ universities }) {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <MapContainer center={[48.85, 2.35]} zoom={4} scrollWheelZoom className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}.png"
        />
        <ClusterMarkers universities={universities} />
      </MapContainer>
    </div>
  );
}
