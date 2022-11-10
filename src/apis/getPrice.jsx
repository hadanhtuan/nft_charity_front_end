import * as requestData from '../utils/binance';

export const getPrice = async (symbol) => {
    try {
        const res = await requestData.get('24hr', {
            params:
            {
                symbol
            }
        });
        return res;
    } catch (error) {
        console.log(error);
        return {};
    }
};
