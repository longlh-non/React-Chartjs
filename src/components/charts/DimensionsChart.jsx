import React, { useEffect, useState } from 'react';
import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Colors,
  BubbleController,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js';

import { getDimensions } from '../../api/api'

// Register Chart.js components
ChartJS.register(
  Colors,
  BubbleController,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

// Custom plugin for chart area border
const chartAreaBorder = {
  id: 'chartAreaBorder',
  beforeDraw(chart, args, options) {
    const { ctx, chartArea: { left, top, width, height } } = chart;
    ctx.save();
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.setLineDash(options.borderDash || []);
    ctx.lineDashOffset = options.borderDashOffset;
    ctx.strokeRect(left, top, width, height);
    ctx.restore();
  },
};

const DimensionsChart = () => {
    const [chartData, setChartData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getDimensions();
  
        setChartData({
          datasets: [
            {
              label: 'width = height',
              data: data
                .filter(row => row.width === row.height)
                .map(row => ({ x: row.width, y: row.height, r: row.count })),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'width > height',
              data: data
                .filter(row => row.width > row.height)
                .map(row => ({ x: row.width, y: row.height, r: row.count })),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
              label: 'width < height',
              data: data
                .filter(row => row.width < row.height)
                .map(row => ({ x: row.width, y: row.height, r: row.count })),
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
          ],
        });
      };
  
      fetchData();
    }, []);
  
    const options = {
      aspectRatio: 1,
      plugins: {
        chartAreaBorder: {
          borderColor: 'red',
          borderWidth: 2,
          borderDash: [5, 5],
          borderDashOffset: 2,
        },
        legend: {
          display: true,
        },
        tooltip: {
          callbacks: {
            label: (context) => `(${context.raw.x}, ${context.raw.y}), r: ${context.raw.r}`,
          },
        },
      },
      scales: {
        x: {
          max: 500,
          ticks: {
            callback: value => `${value / 100} m`,
          },
        },
        y: {
          max: 500,
          ticks: {
            callback: value => `${value / 100} m`,
          },
        },
      },
    };
  
    return (
      <div style={{width: "500px"}}>
        {chartData ? (
          <Bubble data={chartData} options={options} plugins={[chartAreaBorder]} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default DimensionsChart;