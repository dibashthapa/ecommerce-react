import { DashboardReducer, DashboardSaga } from './pages/Dashboard/store';

export const dashboardReducer = {
   dashboard: DashboardReducer,
};

export const dashboardSaga = [DashboardSaga()];

export { default as dashboardRoutes } from './config/routes';
