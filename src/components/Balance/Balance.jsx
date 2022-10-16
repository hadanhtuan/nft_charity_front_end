import * as React from "react";

import { Card, Box, CssBaseline, Typography, Button } from "@mui/material";

import cardbackground from "../../assets/cardbackground.svg";

export default function MyBalance() {
  return (
    <Card
      sx={{
        display: `flex`,
        width: `218.7px`,
        padding: `20px 20px 10px 20px`,
        flexDirection: `column`,
        justifyContent: `space-between`,
      }}
    >
      <CssBaseline />

      {/* box_header */}
      <Box
        sx={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
        }}
      >
        <Box>
          <Typography variant="h6">Balance</Typography>
        </Box>
        <Box>
          <Button>add</Button>
        </Box>
      </Box>

      {/*usd unit box */}
      <Box sx={{ display: `flex` }}>
        <Typography variant="subtitle2" sx={{ color: `#5A55D2` }}>
          $
        </Typography>
        <Typography variant="subtitle2" sx={{ marginLeft: `4px` }}>
          Dollar
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ color: `#5A55D2` }}>
        9784.79
      </Typography>
      <img src={cardbackground} alt="" />
    </Card>
  );
}
