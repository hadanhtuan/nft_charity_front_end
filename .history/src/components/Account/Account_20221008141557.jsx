// this is the account avatar component that will be used in the appbar

import * as React from "react";
import { useState } from "react";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Account() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-label="account of current user"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
}
