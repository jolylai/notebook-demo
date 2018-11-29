import { query } from './service';

export default {
  namespace: 'orgTree',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {},
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(query, payload);

      if (response.status) {
        yield put({
          type: 'updateState',
          payload: { data: response.body.list },
        });
      }
      return response;
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
