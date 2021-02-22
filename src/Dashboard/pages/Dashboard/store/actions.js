const actions = {
   GET_PRODUCTS: 'GET_PRODUCTS',
   GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
   GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',

   SEARCH_PRODUCT: 'SEARCH_PRODUCT',
   getProducts: () => ({
      type: actions.GET_PRODUCTS,
   }),

   searchProducts: (name, category) => ({
      type: actions.SEARCH_PRODUCT,
      name,
      category,
   }),
};

export default actions;
