import React from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import MySidebar from '../../../components/sidebar/SideBar';
import MyAppBar from '../../../components/appbar/AppBar';
import MyWidget from '../../../components/Widget/Widget';
import MyTransactionOverview from '../../../components/TransactionOverview/Transaction';
import MyBalance from '../../../components/Balance/Balance';
import MyRecentAct from '../../../components/RecentActivities/Recent';
import Chart from '../../../components/Chart/Chart';
import './styles.scss';
import TableTransaction from '../../../components/TableTransaction/TableTransaction';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export default function Index() {
  return (
    <Box className="homepages">
      <Typography className="pages_title">Admin Home</Typography>
      <Box className="homepages_container">
        <Box className="homepages_first">
          <Box className="widgets">
            <MyWidget type="Bitcoin" />
            <MyWidget type="Litecoin" />
            <MyWidget type="Ethereum" />
            <MyWidget type="BinanceCoin" />
          </Box>
        </Box>
        {/* <MyTransactionOverview /> */}
        <Chart />
        <Box className="recentAct" p={2}>
          {/* <MyRecentAct /> */}
          <TableTransaction />
        </Box>
      </Box>
    </Box>
  );
}
