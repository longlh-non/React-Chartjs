import React, { useEffect, useState } from "react";
import DashboardPage from "./DashboardPage";

import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/data/actions";
import { selectData, selectLoading, selectError } from "../../store/data/selectors";

import { usePageContext } from "../../PageContext";


const DashboardContainer = () => {
  const { currentPage, setCurrentPage, selectedMetrics, setSelectedMetrics } = usePageContext();
  // const [refinedMetrics, setRefineMetrics] = useState(selectedMetrics)

  // useEffect(() => {
    
  //   refine = selectedMetrics.map((metric) => {
  //     if (!metric) return ""; // Handle empty or undefined strings
  //     return metric.charAt(0).toUpperCase() + str.slice(1);
  //   })

  //   setRefineMetrics(refine)

  // }, [selectedMetrics])


  return (
    <DashboardPage
      selectedMetrics={selectedMetrics}
    />
  );
};

export default DashboardContainer;
