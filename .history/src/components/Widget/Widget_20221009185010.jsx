import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { Icon } from "@material-ui/core";
import img1 from "../../assets/bitcoin.svg";
import img2 from "../../assets/data_transfer.svg";
import CssBaseline from "@material-ui/core";

export default function BasicCard() {
  return (
    <Card
      sx={{
        width: `275px`,
        height: `178px`,
        borderRadius: `16px`,
        padding: `24px`,
        gap: `16px`,
      }}
    >
      <div
        className="card_infomation"
        styles={{
          display: `flex`,
          flexDirection: `row`,
          margin: `0`,
          padding: `0`,
          width: `94px`,
          height: `136px`,
        }}
      >
        <CardContent sx={{ padding: `0`, margin: `0`, height: `40px` }}>
          <img
            src={img1}
            alt="anh_bit_coin"
            style={{ padding: `0`, margin: `0` }}
          />
        </CardContent>
        <CardContent sx={{ display: "inline-flex", padding: `0px` }}>
          <Typography sx={{ fontSize: `16px` }}>BNB</Typography>
          <img src={img2} alt="data_transfer" style={{ margin: `0 4px` }} />
          <Typography sx={{ fontSize: `16px` }}>USB</Typography>
        </CardContent>
        <CardContent sx={{ padding: `0` }}>
          <Typography sx={{ fontSize: `24px` }}>9784.79</Typography>
        </CardContent>
      </div>
    </Card>
  );
}
