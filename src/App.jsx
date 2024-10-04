import React, { useState } from "react";
import Detail from "./Components/Detail";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Student from "./Components/Student";
import Login from "./Components/Login";

const App = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const handleLogin = (username, password) => {
    const loginName = "admin";
    const loginPass = "password";
    console.log(username, password);

    if (username === loginName && password === loginPass) {
      setLogin(true);
      navigate("/");
    } else {
      alert("Invalid Username and Password");
    }
  };

  return (
    <Routes>
      <Route path="/" element={login ? <Detail /> : <Navigate to="/login" />} />
      <Route
        path="/student"
        element={login ? <Student /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login isLogin={handleLogin} />} />
    </Routes>
  );
};

export default App;
