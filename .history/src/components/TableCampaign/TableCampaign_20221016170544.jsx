import React from "react";
import { Card, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 150,
    editable: true,
  },
  {
    field: "totalRides",
    headerName: "Total Rides",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "totalFinished",
    headerName: "Total Finished",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "homeLocation",
    headerName: "Home Location",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    editable: true,
  },
];

function icon() {
  return (
    <Box sx={{ display: `flex`, gap: `10px` }}>
      <Box>
        <EditIcon />
      </Box>
      <Box>
        <DeleteOutlinedIcon />
      </Box>
    </Box>
  );
}

function user({ dataX, dataY }) {
  return (
    <Box>
      <Typography variant="body2">{dataX}</Typography>
      <Typography variant="subtitle2">{dataY}</Typography>
    </Box>
  );
}

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
  
  {id: 1, name: "Nguyen Van A", phone: "0123456789", totalRides: 10, totalFinished: 5, homeLocation: "Hanoi"},
  
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
      <DataGrid columns={columns} />
    </Card>
  );
}
