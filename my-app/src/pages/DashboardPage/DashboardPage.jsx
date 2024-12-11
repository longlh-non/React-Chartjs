import React from "react";
import { Box, Typography, Card, CardContent, Divider, Stack, Avatar, Grid } from "@mui/joy";

const DashboardPage = () => {
  const metrics = {
    sinceYear: 2014,
    peoplePlaced: 780,
    referrals: 5188,
    interviewed: 2305,
    securedJobs: 780,
    returnedToPrison: 33,
    reConvictionRate: 4.23,
    nationalReOffending12Months: 50,
    nationalReOffending2Years: 64,
    complexOffendersPercentage: 32,
  };

  const metricItems = [
    {
      value: metrics.peoplePlaced,
      label: `People Placed Since ${metrics.sinceYear}`,
      color: "#c51c58",
    },
    {
      value: metrics.referrals,
      label: "Referrals Received",
      color: "#212843",
    },
    {
      value: metrics.returnedToPrison,
      label: "Returned to Prison",
      color: "#212843",
    },
    {
      value: `${metrics.complexOffendersPercentage}%`,
      label: "Complex Offenders (PPOs)",
      color: "#212843",
    },
    {
      value: `${metrics.reConvictionRate}%`,
      label: "Re-conviction Rate",
      color: "#212843",
    },
  ];

  return (
    <Box sx={{ maxWidth: 1200, margin: "auto", padding: 3 }}>
      {/* <Typography
        level="h2"
        sx={{
          mb: 4,
          textAlign: "center",
          color: "#c51c58",
          fontWeight: "bold",
        }}
      >
        🌟 Tempus Novo Metrics 🌟
      </Typography> */}

      <Box sx={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
        {[1, 2].map((cardIndex) => (
          <Card
            key={cardIndex}
            variant="outlined"
            sx={{
              boxShadow: "lg",
              borderRadius: "lg",
              backgroundColor: "neutral.50",
              padding: 2,
              width: "100%",
              maxWidth: 600,
              flex: "1 1 45%", // Allow the cards to share the row and scale
            }}
          >
            <CardContent>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Avatar
                  variant="soft"
                  sx={{
                    bgcolor: metricItems[0].color,
                    color: "white",
                    width: 120,
                    height: 120,
                    margin: "0 auto",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {metricItems[0].value}
                </Avatar>
                <Typography level="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                  {metricItems[0].label}
                </Typography>
              </Box>

              <Grid container spacing={3} justifyContent="center">
                {metricItems.slice(1).map((metric, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box sx={{ textAlign: "center" }}>
                      <Avatar
                        variant="soft"
                        sx={{
                          bgcolor: metric.color,
                          color: "white",
                          width: 80,
                          height: 80,
                          margin: "0 auto",
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                        }}
                      >
                        {metric.value}
                      </Avatar>
                      <Typography level="body1" sx={{ mt: 1 }}>
                        {metric.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default DashboardPage;
