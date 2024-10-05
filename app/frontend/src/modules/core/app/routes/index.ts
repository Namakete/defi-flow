import { Home } from '@module/core/pages/home/';
import { Profile } from '@module/core/pages/profile/';

export const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/profile',
    redirect: '/'
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: Profile
  }
];
