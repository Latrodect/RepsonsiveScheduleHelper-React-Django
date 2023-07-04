import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import SignIn from './components/sign/signInForm'
import Dashboard from './components/dashboard/navbar/sideBar';
import Box from '@mui/material/Box'
import BackgroundImage from './assets/images/wasp-background.png'
import TokenValidation from './components/token/tokenValidation'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={
          <TokenValidation>
            <Box sx={{
              background: '#EFEBEC',
              height: '100vH'
            }}>
              <Dashboard/>
            </Box>
          </TokenValidation>} />
        <Route path='/sign-in' element={
          <TokenValidation>
            <Box
              sx={{
                background: '#EFEBEC',
                height: '100vH'
              }}>
              <img
                src={BackgroundImage}
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  marginTop: '120px',
                  marginLeft: '350px',
                }}
                alt='Background image of banner' />
              <SignIn />
            </Box>
          </TokenValidation>} />
        <Route
          path="/"
          element={
            <Navigate to="/dashboard" replace />
          } />
      </Routes>
    </Router>
  );
}

export default App;
