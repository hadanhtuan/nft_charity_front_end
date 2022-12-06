import * as React from "react";

import { Card, Box, CssBaseline, Typography, Button } from "@mui/material";
import chart from "../../assets/Graph.svg";
import styled from "@emotion/styled";
const StyledTransactionOverview = styled(Card)`
  padding: 20px;
  border-radius: 10px;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default function MyTransactionOverview() {
  return (
    <StyledTransactionOverview>
      <Box className="container">
        <Box
          sx={{
            flex: 1,
            display: "flex",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">Transaction Overview</Typography>
          </Box>

          {/* box to group btn  */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="outlined">ALL</Button>
            <Button variant="outlined">1M</Button>
            <Button variant="outlined">6M</Button>
            <Button variant="outlined">1Y</Button>
            <Button variant="outlined">YTD</Button>
          </Box>
        </Box>

        {/* box to contain chart */}
        <Box
          sx={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img className="chart" src={chart} alt="anh_chart" />
        </Box>
      </Box>
    </StyledTransactionOverview>
  );
}
