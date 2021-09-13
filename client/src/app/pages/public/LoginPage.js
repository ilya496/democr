import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions/userActions";
import bgImage from "../../assets/images/container-bg.png";
import "../../styles/LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();

    const userToLogin = {
      email,
      password,
    };

    dispatch(login(userToLogin));

    setEmail("");
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
        !user?.loginFailure?.errorStatus ||
        user?.loginFailure?.errorStatus === 401 ? (
          <div className="auth-content">
            <form onSubmit={handleLogin}>
              <p className="greeting">Welcome back</p>
              <p className="title">Login to your account</p>

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

              <label htmlFor="password">
                <p>Password</p>
              </label>
              <div className="test">
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

              <div className="remember-pass">
                <a href="/" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>

              <div className="buttons">
                <button type="submit" className="btn">
                  Login now
                </button>
                {/* <button className="btn google-btn" type="submit">
                  <i className="fab fa-google"></i> Or sign-in with google
                </button> */}
              </div>
            </form>

            <div className="register-acc">
              Don't have an account?
              <Link to="/signup"> Join free today</Link>
            </div>
          </div>
        ) : (
          <div className="error">
            <h1>{user.loginFailure.errorStatus} Error</h1>
            <h4>{user.loginFailure.errorMessage}</h4>
            <p>Reload to try again</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
