import React from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/joy";

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import AcquisitionsChart from "../../components/charts/AcquisitionsChart";
import DimensionsChart from "../../components/charts/DimensionsChart";

const DashboardPage = ({
  file,
  metricsOptions,
  selectedMetrics,
  onFileChange,
  onMetricSelection,
  onSubmit,
}) => {


  return (
    <Box>
      <AcquisitionsChart />
      <DimensionsChart />
    </Box>
  );
};

export default DashboardPage;
