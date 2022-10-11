import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PrimarySearchAppBar from "../../../components/Appbar/appbar";
import { Box, Card, Typography } from "@mui/material";
import BasicCard from "../../../components/Widget/Widget";
import { Grid } from "@mui/material";
import useStyles from "./styles";

export default function Index() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        item
        md={3}
        sx={{ width: "100vw", height: "100vh", bgColor: "red" }}
      ></Grid>
    </Grid>
  );
}
