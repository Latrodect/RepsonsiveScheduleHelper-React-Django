import { Box, Stack, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function NoData() {
  const { t } = useTranslation();

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack
        direction="column"
        spacing={3}
        sx={{ mt: 6 }}
        justifyContent="center"
        alignItems="center"
      >
        <img width={350} src={"/images/dataempty.png"} alt="Not Found" />
        <Typography
          variant="h4"
          sx={{ fontWeight: "800", color: "rgb(33, 43, 54)" }}
        >
        {t("notification.empty-message-title")}
          
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "rgb(33, 43, 54)" }}>
        {t("notification.empty-message-content")}
          
        </Typography>
        <Button
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxSizing: "border-box",
            outline: "0px",
            margin: "0px",
            cursor: "pointer",
            verticalAlign: "middle",
            appearance: "none",
            textDecoration: "none",
            fontWeight: "700",
            lineHeight: "1.71429",
            textTransform: "unset",
            fontFamily: "'Public Sans', sans-serif",
            minWidth: "174px",
            padding: "4px 8px",
            borderRadius: "8px",
            transition:
              "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "none",
            color: "rgb(255, 255, 255)",
            backgroundColor: "rgb(33, 43, 54)",
            height: "50px",
            fontSize: "15px",
            '&:hover': {
              transform: 'scale(1.05)',
              color: "rgb(33, 43, 54)"
            },
          }}
        >
          {t("notification.empty-message-button")}
          
        </Button>
      </Stack>
    </Box>
  );
}
