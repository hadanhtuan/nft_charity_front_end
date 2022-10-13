import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { Icon } from "@material-ui/core";
import bitcoinSVG from "../../assets/bitcoin.svg";
import ethereumSVG from "../../assets/ethereum.svg";
import litecoinSVG from "../../assets/litecoin.svg";
import binancecoinSVG from "../../assets/binancecoin.svg";

import transfer from "../../assets/data_transfer.svg";
import upGrowth from "../../assets/Up.svg";
import upChart from "../../assets/Yes.svg";
import downGrowth from "../../assets/No.svg";
import downChart from "../../assets/Down.svg";
import CssBaseline from "@material-ui/core";

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
      <Box className={classes.widget}>
        {/* this is the infomation frame */}
        {/* left side */}
        <CardContent className={classes.widget_left}>
          <img className={classes.widget_icon} src={data.img} alt="anhcoin" />
          {/* end logo */}

          {/* start infomation */}
          {/* start BNB to USD */}
          <CardContent
            sx={{ display: "inline-flex", padding: `10px 0px 0px 0px` }}
          >
            <Typography >{data.coinTitle}</Typography>
            <img
              src={transfer}
              alt="data_transfer"
              style={{ margin: `0 4px` }}
            />
            <Typography sx={{ fontSize: `16px` }}>USD</Typography>
          </CardContent>
          {/* end BNB to USD */}

          {/* start clgt deo biet */}
          <CardContent sx={{ padding: `0` }}>
            <Typography sx={{ fontSize: `24px` }}>
              {data.weirdNumber}
            </Typography>
          </CardContent>
          {/* end clgt deo biet */}

          {/* start growth */}
          <CardContent sx={{ display: "inline-flex", padding: `0` }}>
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
          </CardContent>
          {/* end growth */}
          {/* end infomation */}
        </CardContent>
        <div
          className="card_chart"
          style={{
            height: `136px`,
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `center`,
            alignItems: `center`,
            margin: `0`,
            padding: `0`,
          }}
        >
          {/* start big chart */}

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
        </div>
      </Box>
    </Card>
  );
}
