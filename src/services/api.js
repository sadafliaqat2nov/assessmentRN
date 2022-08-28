import axios from 'axios';
import * as util from '../utilities';
const create = (baseURL = util.constants.BASEURL) => {
  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  });
  const searchAction = params => api.get('?name=' + params);
  return {
    searchAction,
  };
};
export default {
  create,
};
