import { takeEvery, call, all } from 'redux-saga/effects';
import Api from '../../../../App/services/api';
import actions from './actions';

const api = new Api(false);

export const register = takeEvery(actions.REGISTER, function* (action) {
   try {
      yield call(api.post, 'auth/register', action.data);
      yield call(action.resolve, { success: true });
   } catch (error) {
      yield call(action.reject, { success: false, error: error });
   }
});

export default function* saga() {
   yield all([register]);
}
