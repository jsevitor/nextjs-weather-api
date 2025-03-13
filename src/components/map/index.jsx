import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

import styles from "@/components/map/Map.module.css"; // Certifique-se de que esse arquivo CSS está corretamente configurado

const Map = ({ lat, long }) => {
  const [weatherData, setWeatherData] = useState([]);

  // Cidades brasileiras para exibir a previsão do tempo
  const cities = [
    { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
    { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
    { name: "Salvador", lat: -12.9714, lon: -38.5014 },
    { name: "Belo Horizonte", lat: -19.8157, lon: -43.9542 },
    { name: "Brasília", lat: -15.7801, lon: -47.9292 },
    { name: "Manaus", lat: -3.119, lon: -60.212 },
    { name: "Fortaleza", lat: -3.7172, lon: -38.5437 },
    { name: "Cuiabá", lat: -15.601, lon: -56.097 },
    { name: "Curitiba", lat: -25.4296, lon: -49.2719 },
    { name: "Porto Alegre", lat: -30.0346, lon: -51.2177 },
    { name: "Palmas", lat: -10.1963, lon: -48.3342 },
    { name: "Rio Branco", lat: -9.97499, lon: -67.8243 },
    { name: "Florianópolis", lat: -27.5954, lon: -48.548 },
    { name: "Campo Grande", lat: -20.4697, lon: -54.6201 },
    { name: "Recife", lat: -8.0476, lon: -34.877 },
    { name: "Teresina", lat: -5.0891, lon: -42.8047 },
    { name: "Belém", lat: -1.455, lon: -48.4902 },
    { name: "Vitoria", lat: -20.3155, lon: -40.3128 },
    { name: "Boa Vista", lat: 2.8235, lon: -60.6753 },
  ];

  const fetchWeather = async () => {
    const requests = cities.map((city) =>
      axios.get(`/api/weather?city_name=${city.name}`)
    );

    try {
      const responses = await Promise.all(requests);
      const weatherData = responses.map((response, index) => {
        const { results } = response.data;
        return {
          name: cities[index].name,
          temp: results.temp,
          description: results.description,
          humidity: results.humidity,
          condition: results.condition_slug,
          lat: cities[index].lat,
          lon: cities[index].lon,
        };
      });
      setWeatherData(weatherData);
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
    } catch (error) {
      console.error("Erro ao buscar a previsão do tempo", error);
    }
  };

  const loadWeatherData = () => {
    const storedData = localStorage.getItem("weatherData");
    if (storedData) {
      setWeatherData(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    loadWeatherData();
  }, []);

  const handleCustumIcon = (condition) => {
    return new L.Icon({
      iconUrl: `https://assets.hgbrasil.com/weather/icons/conditions/${condition}.svg`,
      iconSize: [48, 48],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  return (
    <div className={styles.container}>
      <MapContainer
        center={[lat, long]}
        zoom={4}
        style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          url="https://stamen-tiles.a.ssl.fastly.net/satellite/{z}/{x}/{y}.jpg"
          attribution='&copy; <a href="https://stamen.com">Stamen</a>'
        />

        {weatherData.map((cityData) => (
          <Marker
            key={cityData.name}
            position={[cityData.lat, cityData.lon]}
            icon={handleCustumIcon(cityData.condition)}
          >
            <Popup>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: "500" }}>{cityData.name}</span>
                <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                  {cityData.temp}°C
                </span>
                <span>{cityData.description}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className={styles.update} onClick={fetchWeather}>
        <i
          className="bi bi-arrow-repeat"
          style={{ color: "#000", fontSize: "24px" }}
        ></i>
      </div>
    </div>
  );
};

export default Map;
