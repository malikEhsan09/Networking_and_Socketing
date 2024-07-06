import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/App.css"; // Ensure the CSS file is imported

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Get stored credentials from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Validate credentials
    if (email === storedEmail && password === storedPassword) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin} className="form">
        <div className="form-header">
          <div className="form-title">Login to Your Account</div>
        </div>
        <div className="form-body">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="button">
            Login
          </button>
        </div>
        <div className="form-footer">
          <span className="form-footer-text">Do not have an account?</span>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="link-button"
            style={{ textDecoration: "none" }}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
