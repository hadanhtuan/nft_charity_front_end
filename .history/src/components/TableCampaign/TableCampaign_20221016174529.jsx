import React from "react";
import { Card, Box, Typography, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function icon() {
  return (
    <Box sx={{ display: `flex`, gap: `10px` }}>
      <Box>
        <EditIcon />
      </Box>
      <Box>
        <DeleteOutlinedIcon />
      </Box>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <DeleteOutlinedIcon />
      </IconButton>
    </Box>
  );
}
const columns = [
  {
    field: "avatar",
    headerName: "",
    renderCell: () => {
      return <AccountCircleIcon />;
    },
    width: 30,
  },
  {
    field: "user",
    headerName: "User",
    editable: true,
    width: 200,
  },
  {
    field: "totalRides",
    headerName: "Total Rides",
    type: "number",
    editable: true,
  },
  {
    field: "totalFinished",
    headerName: "Total Finished",
    type: "number",
    editable: true,
  },
  {
    field: "homeLocation",
    headerName: "Home Location",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: true,
    width: 150,
  },
  {
    field: "icon",
    headerName: "Icon",
    renderCell: () => {
      return icon();
    },
  },
];

function user({ dataX, dataY }) {
  return (
    <Box>
      <Typography variant="body2">{dataX}</Typography>
      <Typography variant="subtitle2">{dataY}</Typography>
    </Box>
  );
}

const rows = [
  {
    id: 1,
    user: "Nguyen Van A",
    totalRides: 10,
    totalFinished: 5,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 2,
    user: "Nguyen Van B",
    phone: "0123456789",
    totalRides: 11,
    totalFinished: 6,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 3,

    user: "Nguyen Van C",
    phone: "0123456789",
    totalRides: 12,
    totalFinished: 7,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 4,
    user: "Nguyen Van D",
    phone: "0123456789",
    totalRides: 13,
    totalFinished: 8,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 5,

    user: "Nguyen Van E",
    phone: "0123456789",
    totalRides: 14,
    totalFinished: 9,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 6,

    user: "Nguyen Van F",
    phone: "0123456789",
    totalRides: 15,
    totalFinished: 10,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 7,

    user: "Nguyen Van G",
    phone: "0123456789",
    totalRides: 16,
    totalFinished: 11,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 8,

    user: "Nguyen Van H",
    phone: "0123456789",
    totalRides: 17,
    totalFinished: 12,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 9,

    user: "Nguyen Van I",
    phone: "0123456789",
    totalRides: 18,
    totalFinished: 13,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 10,
    user: "Nguyen Van J",
    phone: "0123456789",
    totalRides: 19,
    totalFinished: 14,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
  {
    id: 11,

    user: "Nguyen Van K",
    phone: "0123456789",
    totalRides: 20,
    totalFinished: 15,
    homeLocation: "Hanoi",
    avatar: <AccountCircleIcon />,
  },
];

export default function MyTableCampaign() {
  return (
    <Card
      sx={{
        padding: `20px`,
        display: `flex`,
        height: `600px`,
        width: "100%",
      }}
    >
      {/* Header */}
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Card>
  );
}
