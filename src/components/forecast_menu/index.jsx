import styles from "@/components/forecast_menu/ForecastOptions.module.css";

const ForecastMenu = () => {
  return (
    <nav className={styles.forecastOptions}>
      <div>Hoje</div>
      <div>Amanhã</div>
      <div>Próximos 7 dias</div>
    </nav>
  );
};

export default ForecastMenu;
