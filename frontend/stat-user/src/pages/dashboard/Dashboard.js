import { Typography, Stack, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import CommonAreaChart from "../../components/common/CommonAreaChart";
import CommonDonutChart from "../../components/common/CommonDonutChart";

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ mt: 4, ml:6, height: "60%", width: "90%" }}
    >
      <Typography variant="h4" sx={{ mt: 10, fontSize: "25px" }}>
        {t("sidebar.dashboard")}
      </Typography>

      <Grid container spacing={2} >
        <Grid item xs={8}>
        
            <CommonAreaChart />
        </Grid>
        <Grid item xs={3}>
          <CommonDonutChart />
        </Grid>
        
      </Grid>
    </Stack>
  );
}
