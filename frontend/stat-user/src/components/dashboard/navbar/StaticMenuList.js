import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  List,
  Collapse,
  Stack,
} from "@mui/material";
import * as React from "react";
import { PrimaryMenuItems } from "../../../utils/utils";
import useLang from "../../../hooks/useLang";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function StaticMenu(open) {
  const { t, currentLang, changeLang } = useLang();
  const navigate = useNavigate();
  const [active, setActive] = useState("sidebar.dashboard");
  const [nestedOpen, setNestedOpen] = React.useState(false);

  const handleNestedClick = () => {
    setNestedOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      {PrimaryMenuItems.map((item) => (
        <Stack direction="column">
          <ListItemButton
            sx={{
              height: "55px",
              width: "90%",
              textAlign: "left",
              ml: 2,
              borderRadius: "10px",
              paddingRight: 5,
              ...(active === item.title
                ? { backgroundColor: "rgba(173, 53, 212, 0.18)" }
                : {}),
            }}
            onClick={() => {
              if (item.children) {
                handleNestedClick();
              } else {
                setActive(item.title);
                navigate(item.path);
              }
            }}
          >
            <ListItemIcon
              sx={{
                color: "#313131 ",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {item.path === "/products" ? (
              <Badge badgeContent={12} color="secondary">
                <ListItemText
                  primary={t(item.title)}
                  primaryTypographyProps={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block",
                    color: "rgb(99,115,129)",
                    fontSize: "Public Sans', sans-serif",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                />
              </Badge>
            ) : item.children ? (
              <>
                <ListItemText
                  primary={t(item.title)}
                  primaryTypographyProps={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block",
                    color: "rgb(99,115,129)",
                    fontSize: "Public Sans', sans-serif",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                />
                {!nestedOpen ? (
                  <ListItemIcon
                    sx={{
                      color: "#313131 ",
                      textAlign: "right",
                      justifyContent: "right",
                    }}
                  >
                    <ExpandMoreIcon />
                  </ListItemIcon>
                ) : (
                  <ListItemIcon
                    sx={{
                      color: "#313131 ",
                      textAlign: "right",
                      justifyContent: "right",
                    }}
                  >
                    <ExpandLessIcon />
                  </ListItemIcon>
                )}
              </>
            ) : (
              <ListItemText
                primary={t(item.title)}
                primaryTypographyProps={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "block",
                  color: "rgb(99,115,129)",
                  fontSize: "Public Sans', sans-serif",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              />
            )}
          </ListItemButton>

          {item.children &&
            item.children.map((childItem) => (
              <Collapse in={nestedOpen} timeout="auto">
                <List component="div" disablePadding unmountOnExit>
                  <ListItemButton
                    sx={{
                      height: "55px",
                      width: "90%",
                      textAlign: "left",
                      ml: 2,
                      borderRadius: "10px",
                      paddingRight: 5,
                      ...(active === childItem.title
                        ? { backgroundColor: "rgba(173, 53, 212, 0.18)" }
                        : {}),
                    }}
                    onClick={() => {
                      setActive(childItem.title);
                      navigate(childItem.path);
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "#313131 ",
                      }}
                    >
                      <NavigateNextIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(childItem.title)}
                      primaryTypographyProps={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        display: "block",
                        color: "rgb(99,115,129)",
                        fontSize: "Public Sans', sans-serif",
                        fontWeight: "600",
                        textTransform: "capitalize",
                      }}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            ))}
        </Stack>
      ))}
    </div>
  );
}
