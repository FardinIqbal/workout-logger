// frontend/src/App.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/log-workout" component={LogWorkout} />
        <Route path="/view-workouts" component={ViewWorkouts} />
      </Switch>
    </div>
  );
};

export default App;
