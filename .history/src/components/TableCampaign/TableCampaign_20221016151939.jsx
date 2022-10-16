import React from "react";
import { Card, Box, Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(userName,userPhoneNumber, totalRides, totalFinished, homeLocation) {
  return { userName, totalRides, totalFinished, homeLocation };
}

const rows=[
  createData("Nguyen Van A", 159, 6.0, 24, 4.0),
]
export default function MyTableCampaign() {
  return (
    <Card
      sx={{
        padding: `20px`,
        display: `flex`,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          flex: 1,
          display: `flex`,
        }}
      >
        <Typography>This is table campaign</Typography>
      </Box>
    </Card>
  );
}
