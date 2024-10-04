import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isLogin }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin(name, password);
    
  };

  return (
    <div className="flex justify-center items-center bg-gray-300 h-screen ">
      <div className="bg-white w-72 md:w-96  flex flex-col justify-center items-center space-y-10 py-5 p-2 rounded-lg">
        <h1 className="font-bold text-2xl">Spike Admin</h1>
        <div className="w-full">
          <form
            action="
                "
            className="space-y-5 flex flex-col px-1"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-semibold">
                Username
              </label>
              <input
                type="text"
                value={name}
                placeholder="Username"
                className="border rounded-md p-1 placeholder:text-sm"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-semibold ">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="border p-1 rounded-md placeholder:text-sm"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
              <div className="flex items-center">
                <input type="checkbox" name="" id="" className="mr-2" />
                <h1>Remember this Device</h1>
              </div>
              <h1 className="text-blue-600">Forgot Password?</h1>
            </div>
            <button type="submit" className="bg-blue-500 py-1 rounded-2xl mx-5 hover:bg-blue-800 font-semibold">
              Sign In
            </button>
            <div className="text-center"><h1>Don't have an account <a href="" className="text-blue-500">Sign up</a></h1></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
