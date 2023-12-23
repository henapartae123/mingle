import { auth } from "../fb";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/browse");
    } catch (err) {
      console.log(err.message);
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-Wrapper">
        <span className="logo">Mingle</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <div className="form-wrapp">
            <label htmlFor="email">Email</label>
            <input type="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" required />
          </div>

          <span className="login-btn">
            <button className="btn">Login</button>
          </span>
          {err && <span className="err">User not found</span>}
        </form>
        <span className="bottom-text">
          Don't have an account?
          <Link to="/register" className="login-link">
            Register
          </Link>
        </span>

        <span className="bottom-text">Test Email: johndoe@gmail.com</span>
        <span className="bottom-text">Test Password: 123456789</span>
      </div>
    </div>
  );
};

export default Login;
