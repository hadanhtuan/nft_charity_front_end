import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import admin_home from "./pages/admin/admin_home";
import campaign from "./pages/admin/campaign";
import auction from "./pages/admin/auction";
import list_nft from "./pages/admin/list_nft";

import { ethers } from "ethers";
import Web3 from 'web3';
import MarketplaceAbi from "./utils/contractsData/Marketplace.json";
import MarketplaceAddress from "./utils/contractsData/Marketplace-address.json";
import NFTAbi from "./utils/contractsData/NFT.json";
import NFTAddress from "./utils/contractsData/NFT-address.json";
import { useDispatch, useSelector } from "react-redux";
import { CONNECT_ACC, FETCH_SOLIDITY } from "./constraint/actionTypes";
import {fetchSolidity} from './actions/solidity'

function App() {

  const dispatch = useDispatch();
  let accounts
  const web3Handler = async () => { // connect metamask
    accounts = await window.ethereum.request({
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
    dispatch({
      type: CONNECT_ACC,
      payload: {
        account: accounts[0]
      },
    });
  };

  useEffect(() => {
    web3Handler();
    dispatch(fetchSolidity())
  });
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={admin_home} />
        <Route path="/admin/campaign" exact component={campaign} />
        <Route path="/admin/auction" exact component={auction} />
        <Route path="/admin/list_nft" exact component={list_nft} />
      </Switch>
    </Router>
  ); 
} 

export default App;
