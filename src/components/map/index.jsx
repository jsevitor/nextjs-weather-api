import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { cities } from "@/utils/resources";
import L from "leaflet";
import axios from "axios";

import "leaflet/dist/leaflet.css";
import styles from "@/components/map/Map.module.css";

const Map = ({ lat, long, geolocation }) => {
  const [weatherData, setWeatherData] = useState([]);

  // Função para buscar os dados do clima
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

  // Função para carregar os dados do localStorage
  const loadWeatherData = () => {
    const storedData = localStorage.getItem("weatherData");
    if (storedData) {
      setWeatherData(JSON.parse(storedData));
    } else {
      fetchWeather();
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

        {Array.isArray(weatherData) &&
          weatherData.map((cityData) => (
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

        {geolocation && (
          <Marker
            position={[geolocation.lat, geolocation.long]}
            icon={
              new L.Icon({
                iconUrl: "/pin.png",
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
              })
            }
          >
            <Popup>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: "500" }}>Você está aqui</span>
              </div>
            </Popup>
          </Marker>
        )}
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
