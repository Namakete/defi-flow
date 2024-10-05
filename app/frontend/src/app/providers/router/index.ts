import { createRouter, createWebHistory } from 'vue-router';

import { routes as coreRoutes } from '@module/core/app/routes';

const routes = [...coreRoutes];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
