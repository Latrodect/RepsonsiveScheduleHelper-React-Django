import { useTranslation } from "react-i18next";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  ListSubheader,
  Stack,
  Typography,
  CssBaseline,
  IconButton,
  List,
  Box,
  Toolbar,
  Avatar,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import Copyright from "../../sign/SignInCopyright";
import StaticMenu from "./StaticMenuList";
import TopBar from "../topbar/TopBar";

const drawerWidth = 300;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function SideBar({ children }) {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar open={open} />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ ...(!open && { display: "none" }) }}
              >
                <img
                  src={"/images/wasp.png"}
                  alt="Logo"
                  style={{ width: "40px" }}
                />
              </Stack>
              <ChevronLeftIcon
                onClick={() => setOpen(!open)}
                sx={{
                  cursor: "pointer",
                  ...(!open && { display: "none" }),
                }}
              />
            </Stack>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              sx={{
                ...(open && { display: "none" }),
              }}
            >
              <img
                src={"/images/wasp.png"}
                alt="Logo"
                style={{ width: "40px" }}
              />
              <ChevronRightIcon
                onClick={() => setOpen(!open)}
                sx={{
                  ...(open && { display: "none" }),
                  position: "absolute",
                  marginLeft: "60px !important",
                }}
              />
            </IconButton>
          </Toolbar>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              alt="profile"
              sx={{ height: "100px", width: "100px", ...(!open && { display: "none" }), }}
              src={"/images/profile.jpeg"}
            />
            <Stack direction="column" spacing={0} justifyContent="center" alignItems="center">
              <Typography sx={{color: "rgb(33, 43, 54)", fontWeight:600, fontSize:"16px", ...(!open && { display: "none" }),}}>Bahadir Nural</Typography>
              <Typography sx={{ color:"gray", fontWeight:600, fontSize:"13px", ...(!open && { display: "none" }),}}>bahadir.nural@outlook.com</Typography>
            </Stack>
          </Stack>
          <List component="nav" sx={{ height: "91vh" }}>
            <ListSubheader
              sx={{
                textAlign: "left",
                color: "rgb(33, 43, 54)",
                fontWeight:600,
                mt:6,
                ...(!open && { display: "none" }),
              }}
            >
              {t("sidebar.description")}
            </ListSubheader>
            <StaticMenu open={open} />
          </List>

          <div
            style={{ marginBottom: "5px", ...(!open && { display: "none" }) }}
          >
            <Copyright />
          </div>
        </Drawer>
        {children}
      </Box>
    </ThemeProvider>
  );
}
