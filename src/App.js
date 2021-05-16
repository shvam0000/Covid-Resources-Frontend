import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Team from "./components/Team";
import AddRequest from "./components/AddRequest";
import Home from "./components/Home";
import AddResources from "./components/AddResources";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Route path="/team" component={Team} />
        <Route path="/add-request" component={AddRequest} />
        <Route path="/login" component={Login} />
        <Route path="/add-resource" component={AddResources} />
        <Route path="/" exact component={Home} />
      </Router>
    </React.Fragment>
  );
}

export default App;
