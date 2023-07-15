import { Stack, Typography } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import useLang from "../../../hooks/useLang";

export default function SettingsHeader() {
  const { t } = useLang();
  return (
    <Stack direction="column">
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            ml: 2,
            mt: 1,
            color: "#323232",
          }}
          variant="h4"
        >
          {t("settings.title")}
        </Typography>
        <OpenInFullIcon sx={{ mr: 2 }} />
      </Stack>
    </Stack>
  );
}
