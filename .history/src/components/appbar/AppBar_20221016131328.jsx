import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MySearch from "../SearchBar/SearchBar";
import Account from "../Account/Account";

export default function MyAppBar({type}) {
  let data;
  switch(type){
    case "Dashboard":
      data:{
        title: "Dashboard",
      }
      break;
    case "Campaign":
      data:{}

  }
  return (
    <AppBar
      position="static"
      sx={{
        height: "50px",
        display: `flex`,
        backgroundColor: `transparent`,
        color: `inherit`,
      }}
      elevation={0}
    >
      <Box
        sx={{
          height: `100%`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `center`,
          padding: `0px 40px`,
        }}
      >
        <Typography variant="h6">Dashboard</Typography>

        <MySearch />
        {/* the box to contain the right side of appbar */}
        <Box sx={{ display: `flex` }}>
          <Button color="inherit">Connect Wallet</Button>
          <Account />
        </Box>
      </Box>
    </AppBar>
  );
}
