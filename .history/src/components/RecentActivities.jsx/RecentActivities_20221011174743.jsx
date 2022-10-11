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
            <Grid item md={2}>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}
