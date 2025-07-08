import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful');
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Login to Luvandra</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" required onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
