import React from "react";
import { Card, Box, Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  userName,
  userPhoneNumber,
  totalRides,
  totalFinished,
  homeLocation
) {
  return { userName, userPhoneNumber, totalRides, totalFinished, homeLocation };
}

const rows = [
  createData("Nguyen Van A", "0123456789", 5, 3, "Ha Noi"),
  createData("Nguyen Van B", "0123456789", 5, 3, "Ha Noi"),
  createData("Nguyen Van C", "0123456789", 5, 3, "Ha Noi"),
  createData("Nguyen Van D", "0123456789", 5, 3, "Ha Noi"),
];

export default function MyTableCampaign() {
  return (
    <Card
      sx={{
        padding: `20px`,
        display: `flex`,
      }}
    >
      {/* Header */}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">User</TableCell>
            <TableCell align="center">Total&nbsp;rides</TableCell>
            <TableCell align="center">Total&nbsp;finished</TableCell>
            <TableCell align="center">Home&nbsp;Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.userName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
