import { useEffect, useState } from 'react';
import SupportProgramChart from './SupportProgram';
import { useSelector } from 'react-redux';

const SupportProgramContainer = () => {
  const [chartData, setChartData] = useState([]);
  const { data, loading, error } = useSelector((state) => state.data);

  // Function to calculate the employment and completion rates
  const calculateProgramMetrics = (data) => {
    const programMetrics = {};

    data.forEach(({ support_program_enrolled, employment_status }) => {
      if (!programMetrics[support_program_enrolled]) {
        programMetrics[support_program_enrolled] = { total: 0, employed: 0, unemployed: 0 };
      }

      programMetrics[support_program_enrolled].total += 1;
      if (employment_status === "employed" || employment_status === "self_employed" || employment_status === "part_time_employment") {
        programMetrics[support_program_enrolled].employed += 1;
      } else {
        programMetrics[support_program_enrolled].unemployed += 1;
      }
    });

    // Return an array with the program metrics
    return Object.entries(programMetrics).map(([programName, metrics]) => ({
      programName,
      employed: metrics.employed,
      unemployed: metrics.unemployed,
      total: metrics.total,
      employmentRate: Math.round((metrics.employed / metrics.total) * 100),
    }));
  };

  // Process data when the component mounts
  useEffect(() => {
    const metrics = calculateProgramMetrics(data);
    setChartData(metrics);
  }, [data]);

  return (
    <div>
      <h2>Impact of Support Programs</h2>
      <SupportProgramChart data={chartData} />
    </div>
  );
};

export default SupportProgramContainer;
