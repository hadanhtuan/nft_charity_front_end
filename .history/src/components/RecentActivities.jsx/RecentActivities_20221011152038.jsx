import * as React from "react";

import { Card, Box } from "@mui/material";
import { useStyles } from "../TransactionOverview/styles";
export default function RecentActivities() {
    const classes = useStyles();
  return (
    <Card className={classes}>
      <Box>this is recent</Box>
    </Card>
  );
}
