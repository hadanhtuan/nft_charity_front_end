import React from "react";

import { Card, Box, Typography, Divider } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import accountIcon from "../../assets/name.svg";
export default function MyNFT_info() {
  return (
    <Card>
      <Box sx={{ display: `flex`, padding: `10px` }}>
        <Box flex={1}>
          <img src={accountIcon} alt="" />
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box display="flex">
            <Box flex={1}>
                
            </Box>
            <Box flex={1}></Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
