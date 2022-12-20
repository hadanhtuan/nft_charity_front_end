import React, { useState, useEffect } from 'react';
import { Card, Box, IconButton, Typography, CircularProgress } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as api from '../../apis';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_CAMP, PICK_CAMP } from '../../constraint/actionTypes';

import './styles.scss';

export default function MyTableCampaign() {
  const { campaigns, isLoading } = useSelector((state) => state.campaign); //lay campaigns tu store

  const dispatch = useDispatch();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
    },
    {
      field: 'title',
      headerName: 'Campaign',
      width: 150,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
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
    },
    {
      field: 'icon',
      headerName: 'Icon',
      renderCell: (params) => {
        return (
          <Box sx={{ display: `flex`, gap: `10px` }}>
            <IconButton
              aria-label="edit"
              component="label"
              onClick={() => {
                dispatch({ type: PICK_CAMP, payload: params.row.id });
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return isLoading ? (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Typography variant="h6" gutterBottom>
        Waiting...
      </Typography>
      <CircularProgress />
    </Box>
  ) : (
    <Card className="tableCampaign">
      <Box className="tableCampaign__container">
        <DataGrid
          columns={columns}
          rows={campaigns}
          rowHeight={170}
          checkboxSelection={false}
          disableSelectionOnClick
          hideFooterPagination
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Footer: () => null,
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </Card>
  );
}
