import './App.css';
import SignIn from './components/sign/sign_in'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Box from '@mui/material/Box'
import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { Typography } from '@mui/material';

function App() {
  useEffect(() => {
    const isTokenExpired = (token) => {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp < currentTime;
    };
    const token = localStorage.getItem('token'); 
    const pathName = window.location.pathname
    if (token && isTokenExpired(token) && pathName!='/sign-in' ) {
      console.log('sign')
    }else{
      console.log('dashboard')


    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element = {<Box sx={{background:'#EFEBEC', height:'100vH'}}><Typography>Home</Typography></Box>} />
        <Route path='/sign-in' element = {<Box sx={{background:'#EFEBEC', height:'100vH'}}><SignIn/></Box>} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
