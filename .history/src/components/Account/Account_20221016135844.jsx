// this is the account avatar component that will be used in the appbar

import * as React from "react";
import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
export default function Account() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          sx={{
            width: `100%`,
            height: `100%`,
            display: `flex`,
            flexDirection: `column`,
            padding: `20px`,
          }}
        >
          <Typography>Phạm Quang Hoà</Typography>
          <Button>123213213</Button>
        </Box>
      </Popover>
    </div>
  );
}
