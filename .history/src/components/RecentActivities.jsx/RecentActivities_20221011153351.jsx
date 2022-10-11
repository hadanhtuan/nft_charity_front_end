import * as React from "react";

import { Card, Box } from "@mui/material";
import { useStyles } from "./styles";
export default function Recent() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box className={classes.box}>
        <p className={classes.heade}>Recent Activities</p>
      </Box>
    </Card>
  );
}
