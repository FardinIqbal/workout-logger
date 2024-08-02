// frontend/src/components/ViewWorkouts.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * ViewWorkouts component
 * Fetches and displays a list of logged workouts
 */
const ViewWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/workouts');
        setWorkouts(response.data);
      } catch (error) {
        console.error('There was an error fetching the workouts!', error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h2>View Workouts</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>Type: {workout.workout_type}</p>
            <p>Exercise: {workout.exercise}</p>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weight: {workout.weight}</p>
            <p>Date: {workout.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewWorkouts;
