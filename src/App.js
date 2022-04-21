import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import '../src/styles/index.css'

const App = () => {
  return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
  );
};

export default App;
