import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  let token = localStorage.token;
  let endpoint = "http://localhost:5000/dashboard";

  const getDashboard = () => {
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (!response.data.status) {
          navigate("/signin");
        } else {
          setUser(response.data.user);
        }
      })
      .catch(() => {
        navigate("/signin");
      });
  };

  useEffect(() => {
    getDashboard();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>

      {user && (
        <div>
          <p><strong>First Name:</strong> {user.firstname}</p>
          <p><strong>Last Name:</strong> {user.lastname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Register Date:</strong> {new Date(user.register_date).toLocaleDateString()}</p>
        </div>
      )}

      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
