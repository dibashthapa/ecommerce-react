const actions = {
   GET_PRODUCTS: 'GET_PRODUCTS',
   GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
   GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',
   getProducts: () => ({
      type: actions.GET_PRODUCTS,
   }),
};

export default actions;
