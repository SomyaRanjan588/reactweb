import React from "react";
import Radium, { StyleRoot } from "radium";
import Cont from "./pages/Contact";
import Log from "./pages/Login";
import Nav from "./pages/Nav";
import Hom from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" exact component={Hom} />
          <Route path="/contactus" exact component={Cont} />
          <Route path="/loginhere" exact component={Log} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
