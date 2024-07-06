import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/App.css"; // Ensure the CSS file is imported

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Store credentials in localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSignup} className="form">
        <div className="form-header">
          <div className="form-title">Create New Account</div>
          <div className="form-subtitle">
            Please register by filling in your personal data
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="button">
            Signup
          </button>
        </div>
        <div className="form-footer">
          <span className="form-footer-text">Already have an account?</span>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="link-button"
            style={{ textDecoration: "none" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
