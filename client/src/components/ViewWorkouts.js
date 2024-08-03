// Import necessary dependencies
import React, { useEffect, useState } from 'react'; // Import React hooks
import axios from 'axios'; // Import axios for API requests

/**
 * ViewWorkouts component
 * Fetches and displays logged workouts
 */
const ViewWorkouts = () => {
  // Initialize state to store fetched workouts
  const [workouts, setWorkouts] = useState([]);

  // Fetch workouts on component mount
  useEffect(() => {
    // Define an async function to fetch workouts
    const fetchWorkouts = async () => {
      try {
        // Send GET request to API endpoint
        const response = await axios.get('http://127.0.0.1:5000/api/view-workouts');
        // Update state with fetched workouts
        setWorkouts(response.data);
      } catch (error) {
        // Log any errors that occur during fetching
        console.error('There was an error fetching the workouts!', error);
      }
    };

    // Call the fetchWorkouts function
    fetchWorkouts();
  }, []); // Empty dependency array ensures effect runs only once on mount

  // Render component
  return (
    <div>
      <h2>View Workouts</h2>
      {workouts.length > 0 ? (
        // Display workouts in an unordered list
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>
              {/* Display workout details */}
              <strong>{workout.workout_type}</strong>: {workout.exercise}, Sets: {workout.sets}, Reps: {workout.reps}, Weight: {workout.weight}kg, Date: {workout.date}
            </li>
          ))}
        </ul>
      ) : (
        // Display message if no workouts are logged
        <p>No workouts logged yet.</p>
      )}
    </div>
  );
};

// Export the ViewWorkouts component
export default ViewWorkouts;
