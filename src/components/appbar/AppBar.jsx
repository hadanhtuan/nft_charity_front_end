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
  const dispatch = useDispatch()
  const account = useSelector((state) => state.solidity.account)

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

    console.log("ntf contract: ", nft);
    console.log("marketplace contract: ", marketplace);
    dispatch({
      type: FETCH_SOLIDITY,
      payload: {
        account: accounts[0],
        nftContract: nft,
        marketplaceContract: marketplace,
      },
    });
  };
  
  return (
    <AppBar
      position="static"
      sx={{
        height: "50px",
        display: `flex`,
        backgroundColor: `transparent`,
        color: `inherit`,
      }}
      elevation={0}
    >
      <Box
        sx={{
          height: `100%`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `center`,
          padding: `0px 40px`,
        }}
      >
        <Typography variant="h6">{data.title}</Typography>

        <MySearch />
        {/* the box to contain the right side of appbar */}
        {/* <Box sx={{ display: `flex` }}>
          <Button color="inherit">Connect Wallet</Button>
          <Account />
        </Box> */}
        <Typography onClick={()=>{account ? console.log('') : web3Handler()}} sx={{display:'flex', justifyContent: 'space-between', alignItems:"center", marginRight: "30px", cursor:"pointer"}}>
              {account? `${account.slice(0, 5) + '...' + account.slice(38, 42)}` : 'Connect Wallet'}
        </Typography>
      </Box>
    </AppBar>
  );
}
