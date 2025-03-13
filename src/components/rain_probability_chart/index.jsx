// components/RainProbabilityChart.js
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import styles from "@/components/rain_probability_chart/RainProbabilityChart.module.css";

// Registrar os componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RainProbabilityChart = ({ data }) => {
  // Extrair dados de probabilidade de chuva e datas
  const rainProbabilities =
    data && data.results.forecast.map((forecast) => forecast.rain_probability);
  const dates = data && data.results.forecast.map((day) => day.date);

  // Configuração do gráfico
  const rainData = {
    labels: dates,
    datasets: [
      {
        label: "Probabilidade de Chuva (%)",
        data: rainProbabilities,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        labels: {
          color: "#aeaeae",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Probabilidade de Chuva na Semana</span>
      </div>
      <Line data={rainData} options={options} />
    </div>
  );
};

export default RainProbabilityChart;
