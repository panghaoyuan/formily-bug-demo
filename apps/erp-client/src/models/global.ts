export default {
  namespace: 'globalState',
  state: {
    collapsed: false,
  },

  effects: {
    // *queryUser({ payload }, { call, put }) {
    //   const { data } = yield call(queryUser, payload);
    //   yield put({ type: 'queryUserSuccess', payload: data });
    // },
  },

  reducers: {
    changeCollapsed(state, { payload }) {
      console.log('payload', payload);
      return {
        ...state,
        collapsed: payload,
      };
    },
    // queryUserSuccess(state, { payload }) {
    //   return {
    //     ...state,
    //     user: payload,
    //   };
    // },
  },
};
