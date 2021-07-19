import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import userConfig from './helper-modules/user.module'


Vue.config.productionTip = false;
Vue.use(VueRouter);

const initApp = async () => {
  await userConfig.getUser() // Requesting once

  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app')
}

initApp()
