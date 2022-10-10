import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Box } from "@mui/material";
const index = () => {
  return (
    <React.Fragment
      sx={{
        background: `#ccc`,
      }}
    >
      <Sidebar />
    </React.Fragment>
  );
};

export default index;
