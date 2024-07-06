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
import { ThreeDCardDemo } from "@/AceertinitySnippets/Cards";

const Dashboard = () => {
  const navigate = useNavigate();

  const [networkBehavior, setNetworkBehavior] = useState(null);
  const [mouseBehavior, setMouseBehavior] = useState(null);
  const [keyboardBehavior, setKeyboardBehavior] = useState([]);
  const [booleanMessage, setBooleanMessage] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:8080");

    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });

    socket.on("networkBehavior", (data) => {
      console.log("Network behavior data received:", data);
      setNetworkBehavior(data);
    });

    socket.on("mouseBehavior", (data) => {
      console.log("Mouse behavior data received:", data);
      setMouseBehavior(data);
    });

    socket.on("keyboardBehavior", (data) => {
      console.log("Keyboard behavior data received:", data.message);
      setKeyboardBehavior((prevBehavior) => [...prevBehavior, data.message]);
    });

    socket.on("booleanMessage", (data) => {
      console.log("Boolean message received:", data);
      setBooleanMessage(data.value);
    });

    return () => {
      socket.disconnect();
      console.log("Disconnected from WebSocket server");
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
          <button className="nav-item" onClick={() => navigate("/Analytics")}>
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
            <ThreeDCardDemo>
              {/* <div className="box"> */}
              <h2>Network Behavior</h2>
              {networkBehavior ? (
                <pre>{networkBehavior.city}</pre>
              ) : (
                <pre>Loading...</pre>
              )}
              {/* </div> */}
            </ThreeDCardDemo>
            <div className="box">
              <h2>Mouse Behavior</h2>
              {mouseBehavior ? (
                <pre>{mouseBehavior.username}</pre>
              ) : (
                <pre>Loading...</pre>
              )}
            </div>
            <div className="box">
              <h2>Keyboard Behavior</h2>
              <ul>
                {keyboardBehavior.length > 0 ? (
                  keyboardBehavior.map((message, index) => (
                    <li key={index}>{message}</li>
                  ))
                ) : (
                  <li>Loading...</li>
                )}
              </ul>
            </div>
            <div className="box">
              <h2>Boolean Message</h2>
              <pre>
                {booleanMessage !== null
                  ? booleanMessage.toString()
                  : "Loading..."}
              </pre>
            </div>
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
