import {
  Avatar,
  Stack,
  Typography,
  Badge,
  Box,
  Toolbar,
  IconButton,
} from "@mui/material";
import NotificationIcon from "@mui/icons-material/Notifications";
import ProfileImage from "../../../assets/images/profile.jpeg";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LangDropdown from "./LangDropdown";

export default function TopBar({ open }) {
  return (
    <Box
      position="absolute"
      sx={{
        width: "100%",
        height: "100%",
      }}
      open={open}
    >
      <Toolbar sx={{ pr: "24px" }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            flexGrow: 1,
            marginLeft: 40,
            transition: "0.4s",
            ...(!open && { marginLeft: 12 }),
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{
              fontWeight: "600",
              marginTop: 0.5,
            }}
          >
            Wasp
          </Typography>
          <IconButton color="inherit">
            <ThumbUpIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          <LangDropdown />
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationIcon />
            </Badge>
          </IconButton>
          <Avatar alt="profile" src={ProfileImage} />
        </Stack>
      </Toolbar>
    </Box>
  );
}
