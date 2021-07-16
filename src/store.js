import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

const cartModule = {
  namespaced: true,
  state: {
    cart: [
      {
        name: "Product ABC",
        quantity: 8,
        value: 1000.0,
      },
    ],
  },
  mutations: {
    ADD_CART(state, cartProdut) {
      state.cart.push(cartProdut);
    },
  },
  actions: {
    addToCard(context, cartProdut) {
      context.commit("ADD_CART", cartProdut);
    },
  },
  getters: {
    cart: (state) => state.cart,
  },
};

const userModule = {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser(context, user) {
      context.commit("SET_USER", user);
    },
  },
  getters: {
    user: (state) => state.user,
  },
};
const store = new Vuex.Store({
  modules: {
    cart: cartModule,
    user: userModule,
  },
});

export default store;
