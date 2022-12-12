import { FETCH_HISTORY } from '../constraint/actionTypes';

const initState = {
  historyTrans: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_HISTORY: {
      return { ...state, historyTrans: action.payload.historyTrans };
    }
    default:
      return state;
  }
};
