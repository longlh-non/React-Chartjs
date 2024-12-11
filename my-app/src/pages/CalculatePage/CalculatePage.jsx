import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/joy";
import UploadPage from "./Upload/UploadPage.container"
import DashboardPage from "./ChartsPage/ChartsPage.container"
import { usePageContext } from "../../PageContext";

const CalculatePage = () => {
  const { currentPage, setCurrentPage } = usePageContext();
  const [file, setFile] = useState(null);

  // Navigation handler
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
      <Box sx={{ p: 4, maxWidth: 800, margin: "0 auto" }}>
      <Typography level="h3" sx={{ mb: 3 }}>
        Calculation Tool Prototype
      </Typography>

      {/* Navigation Buttons */}
      <Stack direction="row" gap={2} sx={{ mb: 4 }}>
        <Button
          variant="solid"
          onClick={() => navigateTo("upload")}
          // disabled={currentPage !== "upload"}
        >
          File Upload
        </Button>
        <Button
          variant="solid"
          onClick={() => navigateTo("dashboard")}
          // disabled={currentPage !== "dashboard"}
        >
          Dashboard
        </Button>
        {/* <Button
          variant="solid"
          // disabled={currentPage !== "results"}
        >
          Results
        </Button> */}
      </Stack>

      {/* Dynamic Page Rendering */}
      {currentPage === "upload" && (
        <UploadPage file={file} onFileChange={(f) => setFile(f)} />
      )}
      {currentPage === "dashboard" && (
        <DashboardPage />
      )}
      {/* {currentPage === "metrics" && (
        <MetricSelection
          selectedMetrics={selectedMetrics}
          onMetricSelection={(metrics) => setSelectedMetrics(metrics)}
        />
      )}
      {currentPage === "results" && (
        <Results file={file} selectedMetrics={selectedMetrics} />
      )} */}
    </Box>
  );
};

export default CalculatePage;
