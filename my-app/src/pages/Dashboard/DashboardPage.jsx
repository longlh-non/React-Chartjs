import React from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/joy";

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import AcquisitionsChart from "../../components/charts/AcquisitionsChart";
import DimensionsChart from "../../components/charts/DimensionsChart";
import ReoffendedChartContainer from "../../components/charts/Reoffended/ReoffendedChart.container"

const DashboardPage = ({
  selectedMetrics
}) => {


  return (
    <Box>
      <ReoffendedChartContainer />
    </Box>
  );
};

export default DashboardPage;
