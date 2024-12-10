import { useState, useEffect } from "react";
import ReoffendedChart from "./ReoffendedChart";
import { useSelector } from 'react-redux';

const ReoffendedChartContainer = () => {
  const [chartData, setChartData] = useState(null);
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    // Process the JSON data to calculate counts
    const reoffendedCount = data.filter(item => item.reoffended === "yes").length;
    const didNotReoffendCount = data.filter(item => item.reoffended === "no").length;

    // Prepare data for the chart
    const chartData = {
      labels: ["Reoffended", "Did Not Reoffend"],
      datasets: [
        {
          label: "Reoffended Rate",
          data: [reoffendedCount, didNotReoffendCount],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384AA", "#36A2EBAA"],
        },
      ],
    };

    setChartData(chartData);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <ReoffendedChart data={chartData} />;
};

export default ReoffendedChartContainer;