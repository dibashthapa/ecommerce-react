import { ApparelSaga, ApparelReducer } from './pages/Apparels/store';
import { FashionSaga, FashionReducer } from './pages/Fashion/store';
import { ProductSaga, ProductReducer } from './pages/Dashboard/store';
export const dashboardReducer = {
   apparels: ApparelReducer,
   fashions: FashionReducer,
   products: ProductReducer,
};

export const dashboardSaga = [ApparelSaga(), FashionSaga(), ProductSaga()];

export { default as dashboardRoutes } from './config/routes';
