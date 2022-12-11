import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as api from "../../apis";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_CAMP, PICK_CAMP } from "../../constraint/actionTypes";

export default function MyTableCampaign({ setIds, auctions }) {
  const { campaigns, isLoading } = useSelector((state) => state.campaign); //lay campaigns tu store
  const dispatch = useDispatch();
  const list = campaigns.filter((camp) => {
    let flag = true;
    auctions.forEach((auc) => {
      if (auc.campaign_id == camp.id) flag = false;
    });
    return flag;
  });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      editable: true,
      width: 10,
    },
    {
      field: "title",
      headerName: "Campaign",
      editable: true,
      width: 200,
    },
    {
      field: "img1_url",
      headerName: "Image",
      width: 250,
      renderCell: (params) => {
        return (
          <Box className="imgContainer">
            <img src={params.row.img1_url} alt="Campaign_Image" />
          </Box>
        );
      },
    },
    // {
    //   field: "img2_url",
    //   headerName: "Image",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <img
    //         style={{
    //           width: "150px",
    //           height: "150px",
    //           margin: "3px",
    //           objectFit: "cover"
    //         }}
    //         src={params.row.img2_url}
    //         alt=""
    //       />
    //     );
    //   },
    // },
    {
      field: "zone",
      headerName: "Zone",
      editable: true,
      width: 100,
    },
  ];
  const handleOnCellClick = (params) => {
    setIds((prev) => {
      return { ...prev, campId: params.row.id };
    });
  };

  return isLoading ? (
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
        rows={list}
        rowHeight={150}
        pageSize={5}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
        onCellClick={handleOnCellClick}
      />
    </Card>
  );
}
