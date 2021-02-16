import { ApparelSaga, ApparelReducer } from './pages/Apparels/store';
import { FashionSaga, FashionReducer } from './pages/Fashion/store';

export const dashboardReducer = {
   apparels: ApparelReducer,
   fashions: FashionReducer,
};

export const dashboardSaga = [ApparelSaga(), FashionSaga()];

export { default as dashboardRoutes } from './config/routes';
