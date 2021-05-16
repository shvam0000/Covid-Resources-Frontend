import React, { useEffect, useState } from "react";
import { login } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./UI/Loader";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/add-resource");
    }
  }, [userInfo, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setVisible(true);
    } else {
      dispatch(login(username, password));
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-items-center items-center">
        <div className="bg-white w-96 shadow-2xl rounded p-5 mt-20">
          <h1 className="text-3xl font-medium">Welcome</h1>
          <p className="text-sm">Login to add Covid Resources</p>

          {loading && <Loader />}
          {error && <h2 variant="danger">{error}</h2>}
          <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
            <input
              type="text"
              id="uid"
              placeholder="User ID"
              className="border border-gray border-gray-800 w-full h-12 rounded px-3 focus:outline-none"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border border-gray border-gray-800 w-full h-12 rounded px-3 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="text-center bg-blue-500 w-full h-10 rounded text-white hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
          <h2 style={{ display: !visible ? "none" : "inline-block" }}>
            Invalid Data
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
