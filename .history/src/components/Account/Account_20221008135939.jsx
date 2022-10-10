// this is the account avatar component that will be used in the appbar

import * as React from "react";
import { useState } from "react";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Account() {
  const [anchorEl, setAnchorEl] = (useState < null) | (HTMLElement > null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onclick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
}
