import * as React from "react";
import { Card, Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
export default function Overview() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container md={12}>
        <Grid item className={classes.card__header} md={7}>
          <Typography className={}>Transaction Overview</Typography>
          <Typography>7.2141,997.5 (25%)</Typography>
        </Grid>
        <Grid item md={5}></Grid>
      </Grid>
    </Card>
  );
}
