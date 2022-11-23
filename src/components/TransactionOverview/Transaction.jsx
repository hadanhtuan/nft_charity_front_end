import * as React from "react";

import { Card, Box, CssBaseline, Typography, Button } from "@mui/material";

import chart from "../../assets/Graph.svg";

import "./styles.css";
export default function MyTransactionOverview() {
  return (
    <Card sx={{ width: "100%" }}>
      <Box className="transactionOverview" sx={{ padding: " 15px 24px" }}>
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
          <img className="chart" src={chart} alt="" />
        </Box>
      </Box>
    </Card>
  );
}
