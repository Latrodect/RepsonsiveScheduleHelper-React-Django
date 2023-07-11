import * as React from "react";
import {
  Menu,
  IconButton,
  Stack,
  Typography,
  Button,
  Tabs,
  Divider,
  Tab,
} from "@mui/material";
import NotificationIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import ProfileImage from "../../../assets/images/profile.jpeg";
import ProfileImageTwo from "../../../assets/images/profile_two.png";
import ProfileImageThree from "../../../assets/images/profile_three.jpeg";
import useLang from "../../../hooks/useLang";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArchiveIcon from "@mui/icons-material/Archive";
import NotificationHeader from "./NotificationHeader";
import NotificationAllMessages from "./NotificationAllMessages";
import PropTypes from "prop-types";

const notifications = [
  {
    src: ProfileImage,
    title: "New Product Dispatch",
    content: "Your latest product selled too much. Buy again from Amazon.ca",
    time: "1 day ago.",
    status: ["Read", "success"],
  },
  {
    src: ProfileImageTwo,
    title: "Leson Learnt",
    content:
      "Discover the secrets of successful product launches and expert go to market strategies. Master the art of product launches through with this step by step process.",
    time: "5 day ago.",
    status: ["Read", "success"],
  },
  {
    src: ProfileImageTwo,
    title: "Whether Message",
    content:
      "Whether you want to learn more about choosing a water treatment system, find out where you can get information about your tap water quality or discover what .",
    time: "2 week ago.",
    status: ["Read", "success"],
  },
  {
    src: ProfileImageThree,
    title: "Share Experience ",
    content:
      "Discover the secrets of successful product launches and expert go to market strategies. Master the art of product launches through with this step by step process.",
    time: "5 day ago.",
    status: ["Read", "success"],
  },
  {
    src: ProfileImage,
    title: "Amazon Privacy",
    content:
      "Whether you want to learn more about choosing a water treatment system, find out where you can get information about your tap water quality or discover what .",
    time: "2 week ago.",
    status: ["Read", "success"],
  },
];

const ITEM_HEIGHT = 48;

export default function NotificationDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const open = Boolean(anchorEl);

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
        <Stack 
        direction="row" 
        spacing={1} 
        sx={{ justifyContent: "center" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .MuiTab-root.Mui-selected": {
                color: '#ed6c02'
              }
            }}
            TabIndicatorProps={{
              style:{
                backgroundColor:"#ed6c02"
              }
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
        <Divider/>

        <CustomTabPanel value={value} index={0}>
          <NotificationAllMessages notifications={notifications} handleClose={handleClose}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          1
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          2
        </CustomTabPanel>

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

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`notification-tabpanel-${index}`}
      aria-laballedby={`notification-tab-${index}`}
      {...other}
    >
      {value === index && (children)}
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
    'aria-controls': `notification-tabpanel-${index}`,
  };
}
