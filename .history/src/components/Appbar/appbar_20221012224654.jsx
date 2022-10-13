import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Account from "../Account/Account";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import useStyles from "./styles";

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      variant="outline"
      sx={{ background: `transparent` }}
    >
      <Toolbar>
        <Typography variant="h6">Dashboard</Typography>

        <Button sx={{ marginLeft: `auto` }} variant="outlined">
          connect wallet
        </Button>

        <Grid
          container
          className={classes.account}
          justifyContent="center"
          alignItems="centers"
        >
          
          <Typography className={classes.accountName}>
            Pham Quang Hoa
          </Typography>
          <Account className={classes.accountAvatar} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
