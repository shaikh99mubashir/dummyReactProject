import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    // Save signup data to local storage
    const signupData = {
      name,
      email,
      password
    };
    localStorage.setItem('signupData', JSON.stringify(signupData));

    

    const savedData = localStorage.getItem('signupData');
    if (savedData) {
      setMessage('Signup successful!');
      navigate('Login')
    } else {
      setMessage('Failed to save signup data');
    }

    // Clear form fields
    setName('');
    setEmail('');
    setPassword('');
  };


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-header">Sign Up</h2>
        {message && <p className="signup-message">{message}</p>}
        <input
          type="text"
          className="signup-input"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          className="signup-input"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <div>
            Already have an account?
            <Link
              to="/"
              style={{ textDecoration: "none", paddingLeft: 5 }}
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
