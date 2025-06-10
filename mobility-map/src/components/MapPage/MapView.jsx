import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import L from 'leaflet';
import 'leaflet.markercluster';

function ClusterMarkers({ universities, onAddUniv }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !universities || universities.length === 0) return;

    const markerGroup = L.markerClusterGroup();

    universities.forEach((u) => {
      if (!u.latitude || !u.longitude) return;

      const marker = L.marker([u.latitude, u.longitude], { university: u });

      const popupContent = `
        <div>
          <strong>${u.university}</strong><br />
          <div>Pays: ${u.country || "-"}</div>
          <div>Ville: ${u.city || "-"}</div>
          <div>Étudiants internationaux: ${u.internationalStudents || "-"}</div>
          <button class="add-univ-btn">
            Ajouter
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);
      markerGroup.addLayer(marker);
    });

    markerGroup.on('popupopen', (e) => {
      const marker = e.popup._source;
      const univ = marker.options.university;
      const btn = e.popup._contentNode.querySelector('.add-univ-btn');
      if (btn && univ) {
        btn.addEventListener('click', () => onAddUniv(univ));
      }
    });

    map.addLayer(markerGroup);

    return () => {
      map.removeLayer(markerGroup);
    };
  }, [map, universities, onAddUniv]);

  return null;
}

export default function MapView({ universities, onAddUniv }) {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <MapContainer center={[48.85, 2.35]} zoom={4} scrollWheelZoom className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}.png"
        />
        <ClusterMarkers universities={universities} onAddUniv={onAddUniv} />
      </MapContainer>
    </div>
  );
}