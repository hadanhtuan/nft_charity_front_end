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
    // trang tong quat
    <Box className="container">
      {/* reset css */}
      <CssBaseline />
      {/* sidebar */}
      <MySidebar />
      {/* trang noi dung */}
      <Box className="page">
        {/* appbar */}
        <MyAppBar type=: />
        {/* noi dung */}
        <Box className="page_content">
          <Grid
            container
            disableEqualOverflow={true}
            md={12}
            sx={{
              display: `flex`,
              flexDirection: `column`,
              padding: `20px 40px 15px 40px`,
            }}
          >
            {/* widget box */}
            <Box className="widgets">
              <MyWidget type="Bitcoin" />
              <MyWidget type="Litecoin" />
              <MyWidget type="Ethereum" />
              <MyWidget type="BinanceCoin" />
            </Box>

            {/* TransactionOverview and balance box */}
            <Box className="transAndBal">
              <MyTransactionOverview />
              <MyBalance />
            </Box>

            {/* Box to contain list of recent activities */}
            <Box className="recentAct">
              <MyRecentAct />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
