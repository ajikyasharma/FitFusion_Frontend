import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
// import ExerciseDetail from './pages/ExerciseDetail';

import Home1 from './pages/Home1';
import History from './pages/History';
import Login from './pages/Login';
import Exercise from "./pages/Exercise";
import Cardio from "./components/Cardio";
import Resistance from "./components/Resistance";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import SingleExercise from "./components/SingleExercise"
import Test from './components/Test';
import Test1 from './components/Test1';

const App = () => (
    <Routes>
      <Route exact path="/" element={<Test />} />
      <Route exact path="/exercise/:id" element={<Test1 />} />

      <Route exact path="/profile" element={<Home1 />} />
      <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/history" element={<History/>} />
        <Route exact path="/history/:type/:id" element={<SingleExercise />} />
        <Route exact path="/exercise" element={<Exercise />} />
        <Route exact path="/exercise/cardio" element={<Cardio />} />
        <Route exact path="/exercise/resistance" element={<Resistance />} />
        <Route exact path="*" element={<Error />} />
    </Routes>
  
);

export default App;