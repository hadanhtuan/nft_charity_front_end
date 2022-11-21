import React, { useState, useEffect } from "react";
import { Box, CssBaseline, Typography, Button, Input } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import MySidebar from "../../../components/sidebar/SideBar";
import MyAppBar from "../../../components/appbar/AppBar";
import MySearch from "../../../components/SearchBar/SearchBar";
import TuneIcon from "@mui/icons-material/Tune";
import {ethers} from 'ethers'
import MyTableCampaign from "../../../components/TableAuction/TableCamp";
import MyTableNFT from "../../../components/TableAuction/TableNFT";
import {useSelector, useDispatch} from 'react-redux'
import { createAuction, getAllAuction } from '../../../actions/auction'
import "./styles.scss";
const defaultData = { startPrice: 0.0001, endAt: 1 };
export default function Index() {
  const [ids, setIds] = useState({ campId: "", nftId: "" });
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(defaultData);

  const {nftContract, marketplaceContract} = useSelector(state=>state.solidity)

  const dispatch = useDispatch()
  const {auctions} = useSelector(state => state.auction)
  useEffect(()=>{
    dispatch(getAllAuction())
  }, [])
  const handleClickOpen = () => {
    if (ids.campId && ids.nftId) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateAuction = async () => {
    const endAt = formData.endAt*3600
    const listingPrice = ethers.utils.parseEther(formData.startPrice.toString())
    await(await marketplaceContract.startAuction(ids.nftId, endAt, listingPrice)).wait()

    const auc = {
      nft_id: ids.nftId,
      campaign_id: ids.campId,
      status: 'Available'
    }
    dispatch(createAuction(auc))
    
  }
  

  return (
   
      <Box className="page">
        {/* appbar */}
        <MyAppBar type="Auction" />
        {/* noi dung */}
        <Box className="page_content">
          <Grid
            container
            disableEqualOverflow={true}
            md={12}
            sx={{
              display: `flex`,
              flexDirection: `column`,
              padding: `20px 40px 15px 40px`,
            }}
          >
            {/* start all content in here */}

            {/* toolbar box to search or filter somthing */}
            <Box className="toolbar">
              <Box className="toolbar_left">
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Active Auction
                </Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }}>
                  274 Auction
                </Typography>
                <MySearch />
              </Box>
              <Button
                variant="contained"
                startIcon={<TuneIcon />}
                onClick={handleClickOpen}
              >
                Create Auction
              </Button>
            </Box>

            {/* an box to contain the body */}
            <Box sx={{ marginTop: `25px` }}>
              <Grid container md={12} spacing={4}>
                <Grid item md={6}>
                  <MyTableCampaign setIds={setIds} auctions={auctions}/>
                </Grid>
                <Grid item md>
                  <MyTableNFT setIds={setIds} auctions={auctions}/>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Auction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create auction please enter start price and time out here. We
            will send updates occasionally.
          </DialogContentText>
          <Input
            autoFocus
            margin="dense"
            name="startPrice"
            label="Start price (ETH)"
            type="number"
            value={formData.startPrice}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            fullWidth
            variant="standard"
            inputProps={{
              step: "0.0001",
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            name="endAt"
            label="Expire At (hour)"
            type="number"
            value={formData.endAt}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            inputProps={{
              step: "0.01",
            }}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateAuction}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      </Box>

     
  );
}
