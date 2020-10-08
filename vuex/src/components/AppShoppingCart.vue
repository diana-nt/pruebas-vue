<template>
    <div>
        <h1>Carrito</h1>
        <hr>
        <ul>
            <li v-for="item in cartItems" :key="item.id">
                {{ item.title }} ({{ item.quantity }})
            </li>
        </ul>
    </div>
</template>

<script>
export default {
name: "AppShoppingCart.vue",
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