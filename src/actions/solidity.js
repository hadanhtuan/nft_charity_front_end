import * as api from "../apis";

import {FETCH_CAMP, EDIT_CAMP, START_LOADING, CREATE_CAMP} from '../constraint/actionTypes'

export const getAllNFT = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getCamp();
    dispatch({
      type: FETCH_CAMP,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};

