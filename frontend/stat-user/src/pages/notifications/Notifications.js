import { useTranslation } from "react-i18next";
import {
    Avatar,
    Stack,
    Typography,
    Box,
  } from "@mui/material";
  
export default function NotificationsPage() {
  const { t } = useTranslation();

  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{ mt: 4, ml: 6, mt:20, height: "60%", width: "90%" }}
    >
      <Box
      sx={{
        height: "750px",
        width: "70%",
        ml: 4,
        backgroundColor: "#FFFFFF70",
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
        borderRadius: 4,
        paddingTop: 2,
        paddingLeft: 2,
        paddingRight: 2,
      }}
    ></Box>
    </Stack>
  );
}
