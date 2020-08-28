import React, { Component } from "react";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

let Page404 = ({ Myhome }) => <h2>Wrong Way</h2>;
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Shakir" />}
          />
          <Route path="/Clock" component={Clock} />
          <Route path="/Contact" component={Contact} />

          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}
export default App;
