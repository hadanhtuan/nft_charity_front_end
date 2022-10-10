import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Box } from "@mui/material";
const index = () => {
  return (
    <Box
      sx={{
        background: `#ccc`,
      }}
    >
      <Sidebar />
    </Box>
  );
};

export default index;
