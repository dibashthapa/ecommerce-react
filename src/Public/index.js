import { RegisterSaga } from './pages/Register/store';

export const publicReducer = {};

export { default as publicRoutes } from './config/routes';

export const publicSaga = [RegisterSaga()];
