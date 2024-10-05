import { createApp } from "vue";
import { router } from "./providers";

import App from "./app.vue";

export const app = createApp(App);

app.use(router);
