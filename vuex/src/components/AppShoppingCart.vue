<template>
    <div>
        <h1>Carrito</h1>
        <hr>
        <ul>
            <li v-for="(item, $index) in cartItems" :key="item.id">
                {{ item.title }} ({{ item.quantity }})
                <button @click="removeItem($index)">x</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
name: "AppShoppingCart.vue",
    methods: {
        removeItem(index){
            this.$store.dispatch('removeProductFromCart', index);
        }
    },
    computed: {
    cartItems() {
        return this.$store.getters.productsOnCarts;
    }
    }
}
</script>

<style scoped>

    ul {
        text-align: left;
    }

</style>