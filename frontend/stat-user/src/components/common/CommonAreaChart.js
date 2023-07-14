import ReactApexChart from "react-apexcharts";
import { Box, Stack, Typography } from "@mui/material";

export default function CommonAreaChart() {
  const chartProps = {
    series: [
      {
        name: "Canada Weekly Sell",
        data: [31, 40, 28, 51, 42, 48, 56, 54, 66, 72, 64, 69, 72, 79],
      },
      {
        name: "America Weekly Sell",
        data: [11, 31, 45, 32, 34, 52, 41, 75, 52, 79, 32, 44, 89, 93],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 450,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#7a5af8", "#00e396"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Garden",
          "Car",
          "Social",
          "Lifestyle",
          "Cloth",
          "Music",
          "Game",
          "Electronic",
          "Speakers",
          "Accessory",
          "Fabric",
          "Room",
          "Petshop",
          "Gross",
        ],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColor: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100],
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetX: -10,
      },
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
        <Typography variant="h4" fontSize="18px">
          Trends Chart
        </Typography>
        <Typography variant="h4" fontSize="12px" sx={{ color: "gray" }}>
          Product selling via categories.
        </Typography>
        <ReactApexChart
          options={chartProps.options}
          series={chartProps.series}
          type="area"
          height="90%"
        />
      </Stack>
    </Box>
  );
}
