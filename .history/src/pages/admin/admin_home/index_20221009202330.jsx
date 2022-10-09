import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PrimarySearchAppBar from "../../../components/Appbar/appbar";
import { Card, Typography } from "@mui/material";
import BasicCard from "../../../components/Widget/Widget";
const drawerWidth = 240;
export default function index() {
  return (
    <div className="home" style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="container"
        style={{
          width: `calc(100% - ${drawerWidth}px)`,
          height: `100vh`,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#EFF3FD",
        }}
      >
        <PrimarySearchAppBar />
        <div className="content">
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            consectetur ab ea exercitationem ullam minus. Adipisci animi vitae
            voluptas facere aperiam dicta, eveniet ex nostrum enim ea eius
            officiis magnam!
          </Typography>
          <BasicCard type="Bitcoin"></BasicCard>
          <BasicCard type="Litecoin"></BasicCard>
          <BasicCard type="Ethereum"></BasicCard>
          <BasicCard type="BinanceCoin"></BasicCard>
        </div>
      </div>
    </div>
  );
}
