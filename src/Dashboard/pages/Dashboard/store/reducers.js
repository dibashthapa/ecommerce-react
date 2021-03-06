import actions from './actions';

const initialState = {
   success: false,
   loading: false,
   error: null,
   products: [],
   filteredProducts: [],
   cartProduct: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.GET_PRODUCTS:
         return {
            ...state,
            loading: true,
         };
      case actions.ADD_TO_CART:
         return {
            ...state,
            cartProduct: state.cartProduct.some((p) => p.id === action.product.id)
               ? [...state.cartProduct]
               : [...state.cartProduct, action.product],
         };

      case actions.GET_PRODUCTS_SUCCESS:
         return {
            ...state,
            success: true,
            loading: false,
            products: action.response,
            filteredProducts: action.response.paginatedProduct,
         };

      case actions.GET_PRODUCTS_FAILURE:
         return {
            ...state,
            success: false,
            loading: false,
            error: action.error,
         };

      case actions.SEARCH_PRODUCT:
         let newState = Object.assign({}, state);
         let value = action.name;
         let category = action.category;

         let filteredValues = category
            ? state.products.paginatedProduct
                 .filter((product) =>
                    product._category.toLowerCase().includes(category.toLowerCase())
                 )
                 .filter((product) =>
                    product.name.toLowerCase().includes(value.toLowerCase())
                 )
            : state.products.paginatedProduct.filter((product) =>
                 product.name.toLowerCase().includes(value.toLowerCase())
              );

         newState.filteredProducts = filteredValues;

         return newState;

      default:
         return state;
   }
};

export default reducer;
