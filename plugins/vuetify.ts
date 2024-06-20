// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { pt } from "vuetify/locale";

export default defineNuxtPlugin(app => {
    const vuetify = createVuetify({
        locale: {
            locale: "pt",
            messages: { pt },
        },
    });
    app.vueApp.use(vuetify);
});
