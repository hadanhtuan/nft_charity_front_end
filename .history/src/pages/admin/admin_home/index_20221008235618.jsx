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
          background: `#ccc`,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <PrimarySearchAppBar />
        <div className="content"></div>
      </div>
    </div>
  );
}
