import { useEffect } from "react";
import DashboardPage from "./DashboardPage";

import { usePageContext } from "../../PageContext";


const DashboardContainer = () => {
  const { currentPage, setCurrentPage, selectedMetrics, setSelectedMetrics } = usePageContext();

  useEffect(() => {
    
    console.log(selectedMetrics)

  }, [selectedMetrics])


  return (
    <DashboardPage
      selectedMetrics={selectedMetrics}
    />
  );
};

export default DashboardContainer;
