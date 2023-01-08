import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import { register } from "../../services/userService";

export const Register = () => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    rePass: "",
  });

  const onChangeHandler = (e) => {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const registerHandler = (e) => {
    e.preventDefault();

    const { email, password, rePass } = data;

    if (email.length === 0 || password.length === 0 || rePass.length === 0) {
      return alert("All fields are required!");
    }

    if (password !== rePass) {
      return alert("Passwords don't match!");
    }

    register({ email, password }).then((result) => {
      handleLogin(result);
      navigate("/");
    });
  };

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={registerHandler}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Register</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
            value={data.email}
            onChange={onChangeHandler}
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            value={data.password}
            onChange={onChangeHandler}
          />
          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="rePass"
            id="confirm-password"
            value={data.rePass}
            onChange={onChangeHandler}
          />
          <input className="btn submit" type="submit" defaultValue="Register" />
          <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
