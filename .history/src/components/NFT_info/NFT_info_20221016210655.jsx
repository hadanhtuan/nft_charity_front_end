import React from "react";

import { Card, Box, Typography, Divider } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import accountIcon from "../../assets/name.svg";
import SendIcon from "@mui/icons-material/Send";

function row({ type }) {
  let data;
  switch (type) {
    case "Full Name":
      data = "farhod dadajonov";
      break;
    case "Father Name":
      data = "Ro’ziboyev";
      break;
    case "Birth Date":
      data = "12.12.1999";
      break;
    case "Phone Number":
      data = "+998 99 999 99 99";
      break;
    default:
      break;
  }

  return (
    <Box display="flex">
      <Box flex={1}>
        <Typography variant="title2" sx={{ fontWeight: `700` }}>
          {type}
        </Typography>
      </Box>
      <Box flex={1}>
        <Typography variant="title2">{data}</Typography>
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
          {row({ type: "Full Name" })}
          {row({ type: "" })}
          {row({ type: "Full Name" })}
          {row({ type: "Full Name" })}
        </Box>
      </Box>
    </Card>
  );
}