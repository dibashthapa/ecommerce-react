const actions = {
   GET_FASHIONS: 'GET_FASHIONS',
   GET_FASHIONS_SUCCESS: 'GET_FASHIONS_SUCCESS',
   GET_FASHIONS_FAILURE: 'GET_FASHIONS_FAILURE',
   getFashions: () => ({
      type: actions.GET_FASHIONS,
   }),
};

export default actions;
