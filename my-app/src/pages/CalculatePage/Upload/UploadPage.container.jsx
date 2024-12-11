import { useState } from "react";
import UploadPage from "./UploadPage";
import { usePageContext } from "../../../PageContext";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../store/data/actions";
import { selectData, selectLoading, selectError } from "../../../store/data/selectors";

const UploadContainer = () => {
  const { currentPage, setCurrentPage, selectedMetrics, setSelectedMetrics } = usePageContext();

  // Store
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // State for the uploaded file
  const [file, setFile] = useState(null);

  // Available metrics options
  const metricsOptions = [{ID: "reoffended", label: "Reoffended rate"}, {ID: "education", label: "Skills impact"}, {ID: "support", label: "Support program impact"},
    //  {ID: "f1", label: "F1 Score"}

  ];

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle metric selection
  const handleMetricSelection = (newMetrics) => {
    console.log("Selected Metrics:", newMetrics);
    setSelectedMetrics(newMetrics);
  };

  // Handle submit button click
  const handleSubmit = () => {
    
    if (file && selectedMetrics.length > 0) {
      console.log("File:", file.name);
      dispatch(fetchData());

      if (error && !loading){
        alert("Upload fail!");
      } else {
        setCurrentPage('dashboard')
        alert("Upload successful!");
      }

    } else {
      alert("Please upload a file and select at least one metric.");
    }
  };

  return (
    <UploadPage
      file={file}
      metricsOptions={metricsOptions}
      selectedMetrics={selectedMetrics}
      onFileChange={handleFileChange}
      onMetricSelection={handleMetricSelection}
      handleSubmit={handleSubmit}
    />
  );
};

export default UploadContainer;
