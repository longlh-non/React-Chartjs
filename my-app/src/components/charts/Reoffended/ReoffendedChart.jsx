import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ReoffendedChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const total = dataset.data.reduce((acc, value) => acc + value, 0);
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>Reoffended Rate</h2>
      {data ? <Pie data={data} options={options} /> : <p>Loading...</p>}
    </div>
  );
};

export default ReoffendedChart;