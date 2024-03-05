import ReactApexChart from "react-apexcharts";
import { Box, Stack, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export default function CommonDonutChart() {
  const chartProps = {
    series: [44, 55, 41, 17, 15],
    options: {
      colors: ["#FFF1C9", "#F7B7A3", "#2B0B3F", "#EA5F89", "#FF6B45"],
      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        offsetX: -10,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
              },
            },
          },
        },
      },
      fill: {
        colors: ["#FFF1C9", "#F7B7A3", "#2B0B3F", "#EA5F89", "#FF6B45"],
      },
      labels: ["Bands", "Amphi", "Earphone", "Book", "Cup"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Box
      sx={{
        ml: 6,
        height: "550px !important",
        backgroundColor: "#FFFFFF20",
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
        borderRadius: 4,
        padding: 5,
      }}
    >
      <Stack direction="column" spacing={1} sx={{ height: "100%" }}>
      <Stack direction="row" spacing={1} sx={{ height: "100%" }} justifyContent="space-between">
        <Typography variant="h4" fontSize="18px">
          Box Selling Count
        </Typography>
        <InfoIcon/>
        </Stack>
        <Typography variant="h4" fontSize="12px" sx={{ color: "gray" }}>
          Your product boxes and selling counts.
        </Typography>
        <ReactApexChart
          options={chartProps.options}
          series={chartProps.series}
          type="donut"
          height="90%"
        />
      </Stack>
    </Box>
  );
}
