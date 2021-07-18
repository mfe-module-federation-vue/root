import Vue from "vue";

import Vuex from "vuex";
import userModuleFromRoot from './userModuleFromRoot'
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

const store = new Vuex.Store({
  modules: {
    cart: cartModule,
    user: userModuleFromRoot,
  },
});

export default store;
