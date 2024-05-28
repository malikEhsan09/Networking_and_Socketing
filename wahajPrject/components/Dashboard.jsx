//? Import the useNavigate hook from react-router-dom. This hook allows us to programmatically navigate to different routes.
import { useNavigate } from "react-router-dom";

//? Define the Dashboard component.
const Dashboard = () => {
  //? Use the useNavigate hook to get a function that we can use to navigate to different routes.
  const navigate = useNavigate();

  //? Define a function that will be called when the user clicks the logout button. This function navigates the user to the login page.
  const handleLogout = () => {
    navigate("/login");
  };

  //? The component returns a JSX element that represents the dashboard.
  return (
    <div>
      <header>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={handleLogout} style={{ float: "right" }}>
          Logout
        </button>
      </header>
      <main>
        <div className="box-container">
          <div className="box">Network Behavior</div>
          <div className="box">Mouse Behavior</div>
          <div className="box">Keyboard Behavior</div>
        </div>
        <div className="control-buttons">
          <button>Start</button>
          <button>Stop</button>
        </div>
      </main>
    </div>
  );
};

//? Export the Dashboard component so it can be used in other parts of the application.
export default Dashboard;
