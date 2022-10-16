import * as React from "react";
import { Card, Box, CssBaseline, Typography } from "@mui/material";
// import image icon
import bitcoinSVG from "../../assets/bitcoin.svg";
import ethereumSVG from "../../assets/ethereum.svg";
import binancecoinSVG from "../../assets/binancecoin.svg";
import litecoinSVG from "../../assets/litecoin.svg";

// import exchange icon
import exchangeIcon from "../../assets/data_transfer.svg";

// import value up icon
import upGrowth from "../../assets/Up.svg";
import downGrowth from "../../assets/No.svg";
// import chart up icon
import upChart from "../../assets/Yes.svg";
import downChart from "../../assets/Down.svg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import "./styles.css";
export default function MyWidget({ type }) {
  let data;
  switch (type) {
    case "Bitcoin":
      data = {
        title: "Bitcoin",
        coinTitle: "BTC",
        img: bitcoinSVG,
        weirdNumber: "9784.79",
        percentChange: "7.2",
        isGrowth: true,
      };
      break;
    case "Ethereum":
      data = {
        title: "Ethereum",
        coinTitle: "ETH",
        img: ethereumSVG,
        weirdNumber: "4567.16",
        percentChange: "6.5",
        isGrowth: true,
      };
      break;
    case "Litecoin":
      data = {
        title: "Litecoin",
        coinTitle: "LTC",
        img: litecoinSVG,
        weirdNumber: "8741.19",
        percentChange: "5.2",
        isGrowth: false,
      };
      break;
    case "BinanceCoin":
      data = {
        title: "BinanceCoin",
        coinTitle: "BNB",
        img: binancecoinSVG,
        weirdNumber: "6547.79",
        percentChange: "9.5",
        isGrowth: true,
      };
      break;
  }
  const classes = useStyles();
  return (
    <Card sx={{ display: `flex`, padding: `19px` }}>
      <CssBaseline />
      {/* left side */}
    </Card>
  );
}
