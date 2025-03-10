import weekdays from "@/utils/objects";
import styles from "@/components/today_forecast/TodayForecast.module.css";

const TodayForecast = ({ data }) => {
  const assetsUrl = "https://assets.hgbrasil.com/weather/icons/conditions";

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.location}>
          <span>
            <i className="bi bi-geo-alt-fill"></i>
          </span>
          <span>{data && data.results.city}</span>
        </div>
        <div className={styles.date}>
          <div> {weekdays[data && data.results.forecast[0].weekday]}</div>
          <div> {data && data.results.time}</div>
        </div>
      </div>
      <div className={styles.weather}>
        <div className={styles.weatherInfo}>
          <div className={styles.weatherTempContainer}>
            <div className={styles.weatherIcon}>
              <img
                src={`${assetsUrl}/${data && data.results.condition_slug}.svg`}
                alt={`Ícone de ${data && data.results.description}`}
              />
            </div>
            <div className={styles.weatherTemp}>
              {data && data.results.temp}°
            </div>
          </div>
          <div className={styles.weatherDescription}>
            {data && data.results.description}
          </div>
          <div className={styles.weatherTemps}>
            <div className={styles.tempMin}>
              <span className={styles.iconTempMin}>
                <i className="bi bi-arrow-down"></i>
              </span>
              {data && data.results.forecast[0].min} ºC
            </div>
            <div className={styles.tempMax}>
              <span className={styles.iconTempMax}>
                <i className="bi bi-arrow-up"></i>
              </span>
              <span>{data && data.results.forecast[0].max} ºC</span>
            </div>
          </div>
        </div>

        <div className={styles.weatherDetails}>
          <div className={styles.details}>
            <strong>Chuva</strong> <span>{data && data.results.rain} mm</span>
          </div>
          <div className={styles.details}>
            <strong>Vento</strong>{" "}
            <span>{data && data.results.wind_speedy}</span>
          </div>

          <div className={styles.details}>
            <strong>Umidade</strong>{" "}
            <span>{data && data.results.humidity} %</span>
          </div>
          <div className={styles.details}>
            <strong>Prob. de Chuva</strong>{" "}
            <span>{data && data.results.forecast[0].rain_probability} %</span>
          </div>
          <div className={styles.detailsSun}>
            <strong>Sol</strong>{" "}
            <span>
              {data && data.results.sunrise}
              <i className="bi bi-sun-fill"></i>
              {data && data.results.sunset}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayForecast;
