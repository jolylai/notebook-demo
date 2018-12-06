import { query } from '../services/login';

export default {
  namespace: 'login',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
          dispatch({
            type: 'query',
            payload: { id: 1, name: 'jack' },
          });
        }
      });
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(query, payload);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
