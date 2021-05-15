import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import { Container } from "reactstrap";

import Home from './views/HomePage';
import Register from './views/RegisterPage'; // Contains sign up
import NavBar from "./components/NavBar";
import Course from "./views/CoursePage";
import Program from "./views/ProgramPage";
import Profile from "./views/ProfilePage";
import history from "./utils/history"; // Keep track of prev/next page.


function App() {
  // App Tracks login state
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token') ? true : false);
  console.log(isLogin)

  // Clear the LocalStorage
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false)
  };

  
  // Routing to display certain pages.
  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        {/* Pass logout method to navbar */}
        <NavBar handleLogout={handleLogout} isLogin={isLogin}/>
        <Container className="flex-grow-1 mt-5">
          {/* 4-5 Screens  */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/courses" exact component={Course} />
            <Route path="/course/:id" exact component={Program} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
