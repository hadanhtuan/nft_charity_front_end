import React, { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ethers } from "ethers";

import MySidebar from "../../../components/sidebar/SideBar";
import MyAppBar from "../../../components/appbar/AppBar";
import MySearch from "../../../components/SearchBar/SearchBar";
import MyNFTInfo from "../../../components/NFT_info/NFT_info";
import TuneIcon from "@mui/icons-material/Tune";
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";
import { getAllNFT } from "../../../actions/solidity";
export default function List_NFT() {
  let { nftList, isLoading } = useSelector((state) => state.solidity);
  console.log(nftList);
  return (
    <Box className="page">
      {/* appbar */}
      {/* <MyAppBar type="List_NFT" /> */}
      {/* noi dung */}
      <Box className="page_content">
        {isLoading ? (
          <CircularProgress />
        ) : (
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
                  Active NFT
                </Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
                  274 NFTs
                </Typography>
                <MySearch />
              </Box>
              <Button variant="contained" startIcon={<TuneIcon />}>
                Filter
              </Button>
            </Box>

            {/* an box to contain the body */}
            <Box sx={{ marginTop: `25px` }}>
              <Grid container columnSpacing={6} rowSpacing={3}>
                {nftList.map((item, id) => (
                  <Grid item md={6}>
                    <MyNFTInfo
                      image={item.image}
                      name={item.name}
                      description={item.description}
                      price={item.startPrice}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
