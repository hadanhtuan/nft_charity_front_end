import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ethers } from "ethers"

import MySidebar from "../../../components/sidebar/SideBar";
import MyAppBar from "../../../components/appbar/AppBar";
import MySearch from "../../../components/SearchBar/SearchBar";
import MyNFTInfo from "../../../components/NFT_info/NFT_info";
import TuneIcon from "@mui/icons-material/Tune";
import { useSelector } from "react-redux";
import "./styles.scss";
export default function Index() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const { marketplaceContract, nftContract } = useSelector(
    (state) => state.solidity
  );
  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplaceContract.itemCount();
    console.log(itemCount);
    let items = [];
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplaceContract.items(i);
      console.log("nft number ", i, ": ", item);
      if (!item.isSold) {
        // get uri url from nft contract
        const uri = await nftContract.tokenURI(item.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await fetch(uri);
        console.log("response nft number ", i, ": ", response);
        const metadata = await response.json();
        // get total price of item (item price + fee)
        console.log(metadata);
        const thisNft = await marketplaceContract.items(item.itemId)
        const startPrice = ethers.utils.formatEther(thisNft.startPrice)+'ETH'
        // Add item to items array
        items.push({
          startPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        }); 
      }
    }
    setLoading(false);
    setItems(items);
  };

  useEffect(() => {
    loadMarketplaceItems();
  }, [marketplaceContract, nftContract]);
  console.log(items);

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
        <MyAppBar type="List_NFT" />
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
                {items.map((item, id) => (
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
        </Box>
      </Box>
    </Box>
  );
}
