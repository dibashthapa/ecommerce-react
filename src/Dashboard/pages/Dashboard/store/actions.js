const actions = {
   GET_PRODUCTS: 'GET_PRODUCTS',
   GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
   GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',

   SEARCH_PRODUCT: 'SEARCH_PRODUCT',

   ADD_TO_CART: 'ADD_TO_CART',

   getProducts: (page) => ({
      type: actions.GET_PRODUCTS,
      page,
   }),

   addProductToCart: (product, resolve, reject) => ({
      type: actions.ADD_TO_CART,
      product,
      resolve,
      reject,
   }),

   searchProducts: (name, category) => ({
      type: actions.SEARCH_PRODUCT,
      name,
      category,
   }),
};

export default actions;
