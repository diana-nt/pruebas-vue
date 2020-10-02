<template>
    <div>
        <h1>Tareas</h1>
        <input type="text" placeholder="Añadir item" v-model="nuevoItem"/>
        <input type="button" value="Agregar item" @click="agregarItem"/>
        <br/>
        <input type="search" placeholder="Filtrar por título de items" v-model="filtroItems"/>
        <Tarea
            v-for="(item, $index) in itemsFiltrados"
            :key="item.id"
            :titulo="item.title"
            @eliminarItem="eliminarItem($index)">
        </Tarea>
    </div>
</template>

<script>
import todoService from "../services/todoService";
import Tarea from '@/components/Tarea';
import {crudItemsMixin} from "../mixins/crudItems.js";

export default {
    name: "Tareas",
    mixins: [crudItemsMixin],
    components: {
        Tarea
    },
    // data() {
    //     return {
    //         nuevoItem: '',
    //         filtroItems:''
    //     }
    // },
    async created() {
        console.log(crudItemsMixin)
        const items = await todoService.get();
        this.items = items.data
        console.log(this.items)
    },

};
</script>

<style scoped>

</style>