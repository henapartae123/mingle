import { auth } from "./fb";
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
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-Wrapper">
        <span className="logo">Mingle</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <span className="login-btn">
            <button className="btn">Login</button>
          </span>
          {err && <span>Oops Error</span>}
        </form>
        <span className="bottom-text">
          Already have an account?
          <Link to="/register" className="login-link">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
