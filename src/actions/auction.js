import * as api from "../apis";

import {FETCH_AUCTION, FETCH_AUCTION_BY_ID,  START_LOADING_AUCTION, CREATE_AUCTION} from '../constraint/actionTypes'

export const getAllAuction = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_AUCTION });

    const { data } = await api.getAuction();
    dispatch({
      type: FETCH_AUCTION,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getAuctionById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_AUCTION });

    const { data } = await api.getAuctionById(id);
    dispatch({
      type: FETCH_AUCTION_BY_ID,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};


export const createAuction = (newAuction) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_AUCTION });

    const { data } = await api.createAuction(newAuction);
    console.log(data)
    dispatch({
      type: CREATE_AUCTION,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};


