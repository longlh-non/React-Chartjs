import { Box } from "@mui/joy";
import ReoffendedChartContainer from "../../../components/charts/Reoffended/ReoffendedChart.container"
import EducationEmploymentContainer from "../../../components/charts/EducationSkillsEmploymentRate/EducationSkillsEmploymentRate.container"
import SupportProgramContainer from "../../../components/charts/SupportProgramEmploymentRate/SupportProgram.container";

const ChartsPage = ({
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
      {selectedMetrics.includes("support") && (
        <SupportProgramContainer />
      )}
    </Box>
  );
};

export default ChartsPage;
