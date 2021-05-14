import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './assets/main.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Team from './components/Team';
import AddRequest from './components/AddRequest';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/team">
          <Team />
        </Route>

        <Route path="/add-request">
          <AddRequest />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
