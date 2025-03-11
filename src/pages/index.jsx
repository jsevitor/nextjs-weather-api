import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Header from "@/components/header/index.jsx";
import ForecastMenu from "@/components/forecast_menu/index.jsx";
import WeeklyForecasts from "@/components/weekly_forecasts/index.jsx";
import MoonPhase from "@/components/moon_phase/index.jsx";

import "leaflet/dist/leaflet.css";

import styles from "@/styles/Home.module.css";
import TodayForecast from "@/components/today_forecast";
import TomorrowForecast from "@/components/tomorrow_forecast";
import RainProbabilityChart from "@/components/rain_probability_chart";
import RainAccumulationChart from "@/components/rain_accumulation_chart";

const Map = dynamic(() => import("@/components/map/index.jsx"), {
  ssr: false,
});

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("today");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/weather");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header cityName={data && data.results.city} />
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
          {/* <MoonPhase data={data} /> */}
          <RainProbabilityChart data={data} />
          <RainAccumulationChart data={data} />
        </div>
      </div>

      <div>
        {loading ? (
          <p>Carregando dados...</p>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </>
  );
};

export default Home;
