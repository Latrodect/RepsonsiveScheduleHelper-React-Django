import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../assets/images/wasp-background.png";
import SignInService from "../../services/sign_service/signService";
import AlertBox from "./signInAlertBox";
import Copyright from "./signInCopyright";
import LogoSegment from "./signInFormBanner";

const defaultTheme = createTheme();

export default function SignIn() {
    const [isCatchError, setIsCatchError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = {
            username: data.get("username"),
            password: data.get("password"),
        };
        SignInService.SignInPostRequest(body)
            .then((response) => {
                localStorage.setItem("token", response.data.access);
                localStorage.setItem("refreshToken", response.data.refresh);
                navigate("/dashboard", { state: { from: "/sign-in" } });
            })
            .catch((err) => {
                setIsCatchError(true);
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Stack direction="row">
                    <img
                        src={BackgroundImage}
                        style={{
                            width: "520px",
                            position: "absolute",
                            zIndex: 1,
                            marginTop: "120px",
                            marginLeft: "-500px",
                        }}
                        alt="Background Decoration"
                    />
                    <Box
                        sx={{
                            position: "fixed",
                            borderRadius: "10px",
                            padding: "50px",
                            width: "500px",
                            boxShadow: "rgb(204, 219, 232) 6px 6px 12px 0px inset, rgba(255, 255, 255, 0.5) -6px -6px 12px 2px inset",
                            mt: 25,
                        }}
                    >
                        <LogoSegment />
                        <Typography sx={{ color: "gray", mt: 3, fontSize: "13px" }} components="p">
                            If you not sing up yet, please click link for sign up.
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus />

                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                            <FormControlLabel sx={{ mt: 1 }} control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                            {isCatchError && <AlertBox />}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 1,
                                    mb: 2,
                                    background: "linear-gradient(#e66465, #9198e5)",
                                    transition: "0.5s",
                                    height: "55px",
                                    ":hover": {
                                        height: "75px",
                                        transition: "0.5s",
                                    },
                                }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link
                                        href="#"
                                        variant="body2"
                                        sx={{
                                            textDecoration: "None",
                                            color: "gray",
                                            transition: "0.5s",
                                            height: "55px",
                                            ":hover": {
                                                color: "black",
                                                transition: "0.5s",
                                            },
                                        }}
                                    >
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        href="#"
                                        variant="body2"
                                        sx={{
                                            textDecoration: "None",
                                            color: "gray",
                                            transition: "0.5s",
                                            height: "55px",
                                            ":hover": {
                                                color: "black",
                                                transition: "0.5s",
                                            },
                                        }}
                                    >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Box>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}
