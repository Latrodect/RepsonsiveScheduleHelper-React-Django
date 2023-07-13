import { Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import CommonAreaChart from "../../components/common/CommonAreaChart";

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <Stack direction="column" spacing={4} sx={{mt:4,  ml: 6, height:"60%", width:"50%"}}>
      <Typography variant="h4" sx={{ mt: 10, fontSize:"25px" }}>
        {t("sidebar.dashboard")}
      </Typography>
      <CommonAreaChart />
    </Stack>
  );
}
