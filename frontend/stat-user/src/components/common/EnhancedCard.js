import { Box, Stack, Typography } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ScoreIcon from "@mui/icons-material/Score";

export default function CommonCard() {
  return (
    <Box
      sx={{
        height: "150px",
        ml: 4,
        backgroundColor: "#FFFFFF70",
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
        borderRadius: 4,
        paddingTop: 2,
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <Stack direction="column" spacing={1}>
        <Typography variant="p" sx={{ fontSize: "14px", fontWeight: "600" }}>
          Total Active Users
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <InsertChartIcon sx={{ fontSize: "30px" }} />
            <Typography
              variant="p"
              sx={{ fontSize: "14px", fontWeight: "500" }}
            >
              14.8%
            </Typography>
          </Stack>
          <ScoreIcon sx={{ color: "rgb(0, 227, 150)", fontSize: "50px" }} />
        </Stack>
        <Typography variant="h4">18,765</Typography>
      </Stack>
    </Box>
  );
}
