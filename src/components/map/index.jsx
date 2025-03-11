import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, long }) => {
  // Definindo o ícone personalizado
  const customIcon = new L.Icon({
    iconUrl: "/pin.png",
    iconSize: [48, 48],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={[lat, long]}
      zoom={4}
      style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]} icon={customIcon}>
        <Popup>
          Aqui está o marcador com um ícone customizado!
          <br />E facilmente personalizável.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
