import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "../Common";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { SignupPage } from "../SignupPage";
import "./styles.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
        </ul>

        <Switch>
          <Route  exact path="/" component={HomePage}></Route>
          <Route  path="/login" component={LoginPage}></Route>
          <Route  path="/signup" component={SignupPage}></Route>
        </Switch>
      </Router>
    );
  }
}
export { App };
