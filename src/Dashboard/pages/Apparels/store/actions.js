const actions = {
   GET_APPARELS: 'GET_APPARELS',
   GET_APPARELS_SUCCESS: 'GET_APPARELS_SUCCESS',
   GET_APPARELS_FAILURE: 'GET_APPARELS_FAILURE',
   getApparels: (page) => ({
      type: actions.GET_APPARELS,
      page,
   }),
};

export default actions;
