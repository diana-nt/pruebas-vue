<template>
        <div>
            <hr>
            <input
                type="text"
                v-model="title"
                placeholder="Selecciona producto">
        </div>
</template>

<script>
export default {
name: "AppProductEdit.vue",
    computed: {
        // selectedProduct() {
        //     return this.$store.getters.selectedProduct;
        // }
        title: {
            get() {
                return this.$store.getters.selectedProduct.title;
            },
            set(value) {
                this.$store.commit('editProduct', {title: value})
            }
        }
    }
}
</script>

<style scoped>

</style>