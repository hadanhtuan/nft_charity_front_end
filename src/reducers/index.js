import { combineReducers } from 'redux';

import solidity from './soliditySlice';
import campaign from './campaignSlice';
import auction from './auctionSlice';
import transHistory from './transHistorySlice';

export const reducers = combineReducers({
  solidity,
  campaign,
  auction,
  transHistory,
});
