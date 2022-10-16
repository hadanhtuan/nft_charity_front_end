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
        <MyAppBar />
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
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
