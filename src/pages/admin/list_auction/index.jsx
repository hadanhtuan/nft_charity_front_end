import React, { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  Button,
  IconButton,
  CircularProgress,
  Card,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MyAppBar from "../../../components/appbar/AppBar";
import MySearch from "../../../components/SearchBar/SearchBar";
import TuneIcon from "@mui/icons-material/Tune";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

import MyTableCampaign from "../../../components/TableCampaign/TableCampaign";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { EDIT_CAMP, PICK_CAMP } from "../../../constraint/actionTypes";
import { getAllAuction } from "../../../actions/auction";
import { useHistory } from "react-router-dom";

const List_Auc = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { auctions, isLoading } = useSelector((state) => state.auction);

  useEffect(() => {
    dispatch(getAllAuction());
  }, []);
  const columns = [
    {
      field: "nft_id",
      headerName: "NFT",
      editable: true,
      width: 20,
    },
    {
      field: "campaign_id",
      headerName: "Campaign ID",
      editable: true,
      width: 100,
    },
    {
      field: "title",
      headerName: "Title",
      editable: true,
      width: 300,
    },
    {
      field: "status",
      headerName: "Status",
      editable: true,
      width: 100,
    },
    {
      field: "created_at",
      headerName: "Create At",
      editable: true,
      width: 120,
    },
    {
      field: "img2_url",
      headerName: "Image",
      width: 200,
      renderCell: (params) => {
        return (
          <img
            style={{
              width: "150px",
              height: "150px",
              margin: "3px",
              objectFit: "cover",
              borderRadius: "20px",
              padding: "10px",
            }}
            src={params.row.img2_url}
            alt=""
          />
        );
      },
    },
    {
      field: "zone",
      headerName: "Zone",
      editable: true,
      width: 100,
    },
    {
      field: "icon",
      headerName: "Icon",
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
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" component="label">
              <DeleteOutlinedIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box className="page">
      {/* <MyAppBar type="Auction" /> */}

      <Box className="page_content" sx={{ padding: `20px 40px 15px 40px` }}>
        <Box className="toolbar">
          <Box className="toolbar_left">
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Active Campaign
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
              274 Campaigns
            </Typography>
            <MySearch />
          </Box>
          <Button variant="contained" startIcon={<TuneIcon />}>
            Filter
          </Button>
        </Box>

        <Box sx={{ marginTop: `25px` }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Card
              sx={{
                padding: `20px`,
                display: `flex`,
                height: `600px`,
                width: "100%",
              }}
            >
              {/* Header */}
              <DataGrid
                columns={columns}
                rows={auctions}
                rowHeight={150}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
              />
            </Card>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default List_Auc;
