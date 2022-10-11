import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PrimarySearchAppBar from "../../../components/Appbar/appbar";
import { Box, Card, Typography } from "@mui/material";
import BasicCard from "../../../components/Widget/Widget";
import { Grid, CssBaseline } from "@mui/material";
import PermanentDrawerLeft from "../../../components/Sidebar/Sidebar";
import Widget from "../../../components/Widget/Widget";

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
      <Grid item className={classes.mainContent} md={10.3}>
        <Grid item md={12}>
          <PrimarySearchAppBar />
        </Grid>
        <Grid item md={12}>
          <Grid container>
            <Grid item md={3} clas>
              <Widget type="Bitcoin"></Widget>
            </Grid>
            <Grid item md={3} clas>
              <Widget type="Litecoin"></Widget>
            </Grid>
            <Grid item md={3} clas>
              <Widget type="Ethereum"></Widget>
            </Grid>
            <Grid item md={3} clas>
              <Widget type="BinanceCoin"></Widget>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
