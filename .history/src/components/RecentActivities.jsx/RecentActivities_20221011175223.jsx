import * as React from "react";
import bitcoinSVG from "../../assets/bitcoin.svg";
import ethereumSVG from "../../assets/ethereum.svg";
import litecoinSVG from "../../assets/litecoin.svg";
import binancecoinSVG from "../../assets/binancecoin.svg";
import { Card, Box, Grid } from "@mui/material";
import { useStyles } from "./styles";
export default function Recent() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box className={classes.box}>
        <Box className={classes.box_title}>Recent Activities</Box>
        <Box className={classes.box_list}>
          <Grid container className={classes.list} md={12}>
            <Grid item md={12}>
              <Grid item md={3}></Grid>
              <Grid item md={3}></Grid>
              <Grid item md={3}></Grid>
              <Grid item md={3}></Grid>
            </Grid>
            <Grid item md={12}>
              <Grid item md={3}>1</Grid>
              <Grid item md={3}>2</Grid>
              <Grid item md={3}>3</Grid>
              <Grid item md={3}>4</Grid>
            </Grid>
            <Grid item md={12}>
              <Grid item md={3}>5</Grid>
              <Grid item md={3}>6</Grid>
              <Grid item md={3}></Grid>
              <Grid item md={3}></Grid>
            </Grid>
            <Grid item md={12}>
              <Grid item md={3}></Grid>
              <Grid item md={3}></Grid>
              <Grid item md={3}></Grid>
              <Grid item md={3}></Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}
