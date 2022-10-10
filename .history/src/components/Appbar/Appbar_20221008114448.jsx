import * as React from "react";
const drawerWidth = 240;

export default function Appbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
