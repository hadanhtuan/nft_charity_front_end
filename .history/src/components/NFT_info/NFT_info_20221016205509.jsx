import React from "react";

import { Card, Box, Typography, Divider } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import accountIcon from "../../assets/name.svg";

function row() {
  return (
    <Box display="flex">
      <Box flex={1}>
        <Typography variant="title2" sx={{ fontWeight: `700` }}>
          Full Name
        </Typography>
      </Box>
      <Box flex={1}>
        <Typography variant="title2">farhod dadajonov</Typography>
      </Box>
    </Box>
  );
}
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
          row()Ơ
        </Box>
      </Box>
    </Card>
  );
}
