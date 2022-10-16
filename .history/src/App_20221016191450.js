import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import admin_home from "./pages/admin/admin_home";
import campaign from "./pages/admin/campaign";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={admin_home} />
        <Route path="/admin/campaign" exact component={campaign} />
      </Switch>
    </Router>
  );
}

export default App;
