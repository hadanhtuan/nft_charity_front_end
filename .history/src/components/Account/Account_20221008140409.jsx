// this is the account avatar component that will be used in the appbar

import * as React from "react";
import { useState } from "react";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Account() {
  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
}
