import React from "react";
import { Box, CssBaseline, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import MySidebar from "../../../components/sidebar/SideBar";
import MyAppBar from "../../../components/appbar/AppBar";
import MySearch from "../../../components/SearchBar/SearchBar";
import TuneIcon from "@mui/icons-material/Tune";

import MyTableCampaign from "../../../components/TableCampaign/TableCampaign";
import MyFiltering from "../../../components/Filtering/Filtering";

import "./styles.scss";
export default function Index() {
  return (
    // trang tong quat
    <Box className="container">
      {/* reset css */}
      <CssBaseline />
      {/* sidebar */}
      <MySidebar />
      {/* trang noi dung */}
      <Box className="page">
        {/* appbar */}
        <MyAppBar type="Campaign" />
        {/* noi dung */}
        <Box className="page_content">
          <Grid
            container
            disableEqualOverflow={true}
            md={12}
            sx={{
              display: `flex`,
              flexDirection: `column`,
              padding: `20px 40px 15px 40px`,
            }}
          >
            {/* start all content in here */}

            {/* toolbar box to search or filter somthing */}
            <Box className="toolbar">
              <Box className="toolbar_left">
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Active Campaign
                </Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
                  274 Campaigns
                </Typography>
                <MySearch />
              </Box>
              <Button variant="contained" startIcon={<TuneIcon />}>
                Filter
              </Button>
            </Box>

            <MyTableCampaign />
            <My
            <Box>fuck you</Box>
            <Box>fuck you</Box>
            <Box>fuck you</Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
