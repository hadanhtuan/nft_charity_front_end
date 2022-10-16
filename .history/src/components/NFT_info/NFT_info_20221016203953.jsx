import React from "react";

import { Card, Box, Typography, Divider } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
export default function MyNFT_info() {
  return (
    <Card>
      <Box sx={{ display: `flex`, padding: `10px` }}>
        <Box flex={1}>
          <AccountBoxIcon fontSize=""/>
        </Box>
        <Box flex={1}>b</Box>
      </Box>
    </Card>
  );
}
