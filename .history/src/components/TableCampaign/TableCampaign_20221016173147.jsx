import React from "react";
import { Card, Box, Typography, Button } from "@mui/material";
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
    </Box>
  );
}
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
    avatar: <AccountCir
    
  },
  {
    id: 2,
    user: "Nguyen Van B",
    phone: "0123456789",
    totalRides: 11,
    totalFinished: 6,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
  },
  {
    id: 3,

    avauser: "Nguyen Van C",
    phone: "0123456789",
    totalRides: 12,
    totalFinished: 7,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
  },
  {
    id: 4,

    avauser: "Nguyen Van D",
    phone: "0123456789",
    totalRides: 13,
    totalFinished: 8,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
  },
  {
    id: 5,

    avauser: "Nguyen Van E",
    phone: "0123456789",
    totalRides: 14,
    totalFinished: 9,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
  },
  {
    id: 6,

    avauser: "Nguyen Van F",
    phone: "0123456789",
    totalRides: 15,
    totalFinished: 10,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
  },
  {
    id: 7,

    avauser: "Nguyen Van G",
    phone: "0123456789",
    totalRides: 16,
    totalFinished: 11,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
  },
  {
    id: 8,

    avauser: "Nguyen Van H",
    phone: "0123456789",
    totalRides: 17,
    totalFinished: 12,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
  },
  {
    id: 9,

    avauser: "Nguyen Van I",
    phone: "0123456789",
    totalRides: 18,
    totalFinished: 13,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
  },
  {
    id: 10,
    user: "Nguyen Van J",
    phone: "0123456789",
    totalRides: 19,
    totalFinished: 14,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
    
  },
  {
    id: 11,

    user: "Nguyen Van K",
    phone: "0123456789",
    totalRides: 20,
    totalFinished: 15,
    homeLocation: "Hanoi",
    avatar: <AccountCir
    
   
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
