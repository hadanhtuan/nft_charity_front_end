import * as React from "react";

import { Card, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
// import image icon
import bitcoinSVG from "../../assets/bitcoin.svg";
import ethereumSVG from "../../assets/ethereum.svg";
import litecoinSVG from "../../assets/litecoin.svg";
import "./styles.scss";
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
    default:
      break;
  }

  return (
    <Box className="row_item">
      <Box className="item_img_container">
        <img className="row_item_img" src={data.img} alt="" />
      </Box>

      <Box className="item_text_container">
        <Typography className="item_title" item>
          {data.title}
        </Typography>
      </Box>
      <Box className="item_text_container">
        <Typography className="item_time">{data.time}</Typography>
      </Box>
      <Box className="item_text_container">
        <Typography className="item_money">{data.moneyChange}</Typography>
      </Box>
      <Box className="item_text_container">
        <Typography className="item_status">{data.status}</Typography>
      </Box>
    </Box>
  );
}

export default function MyRecentAct() {
  return (
    <Card className="MyRecentAct">
      <Box className="MyRecentAct_container">
        {/* box to cointain content */}
        <Typography variant="h6" gutterBottom>
          Recent Actitivites
        </Typography>

        <Box className="row">
          {row({ type: "Bitcoin" })}
          {row({ type: "Ethereum" })}
          {row({ type: "Litecoin" })}
        </Box>
      </Box>
    </Card>
  );
}
