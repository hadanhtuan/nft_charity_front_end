import {
  FETCH_AUCTION, START_LOADING_AUCTION, CREATE_AUCTION
} from "../constraint/actionTypes";

const initState = {
  auctions: [],
  isLoading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case START_LOADING_AUCTION: {
      return { ...state, isLoading: true };
    }
    case FETCH_AUCTION:
      return {
        auctions: action.payload,
        isLoading: false,
      };
    case CREATE_AUCTION:
      return {
        ...state,
        auctions: [...state.auctions, action.payload.auction],
        isLoading: false,
      };

    default:
      return state;
  }
};
