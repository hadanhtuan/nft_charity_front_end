import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import MySearch from '../../../components/SearchBar/SearchBar';
import TuneIcon from '@mui/icons-material/Tune';

import MyTableCampaign from '../../../components/TableCampaign/TableCampaign';
import FormCampaign from '../../../components/FormCampaign/Form';
import { getCamp } from '../../../actions/campaign';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

export default function Campaign() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamp()); // req lấy campaigns từ api và lưu vào store
  });

  return (
    <Box className="homepages">
      {/* start all content in here */}

      {/* toolbar box to search or filter somthing */}
      <Box className="homepages__container">
        <Typography className="pages_title">Active Campaign</Typography>
      </Box>

      {/* an box to contain the body */}
      <Box className="campaign_data">
        <MyTableCampaign />
        <FormCampaign />
      </Box>
    </Box>
  );
}
