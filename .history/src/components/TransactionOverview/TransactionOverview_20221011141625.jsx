import * as React from "react";
import { Card, Box, Grid, Typography, Button } from "@mui/material";
import graph fro
import { useStyles } from "./styles";
export default function Overview() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {/* start phan header  */}
      <Grid container md={12}>
        <Grid item className={classes.card__header} md={7}>
          <p className={classes.card__title}>Transaction Overview</p>
          <p className={classes.card__result}>7.2141,997.5 (25%)</p>
        </Grid>
        <Grid item className={classes.card__groupBtn} md={5}>
          <Button variant="outlined" classes={classes.btn}>
            All
          </Button>
          <Button variant="outlined" className={classes.btn}>
            1M
          </Button>

          <Button variant="outlined" className={classes.btn}>
            6M
          </Button>

          <Button variant="outlined" className={classes.btn}>
            1Y
          </Button>

          <Button variant="outlined" className={classes.btn}>
            YTD
          </Button>
        </Grid>
      </Grid>
      {/* end phan header  */}

      {/* start phan body  */}

      <Grid container md={12} className={classes.chart}>
        
      </Grid>
      {/* end phan body  */}
    </Card>
  );
}
