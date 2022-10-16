import React from "react";
import { Card, Box, Typography } from "@mui/material";
// import date
import MyDatePicker from "../DatePicker/DatePicker";

import TuneIcon from "@mui/icons-material/Tune";
export default function MyFiltering() {
  return (
    <Card sx={{ padding: `20px` }}>
      <Box sx={{ display: `flex` }}>
        <TuneIcon />
        <Typography variant="body1" sx=>Filtering</Typography>
        <MyDatePicker />
      </Box>
    </Card>
  );
}
