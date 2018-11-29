import request from 'utils/request';

export function query(params) {
  return request('http://192.168.80.210:18080/api/organization/tree/queryCondition', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      Authorization:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMzNjk4OTYsInVzZXJuYW1lIjoiNjAwMDQ3NTEifQ.l0UlEaJtXEYyPq-uOB9ij0uVlGZ4xOf9QMAkEdZX1iI',
    },
  });
}
