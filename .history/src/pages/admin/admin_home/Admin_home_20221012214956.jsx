import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PrimarySearchAppBar from "../../../components/Appbar/appbar";
import { Box, Card, Typography } from "@mui/material";
import BasicCard from "../../../components/Widget/Widget";
import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PermanentDrawerLeft from "../../../components/Sidebar/Sidebar";
import Widget from "../../../components/Widget/Widget";
import TransactionOverview from "../../../components/TransactionOverview/TransactionOverview";
import Balance from "../../../components/Balance/Balance";
import Recent from "../../../components/RecentActivities.jsx/RecentActivities";
import useStyles from "./styles";

export default function Index() {
  const classes = useStyles();

  return (
    <Grid container className={classes.home}>
      {/* reset css */}
      <CssBaseline />

      {/* sidebar in grid 1.7 */}
      <Grid item md={1.7} className={classes.navbar}>
        <PermanentDrawerLeft />
      </Grid>

      {/* main content in grid 10.3 */}
      <Grid item container md={10.3}>
        {/* appbar */}
        <Grid item md={12}>
          <PrimarySearchAppBar flex=} />
        </Grid>

        {/* widget */}
        <Grid container md={12} item>
          <Grid
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Widget type="Bitcoin"></Widget>
          </Grid>
          <Grid
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Widget type="Litecoin"></Widget>
          </Grid>
          <Grid
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Widget type="Ethereum"></Widget>
          </Grid>
          <Grid
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Widget type="BinanceCoin"></Widget>
          </Grid>
        </Grid>

        {/* Overview 9 and  Balance 3 */}
        <Grid item md={12} className={classes.overAndBal}>
          <Grid item md={9} className={classes.over}>
            <TransactionOverview />
          </Grid>
          <Grid item md={3} className={classes.bal}>
            <Balance />
          </Grid>
        </Grid>

        {/* recent activities 12 */}
        <Grid item md={12} className={classes.recent}>
          <Recent />
        </Grid>
      </Grid>
    </Grid>
  );
}
