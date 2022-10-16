import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import MyAppBar from "../../components/appbar/AppBar";
import MySidebar from "../../components/sidebar/SideBar";

export default function Index() {
  return (
    <div>
      <h1>Admin Home</h1>
      <MySidebar />
    </div>
  );
}
