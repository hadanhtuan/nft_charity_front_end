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

export default function BasicCard() {
  return (
    <Card sx={{ width: `275px`, height: `178px` }}>
      <CardContent>
        <SvgIcon component={img1} viewBox="0 0 600 476.6" />
      </CardContent>
    </Card>
  );
}
