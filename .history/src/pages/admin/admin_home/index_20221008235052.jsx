import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Typography, Box, Toolbar } from "@mui/material";
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
          ml: `${drawerWidth}px`,
        }}
      >
        fdsfdsfsda;fjdspfjsdljfdslkjf;lsdajdsjsfa;kdllllllllfskldddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </div>
    </div>
  );
}
