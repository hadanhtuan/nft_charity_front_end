import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@mui/icons-material/Search";
import SearchIconWrapper from "@mui/icons-material/Search";
import StyledInputBase from "@mui/material/InputBase";
const drawerWidth = 240;

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          color: "#00261C",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Dashboard
          </Typography>
          <Search sx={{ align: `center` }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                background: "#fff",
                borderRadius: "5px",
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
