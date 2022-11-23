import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MySearch from "../SearchBar/SearchBar";
import Account from "../Account/Account";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import MarketplaceAbi from "../../utils/contractsData/Marketplace.json";
import MarketplaceAddress from "../../utils/contractsData/Marketplace-address.json";
import NFTAbi from "../../utils/contractsData/NFT.json";
import NFTAddress from "../../utils/contractsData/NFT-address.json";
import { FETCH_SOLIDITY } from "../../constraint/actionTypes";
import { Toolbar } from "@mui/material";

import styled from "@emotion/styled";

export default function MyAppBar({ type }) {
  let data;
  switch (type) {
    case "Dashboard":
      data = {
        title: "Dashboard",
      };
      break;
    case "Campaign":
      data = {
        title: "Campaign",
      };
      break;
    case "Auction":
      data = {
        title: "Auction",
      };
      break;
    case "List_NFT":
      data = {
        title: "List NFT",
      };
      break;
    default:
      data = {
        title: "Dashboard",
      };
      break;
  }
  const dispatch = useDispatch();
  const account = useSelector((state) => state.solidity.account);
  console.log(account);

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async function (accounts) {
      await web3Handler();
    });

    const marketplace = new ethers.Contract(
      MarketplaceAddress.address,
      MarketplaceAbi.abi,
      signer
    );
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);

    // console.log("ntf contract: ", nft);
    // console.log("marketplace contract: ", marketplace);
    dispatch({
      type: FETCH_SOLIDITY,
      payload: {
        account: accounts[0],
        nftContract: nft,
        marketplaceContract: marketplace,
      },
    });
  };
  //

  return (
    <>
      <AppBar
        color="inherit"
        sx={{
          backgroundColor: "transparent",
        }}
        position="sticky"
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6">Super Idol ching chong bing bong</Typography>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </>
  );
}
