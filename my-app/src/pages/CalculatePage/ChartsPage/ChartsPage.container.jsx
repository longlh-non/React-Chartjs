import { useEffect } from "react";
import ChartsPage from "./ChartsPage";

import { usePageContext } from "../../../PageContext";


const ChartsPageContainer = () => {
  const { currentPage, setCurrentPage, selectedMetrics, setSelectedMetrics } = usePageContext();

  useEffect(() => {
    
    console.log(selectedMetrics)

  }, [selectedMetrics])


  return (
    <ChartsPage
      selectedMetrics={selectedMetrics}
    />
  );
};

export default ChartsPageContainer;
