// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

/**
 * Login component
 * Allows users to log in to their account
 */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/login', {
        email,
        password
      });
      alert('Login successful!');
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
      <div>
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
      </div>
  );
};

export default Login;
