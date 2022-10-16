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
  userId,
  userName,
  userPhoneNumber,
  totalRides,
  totalFinished,
  homeLocation
) {
  return {
    userId,
    userName,
    userPhoneNumber,
    totalRides,
    totalFinished,
    homeLocation,
  };
}

const rows = [
  createData("1,Nguyen Van A", "0123456789", 5, 3, "Ha Noi"),
  createData("2,Nguyen Van B", "0123456789", 5, 3, "Ha Noi"),
  createData("3,Nguyen Van C", "0123456789", 5, 3, "Ha Noi"),
  createData("4,Nguyen Van D", "0123456789", 5, 3, "Ha Noi"),
  createData("5,Nguyen Van E", "0123456789", 5, 3, "Ha Noi"),
  createData("6,Nguyen Van F", "0123456789", 5, 3, "Ha Noi"),
  createData("7,Nguyen Van G", "0123456789", 5, 3, "Ha Noi"),
  createData("8,Nguyen Van H", "0123456789", 5, 3, "Ha Noi"),
  createData("9,Nguyen Van I", "0123456789", 5, 3, "Ha Noi"),
  createData("10,Nguyen Van J", "0123456789", 5, 3, "Ha Noi"),
  createData("11,Nguyen Van K", "0123456789", 5, 3, "Ha Noi"),
  createData("12,Nguyen Van L", "0123456789", 5, 3, "Ha Noi"),
  createData("13,Nguyen Van M", "0123456789", 5, 3, "Ha Noi"),
  createData("14,Nguyen Van N", "0123456789", 5, 3, "Ha Noi"),
  createData("15,Nguyen Van O", "0123456789", 5, 3, "Ha Noi"),
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
            <TableCell align="left">id</TableCell>
            <TableCell align="center">User</TableCell>
            <TableCell align="center">Total&nbsp;rides</TableCell>
            <TableCell align="center">Total&nbsp;finished</TableCell>
            <TableCell align="center">Home&nbsp;Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.userName} sx={{ bor }}>
              <TableCell align="left">{row.userId}</TableCell>
              <TableCell align="center">{row.userName}</TableCell>
              <TableCell align="center">{row.totalRides}</TableCell>
              <TableCell align="center">{row.totalFinished}</TableCell>
              <TableCell align="center">{row.homeLocation}</TableCell>
              <TableCell align="center">alo fuckyou</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
