import { AsyncComponent } from '../utils';

export const routes = [
  {
    component: AsyncComponent(() => import('../components/Isotope')),
    path: '/',
    exact: true,
  },
];
