import { Typography } from "@mui/material";
import useLang from "../../hooks/useLang";
import { useTranslation } from "react-i18next";

export default function DashboardPage() {
    const { t } = useTranslation();

    return (
        <Typography variant="h2" sx={{ mt: 10, ml: 6 }}>
            {t("sidebar.dashboard")}
        </Typography>
    );
}
