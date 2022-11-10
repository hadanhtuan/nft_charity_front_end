import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://api.binance.com/api/v1/ticker/',
});

export const get = async (path, options = {}) => {
    const res = await httpRequest.get(path, options);
    return res.data;
};

export const post = async (path, options = {}) => {
    const res = await httpRequest.post(path, options);
    return res.data;
};

export const put = async (path, options = {}) => {
    const res = await httpRequest.put(path, options);
    return res.data;
};

export default httpRequest;
