import * as React from "react";
import {
  Menu,
  IconButton,
  Stack,
  Typography,
  Button,
  Tabs,
  Badge,
  Divider,
  Tab,
} from "@mui/material";
import NotificationIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArchiveIcon from "@mui/icons-material/Archive";
import NotificationHeader from "./NotificationHeader";
import NotificationMessages from "./NotificationMessages";
import PropTypes from "prop-types";
import NotificationsService from "../../../services/NotificationsService/NotificationsService";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 48;

let allMessages = [];
let unreadedMessages = [];
let archveMessages = [];
let unreadedMessageCount = 0;

NotificationsService.NotificationsGetRequest(`status=all`).then((response) => {
  allMessages = response.data;
});
NotificationsService.NotificationsGetRequest(`status=unread`).then(
  (response) => {
    unreadedMessages = response.data;
    unreadedMessageCount = unreadedMessages.length;
  }
);

export default function NotificationDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Badge badgeContent={unreadedMessageCount} color="secondary">
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
              width: "425px",
            },
          }}
        >
          <NotificationHeader />
          <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .MuiTab-root.Mui-selected": {
                  color: "#ed6c02",
                },
              }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#ed6c02",
                },
              }}
              aria-label="tab example"
            >
              <Tab
                icon={<NotificationsActiveIcon />}
                iconPosition="end"
                label="All"
                {...allyProps(0)}
              />
              <Tab
                icon={<MarkAsUnreadIcon />}
                iconPosition="end"
                label="Unread"
                {...allyProps(1)}
              />
              <Tab
                icon={<ArchiveIcon />}
                iconPosition="end"
                label="Archive"
                {...allyProps(2)}
              />
            </Tabs>
          </Stack>
          <Divider />

          <CustomTabPanel value={value} index={0}>
            <NotificationMessages
              notifications={allMessages}
              handleClose={handleClose}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <NotificationMessages
              notifications={unreadedMessages}
              handleClose={handleClose}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <NotificationMessages
              notifications={unreadedMessages}
              handleClose={handleClose}
            />
          </CustomTabPanel>

          <Button sx={{ width: "100%", color: "#313131", fontSize: "12px" }} onClick={()=>(navigate("/notifications"))}>
            See More...
          </Button>
          <Typography sx={{ textAlign: "center", fontSize: "10px" }}>
            Check your messages.
          </Typography>
        </Menu>
      </div>
    </Badge>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`notification-tabpanel-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `notification-tab-${index}`,
    "aria-controls": `notification-tabpanel-${index}`,
  };
}
