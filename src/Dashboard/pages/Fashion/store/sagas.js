import { put, call, all, takeLatest } from 'redux-saga/effects';
import Api from '../../../../App/services/api';
import actions from './actions';

const api = new Api();

export const getFashions = takeLatest(actions.GET_FASHIONS, function* () {
   try {
      const data = yield call(api.get, `product/category/fashions?page=1`);
      yield put({ type: actions.GET_FASHIONS_SUCCESS, response: data });
   } catch (error) {
      yield put({ type: actions.GET_FASHIONS_FAILURE, error });
   }
});

export default function* saga() {
   yield all([getFashions]);
}
