import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { PrimaryMenuItems } from '../../../utils/utils'
import { useNavigate } from "react-router-dom"
import Badge from '@mui/material/Badge';



export default function StaticMenu(open) {
  const navigate = useNavigate()

  return (
    <>
      {
        PrimaryMenuItems.map((item) => {
          return <ListItemButton
            sx={{
              height: "65px",
              width: "90%",
              textAlign: "left",
              ml: 2,
              borderRadius: "10px",
              paddingLeft: 5,
              paddingRight: 5
            }}
            onClick={() => (navigate(item.path))}>
            <ListItemIcon
              sx={{
                color: "#313131",
                ml: 2
              }}>
              {item.icon}
            </ListItemIcon>
            {item.path == '/products' ? (<Badge
              badgeContent={12}
              color="secondary">
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "block",
                  color: "rgb(99,115,129)",
                  fontSize: "Public Sans', sans-serif",
                  fontWeight: "600",
                  textTransform: "capitalize"
                }} />
            </Badge>
            ) : (
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "block",
                  color: "rgb(99,115,129)",
                  fontSize: "Public Sans', sans-serif",
                  fontWeight: "600",
                  textTransform: "capitalize"
                }} />
            )}
          </ListItemButton>
        })
      }
    </>
  )
}