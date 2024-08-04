// client/src/components/LogWorkout.js
import React, { useState } from 'react';
import axios from 'axios';

/**
 * LogWorkout component
 * Allows users to log their workouts
 */
const LogWorkout = () => {
  const [workoutType, setWorkoutType] = useState('');
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/workouts', {  // Changed port to 5000
        workout_type: workoutType,
        exercise,
        sets,
        reps,
        weight,
        date,
      });
      alert('Workout logged successfully!');
    } catch (error) {
      console.error('There was an error logging the workout!', error);
    }
  };

  return (
      <div>
        <h2>Log Workout</h2>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
              placeholder="Workout Type"
              required
          />
          <input
              type="text"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              placeholder="Exercise"
              required
          />
          <input
              type="number"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              placeholder="Sets"
              required
          />
          <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="Reps"
              required
          />
          <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight"
              required
          />
          <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
              required
          />
          <button type="submit">Log Workout</button>
        </form>
      </div>
  );
};

export default LogWorkout;
