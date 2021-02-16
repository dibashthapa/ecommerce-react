import actions from './actions';

const initialState = {
   success: false,
   loading: false,
   error: null,
   fashions: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.GET_FASHIONS:
         return {
            ...state,
            loading: true,
         };

      case actions.GET_FASHIONS_SUCCESS:
         console.log('action');
         return {
            ...state,
            success: true,
            loading: false,
            fashions: action.response,
         };

      case actions.GET_FASHIONS_FAILURE:
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
