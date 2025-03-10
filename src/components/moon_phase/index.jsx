import styles from "@/components/moon_phase/MoonPhase.module.css";

const MoonPhase = ({ data }) => {
  const assetsUrl = "https://assets.hgbrasil.com/weather/icons/moon";

  const moonPhases = {
    new_moon: "Nova",
    waxing_crescent: "Crescente",
    first_quarter: "Crescente",
    waxing_gibbous: "Crescente",
    full: "Cheia",
    waning_gibbous: "Minguante",
    last_quarter: "Minguante",
    waning_crescent: "Minguante",
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Fase da Lua</span>
      </div>
      <div className={styles.moonPhase}>
        <img
          src={`${assetsUrl}/${data && data.results.moon_phase}.png`}
          alt="Moon"
        />
        <div className={styles.moonPhaseName}>
          {moonPhases[data && data.results.moon_phase]}
        </div>
      </div>
      <div className={styles.nextMoonPhases}>
        {data &&
          data.results.forecast.slice(1, 5).map((forecast, index) => (
            <div key={index} className={styles.nextMoon}>
              <div className={styles.nextMoonImg}>
                <img
                  src={`${assetsUrl}/${forecast.moon_phase}.png`}
                  alt={`Ícone de ${forecast.description}`}
                />
              </div>
              <div className={styles.nextMoonDate}>
                <span>{forecast.date}</span>
              </div>
              <div className={styles.nextMoonName}>
                {moonPhases[forecast.moon_phase]}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoonPhase;
