import weekdays from "@/utils/objects";
import styles from "@/components/weekly_forecasts/Forecasts.module.css";

const WeeklyForecasts = ({ data }) => {
  const assetsUrl = "https://assets.hgbrasil.com/weather/icons/conditions";

  return (
    <div className={styles.weeklyForecast}>
      <div className={styles.actualForecast}>
        <div className={styles.header}>
          <div>{data && weekdays[data.results.forecast[0].weekday]}</div>
          <div>{data && data.results.time}</div>
        </div>
        <div className={styles.body}>
          <div className={styles.temperature}>
            <span className={styles.temp}>{data && data.results.temp} °</span>
            <span className={styles.weatherIcon}>
              <img
                src={`${assetsUrl}/${data && data.results.condition_slug}.svg`}
                alt={`Ícone de ${data && data.results.description}`}
              />
            </span>
          </div>
          <div className={styles.description}>
            {data && data.results.description}
          </div>
          <div className={styles.informations}>
            <div>
              <span>Chuva:</span> {data && data.results.rain} %
            </div>
            <div>
              <span>Umidade</span>: {data && data.results.humidity} %
            </div>
            <div>
              <span>Vento:</span> {data && data.results.wind_speedy}{" "}
              {data && data.results.wind_cardinal}
            </div>
            <div className={styles.sunriseSunset}>
              <div>
                <i className="bi bi-sunrise"></i> {data && data.results.sunrise}
              </div>
              <div>
                <i className="bi bi-sunset"></i> {data && data.results.sunset}
              </div>
            </div>
          </div>
        </div>
      </div>
      {data &&
        data.results.forecast.slice(1, 8).map((forecast, index) => (
          <div key={index} className={styles.dailyForecast}>
            <div className={styles.dailyForecastWeekday}>
              <span>{forecast.weekday}</span>
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
              <div className={styles.tempMax}>{forecast.max} ºC</div>
              <div className={styles.tempMin}>{forecast.min} ºC</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WeeklyForecasts;
