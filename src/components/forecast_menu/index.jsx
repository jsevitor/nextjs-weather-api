import styles from "@/components/forecast_menu/ForecastOptions.module.css";

const ForecastMenu = ({ selectedOption, setSelectedOption }) => {
  const handleOptionClick = (option) => {
    setSelectedOption(option); // Atualiza a opção selecionada
  };

  return (
    <nav className={styles.forecastOptions}>
      <div
        onClick={() => handleOptionClick("today")}
        className={selectedOption === "today" ? styles.bold : ""}
      >
        Hoje
      </div>
      <div
        onClick={() => handleOptionClick("tomorrow")}
        className={selectedOption === "tomorrow" ? styles.bold : ""}
      >
        Amanhã
      </div>
      <div
        onClick={() => handleOptionClick("nextSeven")}
        className={selectedOption === "nextSeven" ? styles.bold : ""}
      >
        Próximos 7 dias
      </div>
    </nav>
  );
};

export default ForecastMenu;
