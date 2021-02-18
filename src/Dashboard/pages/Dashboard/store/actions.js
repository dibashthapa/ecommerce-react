const actions = {
   GET_PRODUCTS: 'GET_PRODUCTS',
   GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
   GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',

   SEARCH_PRODUCT: 'SEARCH_PRODUCT',
   getProducts: () => ({
      type: actions.GET_PRODUCTS,
   }),

   searchProducts: (name) => ({
      type: actions.SEARCH_PRODUCT,
      name,
   }),
};

export default actions;
