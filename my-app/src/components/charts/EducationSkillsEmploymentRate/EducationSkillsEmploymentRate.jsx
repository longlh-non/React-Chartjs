// ScatterPlot.js
import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ScatterController,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(ScatterController, LinearScale, PointElement, Tooltip, Legend);

const EducationSkillsEmploymentRate = ({ data }) => {
  const scatterData = {
    datasets: [
      {
        label: "Education and Employment Correlation",
        data: data.map(item => ({
          x: item.skillCount, // Skill count as X-axis value
          y: item.employmentRate, // Employment rate as Y-axis value
        })),
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Color for scatter points
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Skills: ${context.raw.x}, Employment Rate: ${context.raw.y}%`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        title: {
          display: true,
          text: "Skill Count",
        },
        ticks: {
          precision: 0,
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Employment Rate (%)",
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div>
      <h2>Education/Skill Development and Employment</h2>
      <Scatter data={scatterData} options={options} />
    </div>
  );
};

export default EducationSkillsEmploymentRate;
