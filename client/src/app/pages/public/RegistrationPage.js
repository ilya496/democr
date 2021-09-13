import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { registrate } from "../../actions/userActions";
import bgImage from "../../assets/images/container-bg.png";
import "../../styles/LoginPage.css";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleRegistrate = (e) => {
    e.preventDefault();

    const userToRegistrate = {
      email,
      username,
      password,
    };

    dispatch(registrate(userToRegistrate));

    setEmail("");
    setUsername("");
    setPassword("");
    history.replace("/");
  };

  return (
    <div className="login-container">
      <div className="bg-container">
        <img src={bgImage} alt="Cool" />
      </div>
      <div className="auth-container">
        {!user ||
        !user.signupFailure ||
        user.signupFailure.errorStatus === 401 ? (
          <div className="auth-content">
            <form onSubmit={handleRegistrate} className="form" id="form">
              <p className="greeting">Hey, you can</p>
              <p className="title">Sign upto your account</p>

              <label htmlFor="email">
                <p>Email</p>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                value={email}
                className="input"
                placeholder="Email"
                required
              />

              <label htmlFor="username">
                <p>Username</p>
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                value={username}
                className="input"
                placeholder="Username"
                required
              />

              <label htmlFor="password">
                <p>Password</p>
              </label>
              <div className="test mb-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  className="input"
                  placeholder="Password"
                  required
                />
                <i
                  className={showPassword ? "far fa-eye-slash" : "far fa-eye"}
                  id="eye"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>

              <div className="buttons">
                <button type="submit" className="btn">
                  Sign up
                </button>
              </div>
            </form>

            <div className="register-acc">
              Or login to account using
              <Link to="/login">Login</Link>
            </div>
          </div>
        ) : (
          <div className="error">
            <h1>{user.signupFailure.errorStatus} Error</h1>
            <h4>{user.signupFailure.errorMessage}</h4>
            {user.signupFailure.errors.map((error, key) => (
              <>
                <b>
                  <p key={key}>{error.msg}</p>
                </b>
                <p key={key}>Password: {error.value}</p>
              </>
            ))}
            <p>Reload to try again</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;
