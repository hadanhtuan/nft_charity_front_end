import { getHistoryTrans } from '../apis/getHistoryTrans';
import { FETCH_HISTORY } from '../constraint/actionTypes';

export const fetchHistoryTrans = () => async (dispatch) => {
  const data = await getHistoryTrans();
  const result = data.data.result;
  console.log('fetchedd api: ', result);
  dispatch({
    type: FETCH_HISTORY,
    payload: {
      historyTrans: result,
    },
  });
};
