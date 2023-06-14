import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate,  } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate= useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve signup data from local storage
    const signupData = JSON.parse(localStorage.getItem("signupData"));
    console.log('======>',signupData);

    if (signupData && signupData.email === email && signupData.password === password) {
      // Clear form fields and error state
      setEmail("");
      setPassword("");
      setError("");
      navigate('/Home')

    } else {
      setError("Invalid email or password");
    }
    
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-header">Login</h2>
        {error && <p className="login-error">{error}</p>}
        <input
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="login-signup-link">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;