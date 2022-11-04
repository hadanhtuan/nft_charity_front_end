import { combineReducers } from "redux";

import solidity from "./soliditySlice";
import campaign from "./campaignSlice";

export const reducers = combineReducers({
  solidity,
  campaign
});
