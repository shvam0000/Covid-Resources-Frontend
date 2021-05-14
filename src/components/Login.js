import React from 'react';

import '../assets/main.css';

const Login = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-screen flex flex-col justify-items-center items-center">
        <div className="bg-white w-96 shadow-xl rounded p-5">
          <h1 className="text-3xl font-medium">Welcome</h1>
          <p className="text-sm">Login to add Covid Resources</p>

          <form className="space-y-5 mt-5">
            <input
              type="text"
              placeholder="Email"
              className="border border-gray border-gray-800 w-full h-12 rounded px-3 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray border-gray-800 w-full h-12 rounded px-3 focus:outline-none"
            />
            <button
              type="submit"
              className="text-center bg-blue-500 w-full h-10 rounded text-white hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
