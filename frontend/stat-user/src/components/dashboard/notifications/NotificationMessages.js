import {
  Divider,
  Button,
  Alert,
  MenuItem,
  Stack,
  Avatar,
  Typography,
  Tooltip,
} from "@mui/material";
import useLang from "../../../hooks/useLang";

export default function NotificationAllMessages(props) {
  const { notifications, handleClose } = props;
  const { t } = useLang();

  return notifications.map((item) => (
    <>
      <MenuItem
        key={item.title}
        selected={item === "Pyxis"}
        onClick={handleClose}
        sx={{
          height: "150px",
        }}
      >
        <Stack direction="row">
          <Avatar alt="Notification" src={item.src} />
          <Stack direction="column" sx={{ ml: 2 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "16px", fontWeight: "600", color: "#313131" }}
              >
                {item.title}
              </Typography>
              {
                <Alert severity={item.status[1]} sx={{ cursor: "pointer" }}>
                  {item.status[0]}
                </Alert>
              }
            </Stack>
            <Typography
              variant="body1"
              sx={{
                fontSize: "11px",
                color: "gray",
                width: "325px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {t("notification.update-time")} {item.time}
            </Typography>
            <Tooltip title={item.content}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "13px",
                  color: "#333333",
                  width: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.content}
              </Typography>
            </Tooltip>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button
                variant="contained"
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
                  minWidth: "64px",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  boxShadow: "none",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(33, 43, 54)",
                  height: "30px",
                  fontSize: "13px",
                }}
              >
                {t("notification.button-accept")}
              </Button>
              <Button
                variant="outline"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  boxSizing: "border-box",
                  outline: "0px",
                  border: "0px currentcolor",
                  margin: "0px",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  appearance: "none",
                  textDecoration: "none",
                  fontWeight: "700",
                  lineHeight: "1.71429",
                  textTransform: "unset",
                  fontFamily: "'Public Sans', sans-serif",
                  minWidth: "64px",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  border: "1px solid rgba(145, 158, 171, 0.32)",
                  boxShadow: "none",
                  color: "rgb(33, 43, 54)",
                  backgroundColor: "transparent",
                  height: "30px",
                  fontSize: "13px",
                }}
              >
                {t("notification.button-decline")}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </MenuItem>
      <Divider sx={{ mt: 2, mr: 2, ml: 2 }} />
    </>
  ));
}
