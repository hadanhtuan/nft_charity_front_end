import React from "react";
import { Box, CssBaseline } from "@mui/material";

import MySidebar from "../../../components/sidebar/SideBar";
import "./styles.scss";
export default function Index() {
  return (
    <Box className="container">
      <CssBaseline />
      <MySidebar />

      <Box className="page"></Box>
    </Box>
  );
}
