import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets';

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="Logo" className='logo' />
      <form className="login-form">
        <h2>{currentState}</h2>
        {/* Conditionally render username input for Sign Up */}
        {currentState === "Sign Up" && (
          <input 
            type="text" 
            placeholder="Username" 
            className="form-input" 
            required 
          />
        )}
        <input 
          type="email" 
          placeholder="Email Address" 
          className="form-input" 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="form-input" 
          required 
        />
        <button type="submit">{currentState}</button>
        
        {/* Terms and conditions */}
        {currentState === "Sign Up" && (
          <div className="login-term">
            <input 
              type="checkbox" 
              id="terms" 
              required 
            />
            <label htmlFor="terms">
              Agree to the terms of use & privacy policy.
            </label>
          </div>
        )}

        {/* Toggle between Login and Sign Up */}
        <div className="login-forgot">
          {currentState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span 
                onClick={() => setCurrentState("Login")} 
                style={{ cursor: "pointer", color: "blue" }}
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="login-toggle">
              Don't have an account?{" "}
              <span 
                onClick={() => setCurrentState("Sign Up")} 
                style={{ cursor: "pointer", color: "blue" }}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
