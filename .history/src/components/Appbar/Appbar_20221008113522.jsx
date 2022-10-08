import * as React from "react";
export default function myAppBar() {
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
