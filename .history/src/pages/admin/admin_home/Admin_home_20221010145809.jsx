import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PrimarySearchAppBar from "../../../components/Appbar/appbar";
import { Box, Card, Typography } from "@mui/material";
import BasicCard from "../../../components/Widget/Widget";
import { Grid, CssBaseline } from "@mui/material";
import useStyles from "./styles";

export default function Index() {
  const classes = useStyles();

  return (
    <Grid container>
      <CssBaseline />
      <Grid
        item
        md={3}
        sx={{ width: "100vw", height: "100vh", backgroundColor: "red" }}
      >
        This is grid 3
      </Grid>
      <Grid
        item
        md={1.7}
        sx={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}
      >
        This is grid 2.5
      </Grid>
      <Grid
        item
        md={7.3}
        sx={{ width: "100vw", height: "100vh", backgroundColor: "cyan" }}
      >
        <Grid
          item
          md={12}
          sx={{
            height: `50px`,
            backgroundColor: "red",
          }}
        ></Grid>
        <Grid
          item
          md={12}
          sx={{
            height: `50px`,
            backgroundColor: "black",
          }}
        ></Grid>
        This is grid 2.5
      </Grid>
    </Grid>
  );
}
