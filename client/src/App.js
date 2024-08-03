// client/src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import LogWorkout from './components/LogWorkout';
import ViewWorkouts from './components/ViewWorkouts';

/**
 * App component
 * Main component that includes Navbar and routes
 */
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/view-workouts" element={<ViewWorkouts />} />
      </Routes>
    </div>
  );
};

export default App;
