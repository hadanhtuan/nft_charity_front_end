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
      <CardContent sx={{ padding: "0px" }}>
        <img src={img1} alt="anh_bit_coin" />
      </CardContent>
      <div style={{ display: `flex` }}>
        <CardContent sx={{ display: "inline-flex", paddingBottom: "0px" }}>
          <Typography variant="h7">BNB</Typography>
          <img src={img2} alt="data_transfer" />
          <Typography variant="h7">USB</Typography>
        </CardContent>
        <CardContent sx={{ paddingBottom: "0px", PaddingTop: "0px" }}>
          <Typography variant="h5">9784.79</Typography>
        </CardContent>
      </div>
    </Card>
  );
}
