import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Header from "@/components/header/index.jsx";
import ForecastMenu from "@/components/forecast_menu/index.jsx";
import WeeklyForecasts from "@/components/weekly_forecasts/index.jsx";
import MoonPhase from "@/components/moon_phase/index.jsx";

import "leaflet/dist/leaflet.css";

import styles from "@/styles/Home.module.css";
import TodayForecast from "@/components/today_forecast";

const Map = dynamic(() => import("@/components/map/index.jsx"), {
  ssr: false,
});

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <ForecastMenu />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <TodayForecast data={data} />
          {/* <WeeklyForecasts data={data} /> */}
        </div>
        <div className={styles.rightContainer}>
          <MoonPhase data={data} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Map />
        </div>
        <div className={styles.rightContainer}>
          <MoonPhase data={data} />
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
