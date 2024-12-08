import React from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/joy";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const UploadPage = ({
  file,
  metricsOptions,
  selectedMetrics,
  onFileChange,
  onMetricSelection,
  onSubmit,
}) => {
  const handleMetricsSelect = (event, newMetric) => {
    // Update the selected metrics directly
    // debugger
    // const updatedMetrics = selectedMetrics.includes(metric)
    //   ? selectedMetrics.filter((m) => m !== metric)
    //   : [...selectedMetrics, metric];
    // setSelectedMetrics(event.target.value);

    console.log("Selected Metrics:", newMetric); // Logs the selected values
    onMetricSelection(newMetric); // Pass the updated metrics
  };

  return (
    <form
    onSubmit={(event) => {
      event.preventDefault();
      // const formData = new FormData(event.currentTarget);
      // const formJson = Object.fromEntries(formData.entries());
      // const selectedPets = JSON.parse(formJson.pets);
      onSubmit()
      // alert(JSON.stringify(selectedPets));
    }}
    >
      <Box sx={{ p: 4, maxWidth: 600, margin: "0 auto" }}>
          <Typography level="h4" sx={{ mb: 2 }}>
            File Upload with Metrics Selection
          </Typography>

          {/* File Upload Button */} 
          <Box sx={{ mb: 3 }}>
            <Button
              variant="soft"
              component="label"
              size="lg"
              sx={{ display: "block", mb: 1 }}
            >
              {file ? `Selected File: ${file.name}` : "Upload File"}
              <input
                type="file"
                hidden
                accept=".csv, .txt, .xlsx"
                onChange={onFileChange}
              />
            </Button>
            {file && <Typography level="body2">File: {file.name}</Typography>}
          </Box>

          {/* Metrics Multi-selection */}
          <Select
            multiple
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', gap: '0.25rem' }}>
                {selected.map((selectedOption) => (
                  <Chip variant="soft" color="primary">
                    {selectedOption.label}
                  </Chip>
                ))}
              </Box>
            )}
            sx={{ minWidth: '15rem' }}
            slotProps={{
              listbox: {
                sx: {
                  width: '100%',
                },
              },
            }}

            onChange={handleMetricsSelect}
          >
            {
              metricsOptions.map((metric) => (<Option value={metric.ID}>{metric.label}</Option>))
            }
        </Select>
          {/* Submit Button */}
        <Box>
          <Button
            variant="solid"
            size="lg"
            sx={{ marginTop: '1.5rem' }}
            disabled={!file || selectedMetrics.length === 0}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </form>
    
  );
};

export default UploadPage;
