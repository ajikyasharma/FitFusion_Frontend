import React from 'react';
import { Box } from '@mui/material';

// import './App.css';
import Navbar from './Navbar';
import Home from '../pages/Home';
import ExerciseDetail from '../pages/ExerciseDetail';
import Footer from './Footer';
// import ExerciseDetail from './pages/ExerciseDetail';



const Test1 = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
             <ExerciseDetail />
    <Footer />
  </Box>
);

export default Test1;