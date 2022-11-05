import * as api from "../apis";

import {FETCH_CAMP, EDIT_CAMP, START_LOADING_CAMPAIGN, CREATE_CAMP} from '../constraint/actionTypes'

export const getCamp = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_CAMPAIGN });

    const { data } = await api.getCamp();
    dispatch({
      type: FETCH_CAMP,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const createCamp = (newCamp) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_CAMPAIGN });

    const { data } = await api.createCamp(newCamp);
    console.log(data)
    dispatch({
      type: CREATE_CAMP,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const editCamp = (camp, id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_CAMPAIGN });

    const { data } = await api.editCamp(camp, id);
    console.log(data)
    dispatch({
      type: EDIT_CAMP,
      payload: data.campaign
    });
  } catch (err) {
    console.log(err.message);
  }
};

