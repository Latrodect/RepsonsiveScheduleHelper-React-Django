import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";
import * as React from "react";
import { PrimaryMenuItems } from "../../../utils/utils";
import useLang from "../../../hooks/useLang";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StaticMenu(open) {
  const { t, currentLang, changeLang } = useLang();
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");

  return (
    <>
      {PrimaryMenuItems.map((item) => {
        return (
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
              setActive(item.title);
              navigate(item.path);
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
        );
      })}
    </>
  );
}
