import axios from 'axios';

export const ADDRESS_WALLET = '0x77cb965DF8671Bc0Ab84194BCcF14CeD2da90907';
export const getHistoryTrans = () =>
  axios.get(
    `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${ADDRESS_WALLET}&startblock=0&endblock=99999999&apikey=WYDQJ7MTFSEQENZJIZ1P3V8F75VVKIURMA`,
  );
