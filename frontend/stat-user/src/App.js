import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/sign/signInForm'
import Box from '@mui/material/Box'
import BackgroundImage from './assets/images/wasp-background.png'
import TokenValidation from './components/token/tokenValidation'
import { PrimaryMenuItems } from './utils/utils';

function App() {
  return (
    <Router>
      <Routes>
        {PrimaryMenuItems.map((item) => {
          return <Route path={item.path} element={
            <TokenValidation>
              <Box
                component="main"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  flexGrow: 1,
                  height: '100vh',
                  overflow: 'auto',
                }}>
                {item.component}
              </Box>
            </TokenValidation>} />
        })}
        <Route
          path='/sign-in'
          element={
            <TokenValidation>
              <Box
                sx={{
                  background: '#EFEBEC',
                  height: '100vH'
                }}>
                <img
                  src={BackgroundImage}
                  style={{
                    width: "520px",
                    position: 'absolute',
                    zIndex: 1,
                    marginTop: '120px',
                    marginLeft: '300px'
                  }}
                  alt="Background Decoration" />
                <SignIn />
              </Box>
            </TokenValidation>
          }>
        </Route>
        <Route
          path='/'
          element={
            <Navigate to="/dashboard" replace />
          } />
      </Routes>
    </Router>
  );
}

export default App;
