import { put, call, all, takeLatest } from 'redux-saga/effects';
import Api from '../../../../App/services/api';
import actions from './actions';

const api = new Api();

export const getApparels = takeLatest(actions.GET_APPARELS, function* () {
   try {
      const data = yield call(api.get, `product/category/apparels`);
      yield put({ type: actions.GET_APPARELS_SUCCESS, response: data });
   } catch (error) {
      yield put({ type: actions.GET_APPARELS_FAILURE, error });
   }
});

export default function* saga() {
   yield all([getApparels]);
}
