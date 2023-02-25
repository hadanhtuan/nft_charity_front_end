import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, Typography, Button, Input } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import MySidebar from '../../../components/sidebar/SideBar';
import MyAppBar from '../../../components/appbar/AppBar';
import MySearch from '../../../components/SearchBar/SearchBar';
import TuneIcon from '@mui/icons-material/Tune';
import { ethers } from 'ethers';
import MyTableCampaign from '../../../components/TableAuction/TableCamp';
import MyTableNFT from '../../../components/TableAuction/TableNFT';
import { useSelector, useDispatch } from 'react-redux';
import { createAuction, getAllAuction } from '../../../actions/auction';
import { getCamp } from '../../../actions/campaign';
import AlertLoading from '../../../components/AlertLoading';
import {fetchSolidity} from '.././../../actions/solidity'
import {UPDATE_END_AT} from '../../../constraint/actionTypes'

import './styles.scss';
const defaultData = { startPrice: 0.0001, endAt: 1 };

export default function Index() {
  const [ids, setIds] = useState({ campId: '', nftId: '' });
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(defaultData);
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const { nftContract, marketplaceContract } = useSelector((state) => state.solidity);

  const dispatch = useDispatch();
  const { auctions } = useSelector((state) => state.auction);
  useEffect(() => {
    dispatch(getCamp());
    dispatch(getAllAuction());
    if(!nftContract) dispatch(fetchSolidity())
  }, []);
  const handleClickOpen = () => {
    if (ids.campId && ids.nftId) {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") 
        return;
    setOpen(false);
  };

  const handleCreateAuction = async () => {
    setOpen(false)
    setLoading(true)
    setText('Step 1/1')
    const endAt = formData.endAt * 3600;
    const listingPrice = ethers.utils.parseEther(formData.startPrice.toString());
    await (await marketplaceContract.startAuction(ids.nftId, endAt, listingPrice)).wait();

    const auc = {
      nft_id: ids.nftId,
      campaign_id: ids.campId,
      status: 'Available',
      endAt: formData.endAt* 3600 + Date.now()/1000
    };
    dispatch(createAuction(auc));
    dispatch({
      type: UPDATE_END_AT,
      payload: {id: ids.nftId, endAt: formData.endAt* 3600 + Date.now()/1000 }
    })
    setLoading(false)

  };

  return (
    <Box className="homepages">
      <Typography className="pages_title">Active Auction</Typography>
      <Box className="homepages_container">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="contained" startIcon={<TuneIcon />} onClick={handleClickOpen}>
            Create Auction
          </Button>
        </Box>

        {/* an box to contain the body */}
        <Box>
          <Grid container md={12} spacing={4}>
            <Grid item md={6}>
              <MyTableCampaign setIds={setIds} auctions={auctions} />
            </Grid>
            <Grid item md>
              <MyTableNFT setIds={setIds} auctions={auctions} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      {loading && <AlertLoading text={text}/>}

      {/* the dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Auction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create auction please enter start price and time out here. We will send updates occasionally.
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
              step: '0.0001',
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
              step: '0.01',
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
