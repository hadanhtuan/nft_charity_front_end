import React from "react";
import { Card, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 150,
    editable: true,
  },
  {
    field: 'totalRides',
    headerName: 'Total Rides',
    type: 'number',

    width: 150,
    editable: true,
  },
  {
    field: 'totalFinished',
    headerName: 'Total Finished',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
  createData("1", "Nguyen Van A", "0123456789", 5, 3, "Ha Noi"),
  createData("2", "Nguyen Van B", "0123456789", 5, 3, "Ha Noi"),
  createData("3", "Nguyen Van C", "0123456789", 5, 3, "Ha Noi"),
  createData("4", "Nguyen Van D", "0123456789", 5, 3, "Ha Noi"),
  createData("5", "Nguyen Van E", "0123456789", 5, 3, "Ha Noi"),
  createData("6", "Nguyen Van F", "0123456789", 5, 3, "Ha Noi"),
  createData("7", "Nguyen Van G", "0123456789", 5, 3, "Ha Noi"),
  createData("8", "Nguyen Van H", "0123456789", 5, 3, "Ha Noi"),
  createData("9", "Nguyen Van I", "0123456789", 5, 3, "Ha Noi"),
  createData("10", "Nguyen Van J", "0123456789", 5, 3, "Ha Noi"),
  createData("11", "Nguyen Van K", "0123456789", 5, 3, "Ha Noi"),
  createData("12", "Nguyen Van L", "0123456789", 5, 3, "Ha Noi"),
  createData("13", "Nguyen Van M", "0123456789", 5, 3, "Ha Noi"),
  createData("14", "Nguyen Van N", "0123456789", 5, 3, "Ha Noi"),
  createData("15", "Nguyen Van O", "0123456789", 5, 3, "Ha Noi"),
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
    </Card>
  );
}
