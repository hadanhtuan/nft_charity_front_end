import * as React from "react";
import { Card, Box } from "@mui/material";

import { useStyles } from "./styles";
export default function Bala() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box>this is overview</Box>
    </Card>
  );
}
