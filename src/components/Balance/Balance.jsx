import React, {useEffect, useState} from "react";

import { Card, Box, CssBaseline, Typography, Button } from "@mui/material";

import cardbackground from "../../assets/cardbackground.svg";
import { ethers } from "ethers";

import { useSelector, useDispatch } from "react-redux";


export default function MyBalance() {

  const {account} = useSelector(state => state.solidity)
  const [balance, setBalance] = useState(0)

  const getBalance = async (acc) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const balance = await provider.getBalance(acc);
    const balanceInEth = ethers.utils.formatEther(balance);
    setBalance(Math.round(balanceInEth*10000)/10000)
  }  
  useEffect(()=> {
    
    getBalance(account)
    console.log(balance)
  },[account])
  

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
          ETH
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ color: `#5A55D2` }}>
        {balance}
      </Typography>
      <img src={cardbackground} alt="" />
    </Card>
  );
}
