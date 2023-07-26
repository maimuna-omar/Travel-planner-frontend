import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:9292/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
    const data = await response.json();
    if (data.errors) {
      setMessage(data.errors);
    } else {
      setMessage('Logged in successfully!');
      setFormData({
        email: '',
        password: ''
      });
  
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('userId', Number(data.id));
  
      onLogin(data);
    }
  }
  

  return (
    <div className="container">
      <h2 className="heading">LOGIN</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="input"
        />
        <button type="submit" className="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;