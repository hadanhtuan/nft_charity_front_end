import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import MySidebar from "../../../components/sidebar/SideBar";
import MyAppBar from "../../../components/appbar/AppBar";
import MyWidget from "../../../components/Widget/Widget";
import MyTransactionOverview from "../../../components/TransactionOverview/Transaction";
import MyBalance from "../../../components/Balance/Balance";
import MyRecentAct from "../../../components/RecentActivities/Recent";
import "./styles.scss";
export default function Index() {
  return (
    <Box className="homepages">
      <Box className="homepages_container">
        <Box className="homepages_left">
          <Box className="widgets">
            <MyWidget type="Bitcoin" />
            <MyWidget type="Litecoin" />
            <MyWidget type="Ethereum" />
          </Box>
          <MyTransactionOverview />
        </Box>
        <Box className="homepages_right">
          <MyWidget type="BinanceCoin" />
          <MyBalance />
        </Box>
      </Box>
      <Box className="recentAct">
        <MyRecentAct />
      </Box>
    </Box>
  );
}
