import axios, { CancelToken } from 'axios';
import { cloneDeep } from 'lodash';
import pathToRegexp from 'path-to-regexp';

window.cancelRequest = new Map();

axios.defaults.baseURL = 'http://localhost:8000';

const CANCEL_REQUEST_MESSAGE = 'Request canceled';

function getRandomColor() {
  const tag = getRandomColor.tag + 1;
  getRandomColor.tag = tag === 7 ? 0 : tag;
  return getRandomColor.colors[tag];
}
getRandomColor.tag = 0;
getRandomColor.colors = [
  '#ff0000',
  '#ff4500',
  '#ff009d',
  '#008000',
  '#0000ff',
  '#8a2be2',
  '#000000',
];

function log(groupName, color, ...args) {
  const { group, groupEnd, info } = console;
  group(`%c${groupName}`, `color: ${color}`);
  info(...args);
  groupEnd(groupName);
}

export default function request(options) {
  let { data, url, method = 'get' } = options;
  const cloneData = cloneDeep(data);
  try {
    let domain = '';
    const urlMatch = url.match(/[a-zA-Z]+:\/\/[^/]*/);
    if (urlMatch) {
      [domain] = urlMatch;
      url = url.slice(domain.length);
    }

    const match = pathToRegexp.parse(url);
    url = pathToRegexp.compile(url)(data);

    for (let item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name];
      }
    }

    url = domain + url;
  } catch (e) {
    console.error(e.message);
  }

  options.url = url;
  options.data = cloneData;

  if (method.toLocaleLowerCase() === 'get') {
    options.params = cloneData;
  }

  options.cancelToken = new CancelToken(cancel => {
    window.cancelRequest.set(Symbol(Date.now()), {
      pathname: window.location.pathname,
      cancel,
    });
  });

  const logColor = getRandomColor();
  log('request', logColor, cloneData);

  return axios(options)
    .then(response => {
      const { status, statusText, data } = response;
      log('response', logColor, data);
      return Promise.resolve(data);
    })
    .catch(error => {
      const { response, message } = error;
      if (message === CANCEL_REQUEST_MESSAGE) {
        return Promise.reject({
          message,
          status: false,
        });
      }
    });
}
