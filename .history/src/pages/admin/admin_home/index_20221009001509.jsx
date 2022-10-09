import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";

import PrimarySearchAppBar from "../../../components/Appbar/appbar";
import { Card, Typography } from "@mui/material";
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
        <div
          className="content"
          style={{
            display: "flex",
            jsutifyContent: "center",
          }}
        >
          <Typography paragraph align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            consectetur ab ea exercitationem ullam minus. Adipisci animi vitae
            voluptas facere aperiam dicta, eveniet ex nostrum enim ea eius
            officiis magnam!
          </Typography>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
