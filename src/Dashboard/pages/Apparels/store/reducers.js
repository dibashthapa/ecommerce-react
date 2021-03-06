import actions from './actions';

const initialState = {
   success: false,
   loading: false,
   error: null,
   apparels: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.GET_APPARELS:
         return {
            ...state,
            loading: true,
         };

      case actions.GET_APPARELS_SUCCESS:
         return {
            ...state,
            success: true,
            loading: false,
            apparels: action.response.paginatedApparel,
            totalPages: action.response.totalPages,
         };

      case actions.GET_APPARELS_FAILURE:
         return {
            ...state,
            success: false,
            loading: false,
            error: action.error,
         };

      default:
         return state;
   }
};

export default reducer;
