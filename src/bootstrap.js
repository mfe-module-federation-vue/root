import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import userConfig from "./helper-modules/user.module";
import UserTools from "auth/UserTools";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const initApp = async () => {
  await userConfig.getUser(); // Requesting once
  await UserTools.service.firstLoadUserData(); // Requesting once (from store)

  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
};

initApp();
