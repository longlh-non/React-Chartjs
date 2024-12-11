import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/joy";
import DashboardPage from "./DashboardPage"
import { usePageContext } from "../../PageContext";

const DashboardPageContainer = () => {
  const { currentPage, setCurrentPage } = usePageContext();
  const [file, setFile] = useState(null);

  // Navigation handler
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
      <DashboardPage />
  );
};

export default DashboardPage;
