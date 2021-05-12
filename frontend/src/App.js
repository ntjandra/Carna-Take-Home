import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Container } from "reactstrap";

import Home from './views/HomePage';
import Register from './views/RegisterPage'; // Contains sign up/login

import NavBar from "./components/NavBar";
import About from "./views/AboutPage";
import Course from "./views/CoursePage";
import Profile from "./views/ProfilePage";
import history from "./utils/history"; // Keep track of prev/next page.

function App() {
  // Routing to display certain pages.
  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/device/:device_id" exact component={Course} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
