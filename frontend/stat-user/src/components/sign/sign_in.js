import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WaspLogo from '../../assets/images/wasp.png'
import SignInService from '../../services/sign_service/sign_service'
import { BrowserRouter as Navigate  } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Wasp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function LogoSegment(){
    return(
        <Box sx={{
            display:'flex',
            width:'100%'
        }}>
            <img src={WaspLogo} width='60' alt='Wasp Logo' className='wasp-logo'/>
            <Typography component='h1' variant='h5' sx={{ml:2, mt:2}}>
                Sign in to Wasp
            </Typography>
        </Box>
    )
}

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
        username: data.get('username'),
        password: data.get('password'),
      }
      SignInService.SignInPostRequest(body).then(response=>{
        localStorage.setItem('token', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        window.location.href = '/dashboard';
        
      })
      return <Navigate to="/dashboard" replace />;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            position:'absolute',
            background:'white',
            display:'block',
            borderRadius:'10px',
            padding:'50px',
            width:'500px',
            boxShadow:'rgb(204, 219, 232) 6px 6px 12px 0px inset, rgba(255, 255, 255, 0.5) -6px -6px 12px 2px inset',
            mt:25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <LogoSegment/>
          <Typography sx={{color:'gray', mt:3, fontSize:'13px'}} components='p'>
              If you not sing up yet, please click link for sign up.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
           
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: 'linear-gradient(#e66465, #9198e5)', transition:'0.5s', height:'55px', ':hover': {
                height:'75px',
                transition:'0.5s'
              } }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{textDecoration:'None', color:'gray', transition:'0.5s', height:'55px', ':hover': {
                color:'black',
                transition:'0.5s'
              } }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx={{textDecoration:'None', color:'gray', transition:'0.5s', height:'55px', ':hover': {
                color:'black',
                transition:'0.5s'
              } }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}