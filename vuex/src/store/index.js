import Vue from 'vue';
import Vuex from 'vuex';

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
  actions: {},
  modules: {}
})
