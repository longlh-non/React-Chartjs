import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SupportProgramChart = ({ data }) => {
  // Prepare chart data
  const chartData = {
    labels: data.map(item => item.programName), // X-axis labels (program names)
    datasets: [
      {
        label: "Employed (%)",
        data: data.map(item => item.employmentRate),
        backgroundColor: "rgba(75, 192, 192, 0.8)", // Color for employed bars
      },
      {
        label: "Unemployed (%)",
        data: data.map(item => 100 - item.employmentRate), // Unemployed is 100% - employed rate
        backgroundColor: "rgba(255, 99, 132, 0.8)", // Color for unemployed bars
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Legend at the top
      },
      title: {
        display: true,
        text: 'Impact of Support Programs',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Support Programs',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percentage (%)',
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default SupportProgramChart;
