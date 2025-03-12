import weekdays from "@/utils/objects";
import styles from "@/components/weekly_forecasts/WeeklyForecasts.module.css";

const WeeklyForecasts = ({ data }) => {
  const assetsUrl = "https://assets.hgbrasil.com/weather/icons/conditions";

  return (
    <div className={styles.container}>
      {data &&
        data.results.forecast.slice(1, 8).map((forecast, index) => (
          <div key={index} className={styles.dailyForecast}>
            <div className={styles.dailyForecastWeekday}>
              <span>{forecast.weekday}</span>
            </div>
            <div className={styles.dailyForecastDate}>
              <span>{forecast.date}</span>
            </div>
            <div className={styles.dailyForecastWeatherIcon}>
              <img
                src={`${assetsUrl}/${forecast.condition}.svg`}
                alt={`Ícone de ${forecast.description}`}
              />
            </div>
            <div className={styles.dailyForecastDescription}>
              {forecast.description}
            </div>
            <div className={styles.dailyForecastTemps}>
              <div className={styles.tempMax}>
                <i className="bi bi-arrow-up"></i>
                {forecast.max} ºC
              </div>
              <div className={styles.tempMin}>
                <i className="bi bi-arrow-down"></i>
                {forecast.min} ºC
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WeeklyForecasts;
