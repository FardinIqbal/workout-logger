// client/src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navbar component
 * Provides navigation links to various routes
 */
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/log-workout">Log Workout</Link></li>
        <li><Link to="/view-workouts">View Workouts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
