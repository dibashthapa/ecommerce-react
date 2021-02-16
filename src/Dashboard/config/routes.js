import Dashboard from '../pages/Dashboard';
import Apparels from '../pages/Apparels';
import Fashions from '../pages/Fashion';

const routes = [
   {
      name: 'dashboard',
      path: '/',
      component: Dashboard,
   },
   {
      name: 'apparels',
      path: '/apparels',
      component: Apparels,
   },
   {
      name: 'Fashions',
      path: '/fashions',
      component: Fashions,
   },
];

export default routes;
