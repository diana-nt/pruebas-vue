<template>
    <div id="app">
        <AppProductList />
        <AppShoppingCart />
    </div>
</template>

<script>
    import AppProductList from "./components/AppProductList.vue";
    import AppShoppingCart from "./components/AppShoppingCart";
    export default {
        name: "app",
        components: {
            AppProductList,
            AppShoppingCart
        }
    };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
}

#app > * {
    flex-basis: 49%;
}
</style>
