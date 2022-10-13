import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import bitcoinSVG from "../../assets/bitcoin.svg";
import ethereumSVG from "../../assets/ethereum.svg";
import litecoinSVG from "../../assets/litecoin.svg";
import binancecoinSVG from "../../assets/binancecoin.svg";

import transfer from "../../assets/data_transfer.svg";
import upGrowth from "../../assets/Up.svg";
import upChart from "../../assets/Yes.svg";
import downGrowth from "../../assets/No.svg";
import downChart from "../../assets/Down.svg";
import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import useStyles from "./styles";

export default function BasicCard({ type }) {
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
    <Card>
      <CssBaseline />
      <Grid container className={classes.widget}>
        <Grid item container className={classes.widget_left} direction="column">
          <Grid item>
            <img className={classes.widget_icon} src={data.img} alt="anhcoin" />
          </Grid>
          <Grid item container direction="row">
            <Typography variant="subtitle2">{data.coinTitle}</Typography>
            <img src={transfer} alt="data_transfer" />
            <Typography variant="subtitle2">USD</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{data.weirdNumber}</Typography>
          </Grid>
          <Grid item sx={{ display: "inline-flex", padding: `0` }}>
            {data.isGrowth ? (
              <>
                <img src={upGrowth} alt="data_up" style={{ margin: `0 4px` }} />
                <Typography sx={{ fontSize: `14px`, color: `#00DEA3` }}>
                  {data.percentChange}%
                </Typography>
              </>
            ) : (
              <>
                <img
                  src={downGrowth}
                  alt="data_up"
                  style={{ margin: `0 4px` }}
                />
                <Typography sx={{ fontSize: `14px`, color: `#F23985` }}>
                  {data.percentChange}%
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item container className={classes.widget_right}>
          <CardContent>
            {data.isGrowth ? (
              <>
                <img src={upChart} alt="chart" />
              </>
            ) : (
              <>
                <img src={downChart} alt="chart" />
              </>
            )}
          </CardContent>
          {/* end big chart */}
        </Grid>
      </Grid>
    </Card>
  );
}
