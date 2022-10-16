import React from "react";

import { Card, Box, Typography } from "@mui/material";
import accountIcon from "../../assets/name.svg";

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
export default function MyNFTInfo() {
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
          {row({ type: "Father Name" })}
          {row({ type: "Birth Date" })}
          {row({ type: "Phone Number" })}
        </Box>
      </Box>
    </Card>
  );
}
