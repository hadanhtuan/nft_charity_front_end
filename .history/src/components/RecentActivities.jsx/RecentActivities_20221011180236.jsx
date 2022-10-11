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
            <Grid item className={classes.listItem} md={12}>
              <Grid item md={2}>
                <img src={bitcoinSVG} alt="bitcoin" />
              </Grid>
              <Grid item md={2}>
                Bitcoin
              </Grid>
              <Grid item md={2}>
                10:45:16 AM
              </Grid>
              <Grid item md={2}>
                +1545.00
              </Grid>
              <Grid item md={2}>
                Complete
              </Grid>
            </Grid>
            <Grid item className={classes.listItem} md={12}>
              <Grid item md={2}>
                <img src={ethereumSVG} alt="ethereum" />
              </Grid>
              <Grid item md={2}>
                Ethereum
              </Grid>
              <Grid item md={2}>
                09:15:31 AM
              </Grid>
              <Grid item md={2}>
                +5649.00
              </Grid>
              <Grid item md={2}>
                Painding
              </Grid>
            </Grid>
            <Grid item className={classes.listItem} md={12}>
              <Grid item md={2}>
                <img src={litecoinSVG} alt="litecoin" />
              </Grid>
              <Grid item md={2}>
                LTC
              </Grid>
              <Grid item md={2}>
                09:01:12 AM
              </Grid>
              <Grid item md={2}>
                +4547.00
              </Grid>
              <Grid item md={2}>
                Complete
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}
