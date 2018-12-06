import request from '../utils/request';
import config from 'utils/config';

const { api } = config;

export function query(params) {
  return request({
    data: params,
    method: 'get',
    url: api.user.query,
  });
}
