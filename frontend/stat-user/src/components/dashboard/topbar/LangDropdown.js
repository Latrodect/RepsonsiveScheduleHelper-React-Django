import * as React from "react";
import useLang from "../../../hooks/useLang";
import {
  MenuItem,
  Box,
  FormControl,
  Select,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";

export default function LangDropdown() {
  const { langHub, changeLang, currentLang } = useLang();

  const handleChange = (event) => {
    changeLang(event.target.value);
    localStorage.setItem("lang", currentLang);
  };

  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl fullwidth>
        <Select
          value={currentLang}
          label="Lang"
          onChange={handleChange}
          sx={{
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
        >
          {langHub.map((item) => {
            return (
              <MenuItem value={item.label}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Avatar alt="en/tr" src={item.icon} />
                  <Typography
                    variant="h5"
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "16px",
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Stack>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
