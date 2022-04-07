import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../utils/loginUser";

const Login = () => {
  const { authState, dispatchAuth } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const clickHandler = (e) => {
    e.preventDefault();
    loginUser({ email, password }, authState, dispatchAuth, navigate);
  };
  return (
    <form className="auth-wrapper card-shadow p-24">
      <h2 className="h2">Login</h2>

      <label htmlFor="username">
        <h4 className="mt-16">Email:</h4>
        <input
          className="input input-primary"
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
        />
      </label>
      <h4 className="mt-16">Password:</h4>
      <label>
        <input
          className="input input-primary"
          id="user-password"
          name="password"
          type="password"
          value={password}
          onChange={changeHandler}
        />
      </label>
      <button className="btn btn-primary mt-16" onClick={clickHandler}>
        {" "}
        Login
      </button>
      <Link to="/" className="link-secondary center-text mt-1">
        Create a new account {">"}
      </Link>
    </form>
  );
};

export default Login;
