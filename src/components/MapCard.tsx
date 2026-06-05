"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function MapCard() {
  return (
    <div className="bg-white shadow p-4 rounded h-[300px]">
      <h2 className="text-lg font-semibold mb-2">Mapa da Região</h2>
      <MapContainer
        center={[-23.55, -46.63]} // São Paulo
        zoom={10}
        className="h-[250px] w-full rounded"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-23.55, -46.63]}>
          <Popup>📍 Área monitorada</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
