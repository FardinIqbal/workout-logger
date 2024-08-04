// frontend/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

/**
 * Register component
 * Allows users to register an account
 */
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/register', {
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation
        }
      });
      alert('Registration successful!');
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };

  return (
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
          />
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
          />
          <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="Confirm Password"
              required
          />
          <button type="submit">Register</button>
        </form>
      </div>
  );
};

export default Register;
