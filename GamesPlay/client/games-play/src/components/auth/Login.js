import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import { login } from "../../services/userService";

export const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate("/");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const loginHandler = (e) => {
    e.preventDefault();

    if (data.email.length === 0 || data.password.length === 0) {
      return alert("All fields are required!");
    }

    login(data).then((result) => {
      handleLogin(result);
      navigate("/", { replace: true });
    });
  };

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={loginHandler}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Sokka@gmail.com"
            value={data.email}
            onChange={onChangeHandler}
          />
          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
          />
          <input type="submit" className="btn submit" defaultValue="Login" />
          <p className="field">
            <span>
              If you don't have profile click <Link to="/register">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
