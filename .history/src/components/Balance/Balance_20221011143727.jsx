import * as React from "react";
import { Card, Box } from "@mui/material";
import addBtn
import { useStyles } from "./styles";
export default function Balance() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box className={classes.header}>
        <p className={classes.Title}>Balances</p>
      </Box>
    </Card>
  );
}
