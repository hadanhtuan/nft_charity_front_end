import React, { useState, useEffect } from "react";
import {
  Card,
  IconButton,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as api from "../../apis";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_CAMP, PICK_CAMP } from "../../constraint/actionTypes";

export default function MyTableCampaign({ setIds, auctions }) {
  const { nftList, isLoading } = useSelector((state) => state.solidity); //lay campaigns tu store

  const list = nftList.filter((nft) => {
    let flag = true;
    auctions.forEach((auc) => {
      if (auc.nft_id == nft.id) {
        flag = false;
      }
    });
    return flag;
  });

  const dispatch = useDispatch();

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  const columns = [
    {
      field: "id",
      headerName: "NFT ID",
      editable: true,
      width: 10,
    },
    {
      field: "name",
      headerName: "NFT Name",
      editable: true,
      width: 200,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        return (
          <img
            style={{
              width: "150px",
              height: "150px",
              margin: "3px",
            }}
            src={`data:image/png;base64,${toBase64(
              params.row.image.buffer.data
            )}`}
            alt=""
          />
        );
      },
    },
    {
      field: "seller",
      headerName: "Artist",
      editable: true,
      width: 100,
    },
  ];
  const handleOnCellClick = (params) => {
    setIds((prev) => {
      return { ...prev, nftId: params.row.id };
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
