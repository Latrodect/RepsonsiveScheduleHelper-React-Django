import * as React from "react";
import {
  MenuItem,
  Menu,
  IconButton,
  Avatar,
  Stack,
  Typography,
  Tooltip,
  Divider,
  Button,
  Alert,
} from "@mui/material";
import NotificationIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import ProfileImage from "../../../assets/images/profile.jpeg";
import ProfileImageTwo from "../../../assets/images/profile_two.png";
import ProfileImageThree from "../../../assets/images/profile_three.jpeg";
import useLang from "../../../hooks/useLang";
import SettingsIcon from "@mui/icons-material/Settings";

// import { makeStyles } from "@mui/styles";

const notifications = [
  {
    src: ProfileImage,
    title: "New Product Dispatch",
    content: "Your latest product selled too much. Buy again from Amazon.ca",
    time: "1 day ago.",
  },
  {
    src: ProfileImageTwo,
    title: "Leson Learnt",
    content:
      "Discover the secrets of successful product launches and expert go to market strategies. Master the art of product launches through with this step by step process.",
    time: "5 day ago.",
  },
  {
    src: ProfileImageTwo,
    title: "Whether Message",
    content:
      "Whether you want to learn more about choosing a water treatment system, find out where you can get information about your tap water quality or discover what .",
    time: "2 week ago.",
  },
  {
    src: ProfileImageThree,
    title: "Share Experience ",
    content:
      "Discover the secrets of successful product launches and expert go to market strategies. Master the art of product launches through with this step by step process.",
    time: "5 day ago.",
  },
  {
    src: ProfileImage,
    title: "Amazon Privacy",
    content:
      "Whether you want to learn more about choosing a water treatment system, find out where you can get information about your tap water quality or discover what .",
    time: "2 week ago.",
  },
];

const ITEM_HEIGHT = 48;

// const useStyles = makeStyles(() => ({
//   drawer: {
//     height: "100%",
//     overflowY: "scroll",
//     scrollbarWidth: "thin",
//     scrollbarColor: "rgba(162, 92, 12, 0.2) rgba(12, 64, 22, 0.1)",
//   },
// }));

export default function NotificationDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { t } = useLang();
  //   const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <NotificationIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 42.5,
            width: "400px",
          },
        }}
      >
        <Stack direction="column">
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                ml: 2,
                mt: 1,
                color: "#323232",
              }}
              variant="h4"
            >
              {t("notification.title")}
            </Typography>
            <SettingsIcon sx={{ mr: 2 }} />
          </Stack>
          <Divider sx={{ mt: 2 }} />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "center", mt: 2, mb: 2 }}
        >
          <Alert severity="success" sx={{ cursor: "pointer" }}>
            All
          </Alert>
          <Alert severity="warning" sx={{ cursor: "pointer" }}>
            Unread
          </Alert>
          <Alert severity="info" sx={{ cursor: "pointer" }}>
            Archive
          </Alert>
        </Stack>

        <Divider sx={{ mt: 2 }} />
        {notifications.map((item) => (
          <MenuItem
            key={item.title}
            selected={item === "Pyxis"}
            onClick={handleClose}
            sx={{
              height: "120px",
            }}
          >
            <Stack direction="row">
              <Avatar alt="Notification" src={item.src} />
              <Stack direction="column" sx={{ ml: 2 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "16px", fontWeight: "600", color: "#313131" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "11px",
                    color: "gray",
                    width: "300px",
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
                      boxShadow: "none",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(33, 43, 54)",
                      height: "30px",
                      fontSize: "13px",
                    }}
                  >
                    Read
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
                    Decline
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </MenuItem>
        ))}
        <Divider sx={{ mt: 2 }} />
        <Button sx={{ width: "100%", color: "#313131", fontSize: "12px" }}>
          See More...
        </Button>
        <Typography sx={{ textAlign: "center", fontSize: "10px" }}>
          Check your messages.
        </Typography>
      </Menu>
    </div>
  );
}
