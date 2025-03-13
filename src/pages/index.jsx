import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/header/index.jsx";
import ForecastMenu from "@/components/forecast_menu/index.jsx";
import WeeklyForecasts from "@/components/weekly_forecasts/index.jsx";
import MoonPhase from "@/components/moon_phase/index.jsx";
import TodayForecast from "@/components/today_forecast";
import TomorrowForecast from "@/components/tomorrow_forecast";
import RainProbabilityChart from "@/components/rain_probability_chart";
import RainAccumulationChart from "@/components/rain_accumulation_chart";
import Location from "@/components/location";
// import FavoriteCities from "@/components/favorite_cities";
import Footer from "@/components/footer";

import "leaflet/dist/leaflet.css";
import styles from "@/styles/Home.module.css";

const Map = dynamic(() => import("@/components/map/index.jsx"), {
  ssr: false,
});

const Home = () => {
  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("today");
  const [cityName, setCityName] = useState("");
  const [geolocation, setGeolocation] = useState(null);

  const fetchData = async (city) => {
    try {
      const response = await fetch(`/api/weather?city_name=${city}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Recupera a cidade salva no localStorage ao carregar a página
  useEffect(() => {
    const savedCity = localStorage.getItem("cityName");
    if (savedCity) {
      setCityName(savedCity);
    } else {
      setCityName("São Paulo"); // Cidade padrão
    }
  }, []);

  // Salva a cidade pesquisada no localStorage
  useEffect(() => {
    if (cityName) {
      localStorage.setItem("cityName", cityName);
    }
  }, [cityName]);

  useEffect(() => {
    if (geolocation) {
      const { latitude, longitude } = geolocation;
      fetchData(`lat=${latitude}&long=${longitude}`);
    } else {
      const cityToFetch = cityName || "São Paulo";
      fetchData(cityToFetch);
    }
  }, [cityName, geolocation]);

  return (
    <>
      <Location setGeolocation={setGeolocation} />
      <Header setCityName={setCityName} />
      <div className={styles.mainContainer}>
        <ForecastMenu
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            {selectedOption === "today" && <TodayForecast data={data} />}
            {selectedOption === "tomorrow" && <TomorrowForecast data={data} />}
            {selectedOption === "nextSeven" && <WeeklyForecasts data={data} />}
          </div>
          <div className={styles.rightContainer}>
            <MoonPhase data={data} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <Map lat={-14.235} long={-51.9253} geolocation={geolocation} />
          </div>
          <div className={styles.rightContainer}>
            <RainProbabilityChart data={data} />
            <RainAccumulationChart data={data} />
          </div>
        </div>
        <div className={styles.container}>{/* <FavoriteCities /> */}</div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
