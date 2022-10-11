import * as React from "react";
import { Card, Box } from "@mui/material";
import addBtn from "../../assets/addBtn.svg";
import { useStyles } from "./styles";
export default function Balance() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {/* start header */}
      <Box className={classes.header}>
        <p className={classes.title}>Balances</p>
        <img className={classes.addBtn} src={addBtn} alt="addBtn" />
      </Box>
      {/* end header */}

      {/* start body
    </Card>
  );
}
