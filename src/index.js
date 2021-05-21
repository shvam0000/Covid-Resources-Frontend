import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./tailwind.styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import store from "./store";

// if (process.env.NODE_ENV) {
//   axios.defaults.baseURL = "http://localhost:5001";
// } else {
// }
axios.defaults.baseURL = "https://covid-19backend.herokuapp.com";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
