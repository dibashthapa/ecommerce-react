import { publicSaga } from '../../Public';
import { dashboardSaga } from '../../Dashboard';
import { all } from '@redux-saga/core/effects';

export default function* rootSaga() {
   yield all([...publicSaga, ...dashboardSaga]);
}
