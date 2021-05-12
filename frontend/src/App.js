import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";

import './App.css';
import { Container } from "reactstrap";

import Home from './views/HomePage';
import Register from './views/RegisterPage'; // Contains sign up
import Login from './views/LoginPage';
import NavBar from "./components/NavBar";
import About from "./views/AboutPage";
import Course from "./views/CoursePage";
import Profile from "./views/ProfilePage";
import history from "./utils/history"; // Keep track of prev/next page.


function App() {
  // Store Login through JWT information
  const [user, setUser] = useState()

  // Add Hook to check if logged in and update state
  // if there's a user show the message below
  // if (user) {
  //   return <div>{user.name} is loggged in</div>;
  // }

  // Clear the LocalStorage
  const handleLogout = () => {
    setUser({});
    localStorage.removeItem("token");
  };
  
  
  // Routing to display certain pages.
  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        {/* Pass logout method to navbar */}
        <NavBar handleLogout={handleLogout}/>
        <Container className="flex-grow-1 mt-5">
          {/* 4-5 Screens  */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/courses" exact component={Course} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
