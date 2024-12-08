import React, { useState } from "react";
import DashboardPage from "./DashboardPage";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/data/actions";
import { selectData, selectLoading, selectError } from "../../store/data/selectors";

const DashboardContainer = () => {
  // State for the uploaded file
  const [file, setFile] = useState(null);

  // State for selected metrics
  const [selectedMetrics, setSelectedMetrics] = useState([]);

  // Available metrics options
  const metricsOptions = [{ID: "access", label: "Accuracy"}, {ID: "prec", label: "Precision"}, {ID: "rec", label: "Recall"}, {ID: "f1", label: "F1 Score"}];

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle metric selection
  const handleMetricSelection = (event, newMetrics) => {
    setSelectedMetrics(newMetrics);
  };

  // Handle submit button click
  const handleSubmit = () => {
    if (file && selectedMetrics.length > 0) {
      console.log("File:", file.name);
      console.log("Selected Metrics:", selectedMetrics);
      alert("Submission successful!");
    } else {
      alert("Please upload a file and select at least one metric.");
    }
  };

  return (
    <DashboardPage
      file={file}
      metricsOptions={metricsOptions}
      selectedMetrics={selectedMetrics}
      onFileChange={handleFileChange}
      onMetricSelection={handleMetricSelection}
      onSubmit={handleSubmit}
    />
  );
};

export default DashboardContainer;
