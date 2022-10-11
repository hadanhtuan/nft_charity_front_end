import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PrimarySearchAppBar from "../../../components/Appbar/appbar";
import { Box,Card, Typography } from "@mui/material";
import BasicCard from "../../../components/Widget/Widget";
import useStyles from "./styles";

export default function Index() {

  const classes = useStyles();


  return (
    <div className="home" style={{ display: "flex" }}>
      <Sidebar />
      <Box
        className={classes.sidebar}
        
      >
        <PrimarySearchAppBar />

        <div className="content">
          {/* start 4 card nho widget */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <BasicCard type="Bitcoin"></BasicCard>
            <BasicCard type="Litecoin"></BasicCard>
            <BasicCard type="Ethereum"></BasicCard>
            <BasicCard type="BinanceCoin"></BasicCard>
          </div>
          {/* end 4 card nho widget */}
        </div>
      </Box>
    </div>
  );
}
