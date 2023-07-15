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
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import PropTypes from "prop-types";
import SettingsHeader from "./SettingsHeader";

export default function SettingsDrowdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const open = Boolean(anchorEl);

  const ITEM_HEIGHT = 48;
  
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
        <SettingsIcon />
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
        <SettingsHeader />
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
            <Tab iconPosition="end" label="General" {...allyProps(0)} />
            <Tab iconPosition="end" label="Style" {...allyProps(1)} />
            <Tab iconPosition="end" label="Documents" {...allyProps(2)} />
            <Tab iconPosition="end" label="Permissions" {...allyProps(2)} />
          </Tabs>
        </Stack>
        <Divider />

        <CustomTabPanel value={value} index={0}>
          0
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          1
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          2
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          3
        </CustomTabPanel>
        <Typography sx={{ textAlign: "center", fontSize: "10px" }}>
          Make your configurations
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
