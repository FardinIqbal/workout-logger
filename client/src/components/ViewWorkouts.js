// client/src/components/ViewWorkouts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * ViewWorkouts component
 * Fetches and displays logged workouts
 */
const ViewWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/workouts');
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
        {workouts.length > 0 ? (
            <ul>
              {workouts.map((workout, index) => (
                  <li key={index}>
                    <strong>{workout.workout_type}</strong>: {workout.exercise}, Sets: {workout.sets}, Reps: {workout.reps}, Weight: {workout.weight}kg, Date: {workout.date}
                  </li>
              ))}
            </ul>
        ) : (
            <p>No workouts logged yet.</p>
        )}
      </div>
  );
};

export default ViewWorkouts;
