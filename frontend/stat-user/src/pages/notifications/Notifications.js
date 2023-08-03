import { useTranslation } from "react-i18next";
import {
  Avatar,
  Stack,
  Typography,
  Box,
  MenuItem,
  Alert,
  Tooltip,
  Button,
  Divider,
  IconButton,
  CircularProgress,
  Badge,
} from "@mui/material";
import NotificationsService from "../../services/NotificationsService/NotificationsService";
import ArchiveIcon from "@mui/icons-material/Archive";
import MailIcon from "@mui/icons-material/Mail";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { useState } from "react";
import NoData from "../../components/common/NoData";

let notifications;
let readedNotifications;
let unreadedNotifications;
let archivedNotifications;

let notificationsCount;
let readedNotificationsCount;
let unreadedNotificationsCount;
let archivedNotificationsCount;

NotificationsService.NotificationsGetRequest(`status=all`).then((response) => {
  notifications = response.data;
  notificationsCount = notifications.length;
});
NotificationsService.NotificationsGetRequest(`status=read`).then((response) => {
  readedNotifications = response.data;
  readedNotificationsCount = readedNotifications.length;
});
NotificationsService.NotificationsGetRequest(`status=unread`).then(
  (response) => {
    unreadedNotifications = response.data;
    unreadedNotificationsCount = unreadedNotifications.length;
  }
);
NotificationsService.NotificationsGetRequest(`status=archive`).then(
  (response) => {
    archivedNotifications = response.data;
    archivedNotificationsCount = archivedNotifications.length;
  }
);

function Spinner() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "80%" }}
    >
      <CircularProgress sx={{ color: "rgb(33, 43, 54)" }} />
    </Box>
  );
}

export default function NotificationsPage() {
  const { t } = useTranslation();
  const [data, setData] = useState(notifications);
  const [active, setActive] = useState("all");
  const [visibility, setVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageContent, setMessageContent] = useState("notification.tab.all")

  const handleAllMessageClicked = () => {
    setIsLoading(true);
    const newData = [...notifications];
    setData(newData);
    setMessageContent("notification.tab.all")

    if (notificationsCount === 0) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleUnreadMessageClicked = () => {
    setIsLoading(true);
    const newData = [...unreadedNotifications];
    setData(newData);
    setMessageContent("notification.tab.unread")

    if (unreadedNotificationsCount === 0) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  const handleReadMessageClicked = () => {
    setIsLoading(true);
    const newData = [...readedNotifications];
    setData(newData);
    setMessageContent("notification.tab.read")

    if (readedNotificationsCount === 0) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  const handleArchivedMessageClicked = () => {
    setIsLoading(true);
    const newData = [...archivedNotifications];
    setData(newData);
    setMessageContent("notification.tab.archive")

    if (archivedNotificationsCount === 0) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{ mt: 4, ml: 6, mt: 20, height: "60%", width: "90%" }}
    >
      <Box
        sx={{
          height: "1000px",
          width: "90%",
          ml: 4,
          backgroundColor: "#FFFFFF70",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          borderRadius: 4,
          paddingTop: 2,
          paddingLeft: 2,
          paddingRight: 2,
          overflow: "auto",
          maxHeight: "1000px",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack
            direction="column"
            sx={{
              ml: 3,
            }}
          >
            <Typography variant="h4"> {t("notification.page-title")}</Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#313131",
              }}
            >
              {t("notification.page-description")}
            </Typography>
          </Stack>
          <Stack direction="column" spacing={2} sx={{ textAlign: "right" }}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#313131",
              }}
            >
               {t(messageContent)}
              
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 6 }}>
              <Badge badgeContent={notificationsCount} color="primary">
                <IconButton
                  sx={{
                    ...(active === "all" ? { color: "rgb(33, 43, 54)" } : {}),
                  }}
                  onClick={() => {
                    handleAllMessageClicked();
                    setActive("all");
                  }}
                >
                  <MailIcon />
                </IconButton>
              </Badge>

              <Badge badgeContent={readedNotificationsCount} color="primary">
                <IconButton
                  sx={{
                    ...(active === "read" ? { color: "rgb(33, 43, 54)" } : {}),
                  }}
                  onClick={() => {
                    handleReadMessageClicked();
                    setActive("read");
                  }}
                >
                  <MarkEmailReadIcon />
                </IconButton>
              </Badge>

              <Badge badgeContent={unreadedNotificationsCount} color="primary">
                <IconButton
                  sx={{
                    ...(active === "unread"
                      ? { color: "rgb(33, 43, 54)" }
                      : {}),
                  }}
                  onClick={() => {
                    handleUnreadMessageClicked();
                    setActive("unread");
                  }}
                >
                  <MarkEmailUnreadIcon />
                </IconButton>
              </Badge>

              <Badge badgeContent={archivedNotificationsCount} color="primary">
                <IconButton
                  sx={{
                    ...(active === "archive"
                      ? { color: "rgb(33, 43, 54)" }
                      : {}),
                  }}
                  onClick={() => {
                    handleArchivedMessageClicked();
                    setActive("archive");
                  }}
                >
                  <ArchiveIcon />
                </IconButton>
              </Badge>
            </Stack>
          </Stack>
        </Stack>
        <br/>
        {isLoading ? (
          <Spinner />
        ) : !visibility ? (
          data.map((item) => (
            <>
              <MenuItem
                key={item.title}
                selected={item === "Pyxis"}
                sx={{
                  height: "150px",
                }}
              >
                <Stack direction="row" sx={{ width: "100% !important" }}>
                  <Avatar alt="Notification" src={item.src} />
                  <Stack
                    direction="column"
                    sx={{ ml: 2, width: "100% !important" }}
                  >
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#313131",
                        }}
                      >
                        {item.title}
                      </Typography>
                      {
                        <Alert
                          severity={item.status[1]}
                          sx={{ cursor: "pointer" }}
                        >
                          {item.status[0]}
                        </Alert>
                      }
                    </Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "11px",
                        color: "gray",
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
                          "&:hover": {
                            transform: "scale(1.05)",
                            color: "rgb(33, 43, 54)",
                            backgroundColor: "white",
                          },
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
                          "&:hover": {
                            transform: "scale(1.05)",
                            color: "white",
                            backgroundColor: "rgb(33, 43, 54)",
                          },
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
          ))
        ) : (
          <NoData />
        )}
      </Box>
    </Stack>
  );
}
