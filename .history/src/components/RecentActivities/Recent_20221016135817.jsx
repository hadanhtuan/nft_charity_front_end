import * as React from "react";

import { Card, Box, , Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
// import image icon
import bitcoinSVG from "../../assets/bitcoin.svg";
import ethereumSVG from "../../assets/ethereum.svg";
import binancecoinSVG from "../../assets/binancecoin.svg";
import litecoinSVG from "../../assets/litecoin.svg";

function row({ type }) {
  let data;
  switch (type) {
    case "Bitcoin":
      data = {
        title: "Bitcoin",
        img: bitcoinSVG,
        time: "10:45:16 AM",
        moneyChange: "+1545.00",
        status: "Complete",
      };
      break;
    case "Ethereum":
      data = {
        title: "Ethereum",
        img: ethereumSVG,
        time: "09:15:31 AM",
        moneyChange: "+5649,00",
        status: "Painding",
      };
      break;
    case "Litecoin":
      data = {
        title: "Litecoin",
        img: litecoinSVG,
        time: "09:01:12 AM",
        moneyChange: "+4547,00",
        status: "Complete",
      };
      break;
  }
  return (
    <React.Fragment>
      <Grid item>
        <img src={data.img} alt="" />
      </Grid>
      <Grid item>{data.title}</Grid>
      <Grid item>{data.time}</Grid>
      <Grid item>{data.moneyChange}</Grid>
      <Grid item>{data.status}</Grid>
    </React.Fragment>
  );
}

export default function MyRecentAct() {
  return (
    <Card
      sx={{
        display: `flex`,
        padding: `20px 20px 20px 20px`,
        flexDirection: `column`,
      }}
    >
      {/* box to cointain content */}
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Typography variant="h6" gutterBottom>
          Recent Actitivites
        </Typography>

        <Grid container md={12}>
          <Grid item display="flex" alignItems="center" spacing={12} container>
            {row({ type: "Bitcoin" })}
          </Grid>
          <Grid item display="flex" alignItems="center" spacing={12} container>
            {row({ type: "Ethereum" })}
          </Grid>
          <Grid item display="flex" alignItems="center" spacing={12} container>
            {row({ type: "Litecoin" })}
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
