import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/shop.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
      //Las mutaciones son la unica forma que tenemos de cambiar el estado en vuex.
      //Son similares a los eventos.
  mutations: {
    setProducts(state, products){
      state.products = products;
    },
    incrementProductQuantity(state, item) {
      item.quantity++;
    },
    addProductToCart(state, product){
      state.cart.push({
        id: product.id,
        quantity: 1
      })
    },
    removeProductFromCart(state, index){
      state.cart.splice(index, 1);
    },
    decrementProductInventory(state, product){
      product.inventory--;
    },
    incrementProductInventory(state, item){
      const product = state.products.find(product => product.id === item.id);
      product.inventory += item.quantity;
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
    },
    addProductToCart(context, product){
      //Hay inventario de ese producto?
      if (product.inventory === 0) return;

      //Existe ya en el carrito?
      const item = context.state.cart.find(item => item.id === product.id);

      if (item) {
        //Si es asi, añadir uno mas a la compra
        context.commit('incrementProductQuantity', item);
      } else {
        //Si no es asi, añadir el producto al carrito
        context.commit('addProductToCart', product);
      }

      //Restar al inventario de ese producto
      context.commit('decrementProductInventory', product)
    },
    removeProductFromCart(context, index){
      const item = context.state.cart[index];

      //Eliminar el producto del carrito.
      context.commit('removeProductFromCart', index);

      //Restaurar el inventario.
      context.commit('incrementProductInventory', item);
    }
  },
      //Propiedades computadas para stores
  getters: {
  productsOnStock(state){
    return state.products.filter(product => {
      return product.inventory > 0;
    })
  },
    productsOnCarts(state){
      return state.cart.map(item => {
        const product = state.products.find(product => product.id === item.id);
        return {
          title: product.title,
          price: product.price,
          quantity: item.quantity
        }
      })
    },
    cartTotal (state, getters) {
      return getters.productsOnCarts.reduce((total, current) => total + current.price * current.quantity, 0);
    }
  },
  modules: {}
})
