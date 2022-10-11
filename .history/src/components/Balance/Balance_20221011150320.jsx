import * as React from "react";
import { Card, Box } from "@mui/material";
import addBtn from "../../assets/addBtn.svg";
import cardbackground from "../../assets/cardbackground.svg";
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
        <p className={classes.bodyValue}>9784.79</p>
        B
        <img className={classes.cardbackground} src={cardbackground} alt="" />
      </Box>
    </Card>
  );
}
