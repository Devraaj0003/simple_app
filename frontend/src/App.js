import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./routes/Register";
import Login from "./routes/Login";
import UserDashboard from "./routes/UserDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
