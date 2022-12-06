import React, { useEffect, useState } from "react";

import { Card, Box, CssBaseline, Typography, Button } from "@mui/material";

import cardbackground from "../../assets/cardbackground.svg";
import { ethers } from "ethers";

import { useSelector, useDispatch } from "react-redux";

export default function MyBalance() {
  const { account } = useSelector((state) => state.solidity);
  const [balance, setBalance] = useState(0);

  const getBalance = async (acc) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const balance = await provider.getBalance(acc);
    const balanceInEth = ethers.utils.formatEther(balance);
    setBalance(Math.round(balanceInEth * 10000) / 10000);
  };
  useEffect(() => {
    getBalance(account);
    console.log(balance);
  }, [account]);

  return (
    <Card sx={{ flexGrow: "1" }}>
      <Box
        className="balance"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        {/* box_header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, textTransform: "uppercase" }}
          >
            Your Wallet
          </Typography>
          <Button
            className="theButton"
            variant="contained"
            sx={{ fontWeight: 700 }}
          >
            add
          </Button>
        </Box>

        {/*usd unit box */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography variant="body2" sx={{ color: "#5A55D2" }}>
            $
          </Typography>
          <Typography variant="body2">ETH</Typography>
        </Box>
        <Typography variant="h4" sx={{ color: "#5A55D2", fontWeight: 700 }}>
          {balance}
        </Typography>
        <img src={cardbackground} alt="balance_img" />
      </Box>
    </Card>
  );
}
