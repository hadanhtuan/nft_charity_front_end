import { FETCH_SOLIDITY, START_LOADING_SOLIDITY, CONNECT_ACC, UPDATE_END_AT } from '../constraint/actionTypes';

const initState = {
  account: null,
  nftContract: null,
  marketplaceContract: null,
  nftList: [],
  isLoading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case START_LOADING_SOLIDITY: {
      return { ...state, isLoading: true };
    }
    case FETCH_SOLIDITY:
      return {
        ...state,
        nftContract: action.payload.nftContract,
        marketplaceContract: action.payload.marketplaceContract,
        nftList: action.payload.nftList,
        isLoading: false,
      };
    case CONNECT_ACC:
      return {
        ...state,
        account: action.payload.account,
      };
    case UPDATE_END_AT:
      console.log(action.payload)
      console.log(state.nftList)
      return {
        ...state,
        nftList: state.nftList.map((nft) => {
          if (nft.id == action.payload.id) {
            console.log(action.payload.endAt)
            nft.endAt = action.payload.endAt
          }
          return nft
        }),
      };

    default:
      return state;
  }
};
