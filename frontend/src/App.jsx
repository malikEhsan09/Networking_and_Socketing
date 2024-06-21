// src/App.js

// ? using the react router dom for navigating b/w different pages
// * This is the third party library
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// ? Customs components used
import Login from "../components/Login.jsx";
import Signup from "../components/SignUp.jsx";
import Dashboard from "../components/Dashboard.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="/signup" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
