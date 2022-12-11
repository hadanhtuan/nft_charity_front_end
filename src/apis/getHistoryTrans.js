import axios from 'axios';

export const ADDRESS_WALLET = '0xB36A42CcC1446B8ed7dEe6975AcCc6163d2aE97f';
export const getHistoryTrans = () =>
  axios.get(
    `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${ADDRESS_WALLET}&startblock=0&endblock=99999999&apikey=WYDQJ7MTFSEQENZJIZ1P3V8F75VVKIURMA`,
  );
