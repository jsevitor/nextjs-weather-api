import { weekdays } from "@/utils/resources";
import styles from "@/components/tomorrow_forecast/TomorrowForecast.module.css";

const TomorrowForecast = ({ data }) => {
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
          <div> {weekdays[data && data.results.forecast[1].weekday]}, </div>
          <div> {data && data.results.forecast[1].date}</div>
        </div>
      </div>
      <div className={styles.weather}>
        <div className={styles.weatherInfo}>
          <div className={styles.weatherTempContainer}>
            <div className={styles.weatherIcon}>
              <img
                src={`${assetsUrl}/${
                  data && data.results.forecast[1].condition
                }.svg`}
                alt={`Ícone de ${data && data.results.forecast[1].description}`}
              />
            </div>
          </div>
          <div className={styles.weatherDescription}>
            {data && data.results.forecast[1].description}
          </div>
          <div className={styles.weatherTemps}>
            <div className={styles.tempMin}>
              <span className={styles.iconTempMin}>
                <i className="bi bi-arrow-down"></i>
              </span>
              {data && data.results.forecast[1].min} ºC
            </div>
            <div className={styles.tempMax}>
              <span className={styles.iconTempMax}>
                <i className="bi bi-arrow-up"></i>
              </span>
              <span>{data && data.results.forecast[1].max} ºC</span>
            </div>
          </div>
        </div>

        <div className={styles.weatherDetails}>
          <div className={styles.details}>
            <strong>Chuva</strong>{" "}
            <span>{data && data.results.forecast[1].rain} mm</span>
          </div>
          <div className={styles.details}>
            <strong>Vento</strong>{" "}
            <span>{data && data.results.forecast[1].wind_speedy}</span>
          </div>

          <div className={styles.details}>
            <strong>Umidade</strong>{" "}
            <span>{data && data.results.forecast[1].humidity} %</span>
          </div>
          <div className={styles.details}>
            <strong>Prob. de Chuva</strong>{" "}
            <span>{data && data.results.forecast[1].rain_probability} %</span>
          </div>
          <div className={styles.detailsSun}>
            <strong>Sol</strong>{" "}
            <span>
              {data && data.results.forecast[1].sunrise}
              <i className="bi bi-sun-fill"></i>
              {data && data.results.forecast[1].sunset}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomorrowForecast;
