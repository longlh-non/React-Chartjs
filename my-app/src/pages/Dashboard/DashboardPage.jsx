import { Box } from "@mui/joy";
import ReoffendedChartContainer from "../../components/charts/Reoffended/ReoffendedChart.container"
import EducationEmploymentContainer from "../../components/charts/EducationSkillsEmploymentRate/EducationSkillsEmploymentRate.container"

const DashboardPage = ({
  selectedMetrics
}) => {


  return (
    <Box>
      {selectedMetrics.includes("reoffended") && (
        <ReoffendedChartContainer />
      )}
      {selectedMetrics.includes("education") && (
        <EducationEmploymentContainer />
      )}
    </Box>
  );
};

export default DashboardPage;
