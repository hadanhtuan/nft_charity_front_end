import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Typography, Box, Toolbar } from "@mui/material";
const drawerWidth = 240;
const index = () => {
  return (
    <div style={{ background: "#EFF3FD", height: "100%", width: "100%" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)`, background: `#ccc` },
        }}
      ></Box>
    </div>
  );
};

export default index;
