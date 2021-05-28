import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Team from "./components/Team";
import AddRequest from "./components/AddRequest";
import Home from "./components/Home";
import AddResources from "./components/AddResources";
import PageNotFound from "./components/PageNotFound";
import { useDispatch } from "react-redux";
import { getUserDetails } from "./actions/userActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch >
        <Route path="/team" component={Team} />
        <Route path="/add-request" component={AddRequest} />
        <Route path="/login" component={Login} />
        <Route path="/add-resource" component={AddResources} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
