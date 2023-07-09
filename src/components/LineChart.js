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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
    },
    y: {
      type: "linear",
      display: false,
      position: "left",
      grid: {
        color: "#ffffff",
      },
    },
    y1: {
      type: "linear",
      display: false,
      position: "right",

      // grid line settings
      grid: {
        color: "#ffffff",
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  },
};

function LineChart({ tracker }) {
  if (!tracker) return;
  const labels = tracker.map((record) => record.time);
  const bodyWeightDataset = {
    label: "Body Weight",
    data: tracker.map((record) => record.bodyWeight),
    borderColor: "#FFCC21",
    backgroundColor: "#FFCC21",
    yAxisID: "y",
  };
  const bodyFatDataset = {
    label: "Body Fat",
    data: tracker.map((record) => record.bodyFat),
    borderColor: "#8FE9D0",
    backgroundColor: "#8FE9D0",
    yAxisID: "y1",
  };
  const data = {
    labels,
    datasets: [bodyWeightDataset, bodyFatDataset],
  };
  return <Line options={options} data={data} />;
}

export default LineChart;
