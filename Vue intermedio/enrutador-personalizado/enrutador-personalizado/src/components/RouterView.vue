<template>
    <component :is="visibleAhora" v-bind="parametros"></component>
</template>

<script>
import routes from "../routes";
import EventBus from "@/EventBus";
export default {
name: "RouterView.vue",
    created() {
    this.obtenerRuta();
    EventBus.$on('navegar', () => this.obtenerRuta());
    },
    data() {
        return {
            visibleAhora: null,
            parametros: null
        }
    },
    methods: {
        obtenerRuta() {
            let indice = routes.findIndex(route => {
                return route.path == window.location.pathname;
            });

            if (indice === -1){
                indice = 0;
            }

            this.visibleAhora = routes[indice].component;
            this.parametros = routes[indice].params;
        }
    }
}
</script>

<style scoped>

</style>