import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import admin_home from "./pages/admin/admin_home/Admin_home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact component={admin_home} />
        <Route path="/aut" exact component={admin_home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
