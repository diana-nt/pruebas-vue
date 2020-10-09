import Vue from 'vue';
import Vuex from 'vuex';
import shop from "../api/shop";
import cart from "./cart";
import products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    cart,
    products
  },
  state: {
    checkoutError: false,
  },
      //Las mutaciones son la unica forma que tenemos de cambiar el estado en vuex.
      //Son similares a los eventos.
  mutations: {
    setCheckoutError(state, error) {
      state.checkoutError = error;
    }
  },
      //Las mutaciones siguen siendo las unicas capaces de cambiar el valor de algo en el state.
      //Las acciones pueden tener un comportamiento asincrono, hacer peticiones, operaciones...
      //y luego con el resultado de lo que han realizado, lanzar una mutacion.
  actions: {
    checkout({ commit, state }){
      shop.buyProducts(state.cart.cart, () => {
        commit("emptyCart");
        commit("setCheckoutError", false);
      }, () => {
        commit("setCheckoutError", true);
      })
    }
  },
      //Propiedades computadas para stores
  getters: {
  },
})
