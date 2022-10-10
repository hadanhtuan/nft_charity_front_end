import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Typography, Box, Toolbar } from "@mui/material";
import PrimarySearchAppBar from "../../../components/Appbar/appbar";
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
        <div className="content" style={{}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          consectetur ab ea exercitationem ullam minus. Adipisci animi vitae
          voluptas facere aperiam dicta, eveniet ex nostrum enim ea eius
          officiis magnam!
        </div>
      </div>
    </div>
  );
}
