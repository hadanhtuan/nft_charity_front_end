import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import admin_home from "./pages/admin/admin_home";
import campaign from "./pages/admin/campaign";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>

    <Router>
      <Switch>
    </LocalizationProvider>
        <Route path="/admin" exact component={admin_home} />
        <Route path="/admin/campaign" exact component={campaign} />
      </Switch>
    </Router>
  );
}

export default App;
