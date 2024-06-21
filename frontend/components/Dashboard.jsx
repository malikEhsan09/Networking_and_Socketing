import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  ExitToApp,
  Dashboard as DashboardIcon,
  Search,
} from "@mui/icons-material";
import { io } from "socket.io-client";
import "../src/App.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // State to store data from the server
  const [networkBehavior, setNetworkBehavior] = useState("Loading...");
  const [mouseBehavior, setMouseBehavior] = useState("Loading...");
  const [keyboardBehavior, setKeyboardBehavior] = useState("Loading...");

  useEffect(() => {
    // Connect to the Socket.IO server through your backend
    const socket = io("http://localhost:5000");

    // Listen for data from the server
    socket.on("networkBehavior", (data) => {
      setNetworkBehavior(data);
    });

    socket.on("mouseBehavior", (data) => {
      setMouseBehavior(data);
    });

    socket.on("keyboardBehavior", (data) => {
      setKeyboardBehavior(data);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4ZLk9ueEFRoypiGMwQoUPtpWcrkzUhlFiqcdGO0EctJinNrjIbsbOlRh-Tm0FNQmI9Q&usqp=CAU"
            className="logo-img"
            alt="Logo"
          />
          <div className="logo-text">Socketing</div>
        </div>
        <nav className="nav">
          <button className="nav-item" onClick={() => navigate("/")}>
            <DashboardIcon fontSize="large" style={{ marginRight: "10px" }} />
            Dashboard
          </button>
          <button className="nav-item" onClick={() => navigate("/")}>
            <Home fontSize="large" style={{ marginRight: "10px" }} />
            Analytics
          </button>
          <button className="nav-item logout" onClick={handleLogout}>
            <ExitToApp fontSize="large" style={{ marginRight: "10px" }} />
            Logout
          </button>
        </nav>
      </aside>
      <div className="main-content">
        <header className="header">
          <h1 className="header-title">Analytics</h1>
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search anything here"
            />
          </div>
          <div className="user-info">
            <span className="username">Justin Fegundez</span>
            <img
              className="user-avatar"
              src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
              alt="User Avatar"
            />
          </div>
        </header>
        <main className="content">
          <div className="box-container">
            <div className="box">{networkBehavior}</div>
            <div className="box">{mouseBehavior}</div>
            <div className="box">{keyboardBehavior}</div>
          </div>
          <div className="control-buttons">
            <button className="control-button">Start</button>
            <button className="control-button">Stop</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
