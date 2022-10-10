import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import admin_home from "./pages/admin/admin_home";

import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact component={admin_home} />
      </Switch>
    </BrowserRouter>
  );    
};

export default App;
