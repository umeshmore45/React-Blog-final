import { React, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import App from "../App";
import Navigation from "../component/Navigation";
import AboutUs from "../pages/about";
import Blog from "../pages/Blog";
import Home from "../pages/home";
class RouterRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navigation />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/blog/:id" exact component={Blog} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default RouterRoute;
