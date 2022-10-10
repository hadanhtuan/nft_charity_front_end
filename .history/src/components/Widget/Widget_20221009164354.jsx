import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

export default function BasicCard() {
  return (
    <Card sx={{ width: `275px`, height: `178px` }}>
      <CardContent>
        <SvgIcon></SvgIcon>
      </CardContent>
    </Card>
  );
}
