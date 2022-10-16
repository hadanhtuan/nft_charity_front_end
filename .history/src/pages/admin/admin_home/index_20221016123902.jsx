import React from "react";
import MySidebar from "../../components/sidebar/SideBar";
import { Box, CssBaseline } from "@mui/material";
import MyAppBar from "../../components/appbar/AppBar";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import MyWidget from "../../components/Widget/Widget";
import MyTransactionOverview from "../../components/TransactionOverview/Transaction";
import MyBalance from "../../components/Balance/Balance";
import MyRecentAct from "../../components/RecentActivities/Recent";

export default function Index() {
  return (
    <div>
      <h1>Admin Home</h1>
      <MySidebar />
    </div>
  );
}
