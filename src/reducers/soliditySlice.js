import {
  FETCH_SOLIDITY,
  START_LOADING,
  END_LOADING,
  CONNECT_ACC,
  FETCH_NFT
} from "../constraint/actionTypes";

const initState = {
  account: null,
  nftContract: null,
  marketplaceContract: null,
  nftList: [],
  isLoading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case START_LOADING: {
      return { ...state, isLoading: true };
    }
    case FETCH_SOLIDITY:
      return {
        ...state,
        account: action.payload.account,
        nftContract: action.payload.nftContract,
        marketplaceContract: action.payload.marketplaceContract,
        isLoading: true
      };
    case CONNECT_ACC:
      return {
        ...state,
        account: action.payload.account,
      };
    case FETCH_NFT:
      return {
        ...state,
        nftList: action.payload,
      };

    default:
      return state;
  }
};
