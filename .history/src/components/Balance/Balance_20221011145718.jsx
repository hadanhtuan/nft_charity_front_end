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

      {/* start body  */}
      <Box className={classes.body}>
        <Box className={classes.bodyUnit}>
          <span className={classes.dollar}>$</span>
          <p className={classes.dollar_title}>Dollar</p>
        </Box>
        <Box className={classes.bodyValue}></Box>
      </Box>
    </Card>
  );
}
