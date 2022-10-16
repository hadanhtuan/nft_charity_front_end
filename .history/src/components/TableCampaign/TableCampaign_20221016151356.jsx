import React from "react";

import { Card, Box, Typography } from "@mui/material";

export default function MyTableCampaign() {
  return (
    <Card
      sx={{
        padding: `20px`,
        display: `flex`,
      }}
    >
      {/* Header */}
      <Box>

      <Typography>This is table campaign</Typography>
      </Box>
    </Card>
  );
}
