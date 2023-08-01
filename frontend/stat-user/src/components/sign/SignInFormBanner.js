import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function LogoSegment() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <img
        src={"/images/wasp.png"}
        width="60"
        alt="Wasp Logo"
        className="wasp-logo"
      />
      <Typography component="h1" variant="h5" sx={{ ml: 2, mt: 2 }}>
        Sign in to Wasp
      </Typography>
    </Box>
  );
}
