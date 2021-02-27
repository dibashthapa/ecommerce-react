import { put, call, all, takeLatest } from 'redux-saga/effects';
import Api from '../../../../App/services/api';
import actions from './actions';

const api = new Api();

export const getProducts = takeLatest(actions.GET_PRODUCTS, function* (action) {
   try {
      const data = yield call(api.get, `product/category/all?page=${action.page}`);
      yield put({ type: actions.GET_PRODUCTS_SUCCESS, response: data });
   } catch (error) {
      yield put({ type: actions.GET_PRODUCTS_FAILURE, error });
   }
});

export const addToCart = takeLatest(actions.ADD_TO_CART, function* (action) {
   try {
      yield call(action.resolve, { success: true });
   } catch (error) {
      yield call(action.reject, { error: error });
   }
});

export default function* saga() {
   yield all([getProducts, addToCart]);
}
