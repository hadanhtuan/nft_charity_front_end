import * as React from "react";
import { Card, Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
export default function Overview() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container md={12}>
        <Grid item className={classes.card__header} md={7}>
          <p className={classes.card__title}>Transaction Overview</p>
          <p className={classes.card__result}>7.2141,997.5 (25%)</p>
        </Grid>
        <Grid item className={classes.card__groupBtn} md={5}>
            <Grid></Grid>
            <Grid></Grid>
            <Grid></Grid>
            <Grid></Grid>
            <Grid></Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
