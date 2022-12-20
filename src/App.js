import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import admin_home from './pages/admin/admin_home';
import campaign from './pages/admin/campaign';
import auction from './pages/admin/auction';
import list_nft from './pages/admin/list_nft';
import list_auction from './pages/admin/list_auction';
import auction_detail from './pages/admin/auction_detail/AuctionDetail';
import SearchBox from './pages/admin/search/SearchBox';

import { ethers } from 'ethers';
import Web3 from 'web3';
import MarketplaceAbi from './utils/contractsData/Marketplace.json';
import MarketplaceAddress from './utils/contractsData/Marketplace-address.json';
import NFTAbi from './utils/contractsData/NFT.json';
import NFTAddress from './utils/contractsData/NFT-address.json';
import { useDispatch, useSelector } from 'react-redux';
import { CONNECT_ACC, FETCH_SOLIDITY } from './constraint/actionTypes';
import { fetchSolidity } from './actions/solidity';
import MySidebar from './components/sidebar/SideBar';

import { Box, CssBaseline, Typography, Button, CircularProgress, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import MyAppBar from './components/appbar/AppBar';
import { fetchHistoryTrans } from './actions/transHistory';
import { getCamp } from './actions/campaign';

function App() {
  const dispatch = useDispatch();
  let accounts;
  dispatch(fetchHistoryTrans());
  dispatch(getCamp());
  const web3Handler = async () => {
    // connect metamask
    accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });

    window.ethereum.on('accountsChanged', async function (accounts) {
      await web3Handler();
    });
    dispatch({
      type: CONNECT_ACC,
      payload: {
        account: accounts[0],
      },
    });
  };

  useEffect(() => {
    web3Handler();
    dispatch(fetchSolidity());
  }, []);
  // dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Box className="app">
          <Box className="left_side">
            <MySidebar />
          </Box>
          <Box className="right_side">
            <Container className="pages" maxWidth="xl">
              <Switch>
                <Route path="/" exact component={() => <Redirect to="/admin" />} />
                <Route path="/admin" exact component={admin_home} />
                <Route path="/admin/campaign" exact component={campaign} />
                <Route path="/admin/auction" exact component={auction} />
                <Route path="/admin/list_nft" exact component={list_nft} />
                <Route path="/admin/list_auction" exact component={list_auction} />
                <Route path="/admin/list_auction/:nft_id" exact component={auction_detail} />
              </Switch>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
