import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
} from 'chart.js';

import { getAquisitionsByYear } from '../../api/api'

// Register Chart.js components
ChartJS.register(Colors, BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const AcquisitionsChart = () => {
    const [chartData, setChartData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getAquisitionsByYear();
        setChartData({
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count),
              backgroundColor: 'rgba(75, 192, 192, 0.5)', // Optional styling
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      };
  
      fetchData();
    }, []);
  
    const options = {
      responsive: true,
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div style={{width: "800px"}}>
        {chartData ? (
          <Bar data={chartData} options={options} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default AcquisitionsChart;