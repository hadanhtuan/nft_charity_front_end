import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, Typography, Button, IconButton, CircularProgress, Card } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import MyAppBar from '../../../components/appbar/AppBar';
import MySearch from '../../../components/SearchBar/SearchBar';
import TuneIcon from '@mui/icons-material/Tune';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { useDispatch, useSelector } from 'react-redux';

import MyTableCampaign from '../../../components/TableCampaign/TableCampaign';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { EDIT_CAMP, PICK_CAMP } from '../../../constraint/actionTypes';
import { getAllAuction } from '../../../actions/auction';
import { useHistory } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
const List_Auc = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { auctions, isLoading } = useSelector((state) => state.auction);

  useEffect(() => {
    dispatch(getAllAuction());
  }, []);
  const columns = [
    {
      field: 'nft_id',
      headerName: 'NFT',
      width: 20,
    },
    {
      field: 'campaign_id',
      headerName: 'Campaign ID',
      width: 100,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 250,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              gap: `10px`,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                color: `${
                  params.row.status === 'Available'
                    ? `
                    #00F5FF
                `
                    : `rgb(0, 221, 162)`
                }`,
              }}
            >
              {params.row.status}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: 'created_at',
      headerName: 'Create At',
      width: 120,
    },
    {
      field: 'img1_url',
      headerName: 'Image',
      width: 250,
      renderCell: (params) => {
        return (
          <Box className="imgContainer">
            <img src={params.row.img1_url} alt="Campaign_Image" />
          </Box>
        );
      },
    },
    {
      field: 'zone',
      headerName: 'Zone',
      editable: true,
      width: 100,
    },
    {
      field: 'icon',
      headerName: 'Options',
      renderCell: (params) => {
        return (
          <Box sx={{ display: `flex`, gap: `10px` }}>
            <IconButton
              aria-label="edit"
              component="label"
              onClick={() => {
                history.push(`/admin/list_auction/${params.row.nft_id}`);
              }}
            >
              <AiOutlineEye />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box className="homepages">
        <Typography className="pages_title">Active Auction</Typography>

        <Box>
          {isLoading ? (
            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Typography variant="h6">Loading...</Typography>
              <CircularProgress />
            </Box>
          ) : (
            <Card
              sx={{
                padding: `20px`,
                display: `flex`,
                height: `600px`,
                width: '100%',
              }}
            >
              {/* Header */}
              <DataGrid
                columns={columns}
                rows={auctions}
                rowHeight={150}
                pageSize={4}
                rowsPerPageOptions={[4]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </Card>
          )}
        </Box>
      </Box>
    </>
  );
};

export default List_Auc;
