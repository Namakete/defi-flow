import { createApp } from 'vue';
import { pinia, router } from './providers';

import App from './app.vue';

export const app = createApp(App);

app.use(pinia);
app.use(router);
