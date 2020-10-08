import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/shop.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
      //Las mutaciones son la unica forma que tenemos de cambiar el estado en vuex.
      //Son similares a los eventos.
  mutations: {
    setProducts(state, products){
      state.products = products;
    }
  },
      //Las mutaciones siguen siendo las unicas capaces de cambiar el valor de algo en el state.
      //Las acciones pueden tener un comportamiento asincrono, hacer peticiones, operaciones...
      //y luego con el resultado de lo que han realizado, lanzar una mutacion.
  actions: {
    getProducts({ commit }) {
      return new Promise ((resolve) => {
        api.getProducts(products => {
          commit("setProducts", products);
          resolve()
        });
      })
    }
  },
  getters: {
  productsOnStock(state){
    return state.products.filter(product => {
      return product.inventory > 0;
    })
  }
  },
  modules: {}
})
