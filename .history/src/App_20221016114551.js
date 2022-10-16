import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import admin_home from "./pages/admin/admin_home";
import Cam

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={admin_home} />

      </Switch>
    </Router>
  );
}

export default App;
