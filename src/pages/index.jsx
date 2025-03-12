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

import "leaflet/dist/leaflet.css";
import styles from "@/styles/Home.module.css";

const Map = dynamic(() => import("@/components/map/index.jsx"), {
  ssr: false,
});

const Home = () => {
  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("today");
  const [cityName, setCityName] = useState("");

  const fetchData = async (city) => {
    try {
      const response = await fetch(`api/weather?city_name=${city}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Carregar cidade do localStorage quando o componente for montado
  // useEffect(() => {
  //   const savedCity = localStorage.getItem("cityName");
  //   if (savedCity) {
  //     setCityName(savedCity);
  //     fetchData(savedCity);
  //   }
  // }, []);

  useEffect(() => {
    const cityToFetch = cityName || "São Paulo";
    fetchData(cityToFetch);
  }, [cityName]);

  return (
    <>
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
            <Map lat={-14.235} long={-51.9253} />
          </div>
          <div className={styles.rightContainer}>
            <RainProbabilityChart data={data} />
            <RainAccumulationChart data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
