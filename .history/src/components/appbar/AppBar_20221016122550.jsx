import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MySearch from "../SearchBar/SearchBar";
// import Account from "../Account/Account";
import "./styles.scss";
const drawerWidth = 240;

export default function MyAppBar() {
  return (
    <Box className="box">
      <AppBar className="appbar" position="static" elevation={0}>
        <Box className="box">
          <Typography variant="h6">Dashboard</Typography>

          <MySearch />
          {/* the box to contain the right side of appbar */}
          <Box sx={{ display: `flex` }}>
            <Button color="inherit">Connect Wallet</Button>
            {/* <Account /> */}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
