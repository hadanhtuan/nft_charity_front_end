import React from "react";
import { Card, Box, Typography, Divider } from "@mui/material";
// import date
import MyDatePicker from "../DatePicker/DatePicker";

import TuneIcon from "@mui/icons-material/Tune";
export default function MyFiltering() {
  return (
    <Card sx={{ padding: `20px` }}>
      <Box sx={{ display: `flex`, alignItems: `center` }}>
        <TuneIcon />
        <Typography variant="h6" sx={{ fontWeight: `700` }}>
          Filtering
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: `flex`, flexDirection: `column`, marginTop: `20px` }}>
        <Typography variant="body1" gutterBottom sx={{ fontWeight: `700` }}>
          Choosing...
        </Typography>
        <MyDatePicker />
        <MyDatePicker sx={{ marginTop:`5px` }} }} />
      </Box>
    </Card>
  );
}
