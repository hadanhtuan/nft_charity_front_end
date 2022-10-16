import * as React from "react";

import { Card, Box, CssBaseline, Typography, Button } from "@mui/material";

import chart from "../../assets/Graph.svg";

import useStyles from "./styles";
import "./"
export default function MyTransactionOverview() {
  const classes = useStyles();
  return (
    <Card
      sx={{
        display: `flex`,
        width: `883.56px`,
        padding: `20px 20px 0px 20px`,
        flexDirection: `column`,
      }}
    >
      <CssBaseline />

      {/* box_header */}
      <Box
        sx={{
          flex: 1,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
        }}
      >
        {/* Box to contain title of card */}
        <Box sx={{ display: `flex`, flex: `1` }}>
          <Typography variant="h6">Transaction Overview</Typography>
        </Box>

        {/* box to group btn  */}
        <Box
          sx={{ display: `flex`, flex: `1`, justifyContent: `space-between` }}
        >
          <Button variant="outlined">ALL</Button>
          <Button variant="outlined">1M</Button>
          <Button variant="outlined">6M</Button>
          <Button variant="outlined">1Y</Button>
          <Button variant="outlined">YTD</Button>
        </Box>
      </Box>

      {/* box to contain chart */}
      <Box sx={{ display: "flex" }}>
        <img className={classes.chart} src={chart} alt="" />
      </Box>
    </Card>
  );
}
