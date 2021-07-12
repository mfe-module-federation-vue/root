import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [
      {
        name: "Product ABC",
        quantity: 8,
        value: 1000.0,
      },
    ],
    user: null,
  },
  mutations: {
    ADD_CART(state, cartProdut) {
      state.cart.push(cartProdut);
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    addToCard(context, cartProdut) {
      context.commit("ADD_CART", cartProdut);
    },
    setUser(context, user) {
      context.commit("SET_USER", user);
    },
  },
  getters: {
    cart: (state) => state.cart,
    user: (state) => state.user,
  },
});

export default store;
