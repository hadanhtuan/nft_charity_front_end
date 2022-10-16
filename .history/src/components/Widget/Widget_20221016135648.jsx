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
    default:
      break
  }
  return (
    <Card sx={{ display: `flex`, padding: `19px` }}>
      <CssBaseline />
      {/* left side */}
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <img className="widget_icon" src={data.img} alt="anhcoin" />

        {/* start this is a box to contain money transfer */}
        <Box sx={{ display: `flex` }}>
          <Typography variant="body1" sx={{ fontWeight: `500` }}>
            {data.coinTitle}
          </Typography>
          <img src={exchangeIcon} alt="" />
          <Typography variant="body1" sx={{ fontWeight: `500` }}>
            USD
          </Typography>
        </Box>
        {/* end money transfer */}

        {/* money value */}
        <Typography variant="h6" sx={{ fontWeight: `700` }}>
          {data.weirdNumber}
        </Typography>

        {/* this is a box to contain value up or down */}
        <Box sx={{ display: `flex`, flexDirection: `row` }}>
          {data.isGrowth ? (
            <>
              <img src={upGrowth} alt="data_up" style={{ margin: `0 4px` }} />
              <Typography sx={{ fontSize: `14px`, color: `#00DEA3` }}>
                {data.percentChange}%
              </Typography>
            </>
          ) : (
            <>
              <img src={downGrowth} alt="data_up" style={{ margin: `0 4px` }} />
              <Typography sx={{ fontSize: `14px`, color: `#F23985` }}>
                {data.percentChange}%
              </Typography>
            </>
          )}
        </Box>
      </Box>
      {/* right side */}
      <Box sx={{ display: `flex`, alignItems: `center` }}>
        {data.isGrowth ? (
          <>
            <img src={upChart} alt="chart" />
          </>
        ) : (
          <>
            <img src={downChart} alt="chart" />
          </>
        )}
      </Box>
    </Card>
  );
}
