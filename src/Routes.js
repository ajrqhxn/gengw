import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';


export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Posts" component={Posts} />
        </Switch>
      </Router>
    );
  }
}