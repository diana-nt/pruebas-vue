
<template>
    <div>
        <h1>Listado de productos</h1>
        <hr />
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} | {{ product.price }}
                <i>{{ product.inventory }} </i>
                <button @click="addToCart(product)">Cart</button>
            </li>
        </ul>
    </div>
</template>

<script>
// import api from "../api/shop.js";
export default {
    name: "AppProductList",
    async created() {
        try {
            await this.$store.dispatch("getProducts")
        } catch (error){
            console.log(error)
        }
    },
    methods: {
      addToCart(product) {
          this.$store.dispatch('addProductToCart', product);
      }
    },
    computed: {
        products() {
            // return this.$store.state.products;
            return this.$store.getters.productsOnStock;
        }
    }
};
</script>

<style scoped>
ul {
    text-align: left;
}
</style>