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
});

export default store;
