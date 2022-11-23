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
    <Box className="homepages">
      <Box className="homepages__container">
        <Box className="container_left">
          <Typography variant="h6">Active NFT</Typography>
          <MySearch />
        </Box>
        <Button color="secondary" variant="contained" startIcon={<TuneIcon />}>
          Filter
        </Button>
      </Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box className="nft_list">
          {nftList.map((item, id) => (
            <MyNFTInfo
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.startPrice}
            />
          ))}
          {nftList.map((item, id) => (
            <MyNFTInfo
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.startPrice}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
